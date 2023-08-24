import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import QuotesFormFields from "./components/create/QuotesFormFields";
import 'flatpickr/dist/flatpickr.css';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import {useParams} from "react-router-dom";
import Api from "../../config/api";
import {updateFormData} from "../../store/quoteFormSlice";
import LoadingAlpyn from "../../components/LoadingAlpyn";

const Edit = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.quoteform);

    const [loading, setLoading] = useState(true);
    const params = useParams();
    const quoteId = params.id; // Assuming you are using React Router to handle routes
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
            redirectTo: 'updateSingleQuote',
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
        return <LoadingAlpyn/>


    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <QuotesFormFields/>
                </div>
            </div>
        </div>
    );
};

export default Edit;
