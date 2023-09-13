import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import RFQFormFields from "./components/edit/RFQFormFields";
import {resetForm, updateFormData} from "../../store/rfqFormSlice";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import Api from "../../config/api";
import {useParams} from "react-router-dom";

const Edit = () => {
    const formState = useSelector((state: any) => state.rfqFormSlice);
    const dispatch = useDispatch();
    const api = new Api();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const rfqId = params.id;

    useEffect(() => {
        dispatch(setPageTitle('RFQ Edit'));
    });
    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [rfqId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleRfq',
            redirectTo: '/rfq/edit/:id',
            action: 'edit'
        };
        dispatch(updateFormData(formDataUpdates));
    }, []);

    const fetchData = async () => {
        const response = await api.fetchSingleRfq(rfqId);
        if (response.status != 200)
            return
        const quote = response.data.data.rfq;
        dispatch(updateFormData(quote));
    };

    if (loading)
        return <LoadingSasCrm/>

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <RFQFormFields/>
                </div>
            </div>
        </div>
    );
};

export default Edit;
