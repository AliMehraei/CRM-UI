import {Link, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import VendorFormFields from "./components/create/VendorFormFields";
import QuotesFormFields from "../Quotes/components/create/QuotesFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";

const Add = () => {
    const formState = useSelector((state: any) => state.vendorForm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Vendor Add'));
    });

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <VendorFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Add;
