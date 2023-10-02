import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import SalesOrderFormFields from "./components/edit/SalesOrderFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {resetForm, updateFormData} from "../../store/salesOrderFormSlice";
import LoadingSasCrm from "../../components/LoadingSasCrm"
import Api from "../../config/api";
import {useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";
import {notifyErrorMessage} from "../../components/Functions/CommonFunctions";
import {useUserStatus} from "../../config/authCheck";

const Edit = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.salesOrderForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const salesOrderId = params.id;
    const api = new Api();
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    // const handleConvertSOPO = async () => {
    //     try {
    //         const convertSOResponse: any = await api.convertSalesOrderToPurchaseOrder({
    //             'id': formState.id,
    //         });
    //         Swal.fire({
    //             title: 'Sales Order Converted Successfully.',
    //             html: `
    //             <span class="text-blue-500">Do you want to redirect to created Purchase Order ? </span>
    //             `,
    //             showCancelButton: true,
    //             icon: 'success',
    //             confirmButtonText: 'Redirect',
    //             denyButtonText: `Close`,

    //             customClass: {
    //                 title: 'text-blue-500',
    //             }
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 navigate(`/purchase_order/edit/${convertSOResponse.data.purchase_order.id}`, {replace: true});
    //             }
    //         })


    //     } catch (exception) {
    //         notifyErrorMessage("Failed to convert Sales Order")
    //         console.error(exception)
    //         return;
    //     }
    // };
    const handleConvertSOIn = async () => {
        try {
            const convertsalesOrderResponse: any = await api.convertQuoteToSalesOrder({
                'id': formState.id,
            });
            Swal.fire({
                title: 'salesOrder Converted Successfully.',
                html: `
                <span class="text-blue-500">Do you want to redirect to created Invoice ? </span>
                `,
                showCancelButton: true,
                icon: 'success',
                confirmButtonText: 'Redirect',
                denyButtonText: `Close`,

                customClass: {
                    title: 'text-blue-500',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/invoice/edit/${convertsalesOrderResponse.data.invoice.id}`, {replace: true});
                }
            })


        } catch (exception) {
            notifyErrorMessage("Failed to convert Rfq")
            console.error(exception)
            return;
        }
    };
    
    if (loading)
        return <LoadingSasCrm/>

    return (
        (!hasPermission(`update-sales-order`) || loading ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <div className="flex items-center gap-2">
                        {/* <button onClick={handleConvertSOPO} className="mx-2 btn btn-secondary">
                                Convert SO to PO
                        </button> */}
                        <button onClick={handleConvertSOIn} className="mx-2 btn btn-secondary">
                                    Convert SO to Invoice
                        </button>
                    </div>
              
                    <SalesOrderFormFields/>
                </div>
            </div>
        </div>
        )

    );
};

export default Edit;
