import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import VendorRfqFormFields from "./components/create/VendorRfqFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {resetForm} from "../../store/vendorRfqFormSlice";
import {useUserStatus} from "../../config/authCheck";
import LoadingSasCrm from '../../components/LoadingSasCrm';

const Add = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.vendorRfqForm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Vendor Rfq Add'));
    });

    useEffect(() => {
        dispatch(resetForm());
    }, []);

    return (
        (!hasPermission(`create-vendor-rfq`) ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <VendorRfqFormFields/>
                </div>
            </div>
        </div>
        )

    );
};

export default Add;
