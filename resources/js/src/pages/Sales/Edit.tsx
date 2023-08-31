import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import SalesOrderFormFields from "./components/edit/SalesOrderFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {resetForm, updateFormData} from "../../store/salesOrderFormSlice";
import LoadingAlpyn from "../../components/LoadingAlpyn"
import Api from "../../config/api";
import {useParams} from "react-router-dom";

const Edit = () => {
    const formState = useSelector((state: any) => state.salesOrderForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const salesOrderId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('SalesOrder Edit'));
    });

    const fetchData = async () => {
        const salesOrderResponse = await api.fetchSingleSalesOrder(salesOrderId);
        if (salesOrderResponse.status != 200)
            return
        const salesOrder = salesOrderResponse.data.data.salesOrder;
        dispatch(updateFormData(salesOrder));
    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);
        });
    }, [salesOrderId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleSalesOrder',
            redirectTo: '/sales/edit/:id',
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
                    <SalesOrderFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
