import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import QuotesFormFields from "./components/edit/QuotesFormFields";
import 'flatpickr/dist/flatpickr.css';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import {useNavigate, useParams} from "react-router-dom";
import Api from "../../config/api";
import {resetForm, updateFormData} from "../../store/quoteFormSlice";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import {useUserStatus} from "../../config/authCheck";
import Swal from "sweetalert2";
import {globalToast, notifyErrorMessage} from "../../components/Functions/CommonFunctions";
import {updateErrors} from "../../store/formErrorsSlice";

const Edit = () => {
    const {hasPermission} = useUserStatus();
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.quoteForm);

    const [loading, setLoading] = useState(true);
    const params = useParams();
    const quoteId = params.id;
    const api = new Api();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setPageTitle('Quotes Edit'));
    });

    useEffect(() => {
        dispatch(resetForm());
    }, []);


    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [quoteId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleQuote',
            redirectTo: '/quotes/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    const fetchData = async () => {
        const response = await api.fetchSingleQuote(quoteId);
        if (response.status != 200)
            return
        const quote = response.data.data.quote;
        dispatch(updateFormData(quote));
    };

    const handleConvertQuote = async () => {
        try {
            const response: any = await api.convertQuoteToSalesOrder({
                'id': formState.id,
            });
            if (response.status == 200) {

                Swal.fire({
                    title: 'Quote Converted Successfully.',
                    html: `
                <span class="text-blue-500">Do you want to redirect to created SalesOrder ? </span>
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
                        navigate(`/sales/edit/${response.data.salesOrder.id}`, {replace: true});
                    }
                })

            } else if (response.status === 422) {
                const errorData = response.data.errors;
                const errorsToUpdate = {titleMessage: "You have validation error on converting Sales Order", hasError: true, ...Object.fromEntries(Object.entries(errorData).map(([field, value]: any) => [field, value[0]]))};
                dispatch(updateErrors(errorsToUpdate));
                globalToast.fire({
                    icon: 'error',
                    html: `<h5>Convert Validation Error</h5>
                        <span style="font-size: 12px">Please Check fields</span>
                        `,
                    padding: '10px 20px',

                });
            } else {
                globalToast.fire({
                    icon: 'error',
                    title: 'Internal Server Error ,Converting Sales Order failed failed',
                    padding: '10px 20px',
                });
            }

        } catch (exception) {
            notifyErrorMessage("Failed to convert sales order")
            console.error(exception)
            return;
        }
    };


    if (loading)
        return <LoadingSasCrm/>


    return (
        (!hasPermission(`update-quote`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <div className='px-4'>
                <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
                <div className="flex xl:flex-row flex-col gap-2.5">
                    <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                        <button onClick={handleConvertQuote} className="mx-5 btn btn-secondary gap-2">
                            Convert Quote to Sales Order
                        </button>
                        <QuotesFormFields/>
                    </div>
                </div>
            </div>
        )
    );
};

export default Edit;
