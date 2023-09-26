import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import QuotesFormFields from "./components/edit/QuotesFormFields";
import 'flatpickr/dist/flatpickr.css';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import {useParams} from "react-router-dom";
import Api from "../../config/api";
import {resetForm, updateFormData} from "../../store/quoteFormSlice";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import {useUserStatus} from "../../config/authCheck";

const Edit = () => {
    const {hasPermission} = useUserStatus();
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.quoteForm);

    const [loading, setLoading] = useState(true);
    const params = useParams();
    const quoteId = params.id;
    const api = new Api();

    useEffect(() => {
        dispatch(setPageTitle('Quotes Edit'));
    });

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

    if (loading)
        return <LoadingSasCrm/>


    return (
        (!hasPermission(`update-quote`) || loading ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <QuotesFormFields/>
                </div>
            </div>
        </div>
        )
    );
};

export default Edit;
