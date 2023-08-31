import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import VendorFormFields from "./components/create/VendorFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import {resetForm} from "../../store/vendorFormSlice";

const Add = () => {
    const formState = useSelector((state: any) => state.vendorForm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Vendor Add'));
    });

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <VendorFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Add;
