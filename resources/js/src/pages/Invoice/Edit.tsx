import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import InvoiceFormFields from "./components/edit/InvoiceFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import Api from "../../config/api";
import {useParams} from "react-router-dom";
import {resetForm, updateFormData} from "../../store/invoiceFormSlice";
import LoadingAlpyn from "../../components/LoadingAlpyn"
import 'flatpickr/dist/flatpickr.css';

const Edit = () => {
    const formState = useSelector((state: any) => state.invoiceForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const invoiceId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Invoice Edit'));
    });

    const fetchData = async () => {
        const invoiceResponse = await api.fetchSingleInvoice(invoiceId);
        if (invoiceResponse.status != 200)
            return
        const invoice = invoiceResponse.data.data.invoice;
        dispatch(updateFormData(invoice));
    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);

        });
    }, [invoiceId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleInvoice',
            redirectTo: '/invoice/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingAlpyn/>

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <InvoiceFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
