import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import PurchaseOrderFormFields from "./components/edit/PurchaseOrderFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {resetForm, updateFormData} from "../../store/purchaseOrderFormSlice";
import LoadingSasCrm from "../../components/LoadingSasCrm"
import Api from "../../config/api";
import {useParams} from "react-router-dom";
import {useUserStatus} from "../../config/authCheck";

const Add = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.purchaseOrderForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const purchaseOrderId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('PurchaseOrder Edit'));
    });

    const fetchData = async () => {
        const purchaseOrderResponse = await api.fetchSinglePurchaseOrder(purchaseOrderId);
        if (purchaseOrderResponse.status != 200)
            return
        const purchaseOrder = purchaseOrderResponse.data.data.purchaseOrder;
        dispatch(updateFormData(purchaseOrder));
    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);
        });
    }, [purchaseOrderId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSinglePurchaseOrder',
            redirectTo: '/purchase/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingSasCrm/>

    return (
        (!hasPermission(`update-purchase-order`) || loading ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <PurchaseOrderFormFields/>
                </div>
            </div>
        </div>
        )

    );
};

export default Edit;
