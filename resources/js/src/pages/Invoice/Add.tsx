import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import InvoiceFormFields from "./components/create/InvoiceFormFields";

const Add = () => {
    const formState = useSelector((state: any) => state.invoiceForm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Invoice Add'));
    });

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <InvoiceFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Add;
