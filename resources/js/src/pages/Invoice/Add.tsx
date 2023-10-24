import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import InvoiceFormFields from "./components/create/InvoiceFormFields";
import 'flatpickr/dist/flatpickr.css';
import {resetForm} from "../../store/invoiceFormSlice";
import {useUserStatus} from "../../config/authCheck";
import LoadingSasCrm from '../../components/LoadingSasCrm';

const Add = () => {
    const {hasPermission} = useUserStatus();

    const formState = useSelector((state: any) => state.invoiceForm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Invoice Add'));
    });

    useEffect(() => {
        dispatch(resetForm());
    }, []);


    return (
        (!hasPermission(`create-invoice`) ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <InvoiceFormFields/>
                </div>
            </div>
        </div>
        )
    );
};

export default Add;
