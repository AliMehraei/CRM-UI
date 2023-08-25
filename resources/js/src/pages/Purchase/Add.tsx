import {Link, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import PurchaseOrderFormFields from "./components/create/PurchaseOrderFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';

const Add = () => {
    const formState = useSelector((state: any) => state.purchaseOrderForm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Purchase Order Add'));
    });

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <PurchaseOrderFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Add;
