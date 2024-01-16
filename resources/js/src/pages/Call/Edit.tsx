import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import CallFormFields from "./components/edit/CallFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {resetForm, updateFormData} from "../../store/callFormSlice";
import LoadingSasCrm from "../../components/LoadingSasCrm"
import Api from "../../config/api";
import {useParams} from "react-router-dom";
import {useUserStatus} from "../../config/authCheck";

const Edit = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.callForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const callId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Call Edit'));
    });

    useEffect(() => {
        dispatch(resetForm());
    }, []);

    const fetchData = async () => {
        const callResponse = await api.fetchSingleCall(callId);
        if (callResponse.status != 200)
            return
        const call = callResponse.data.data.call;
        dispatch(updateFormData(call));
    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);
        });
    }, [callId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleCall',
            redirectTo: '/call/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingSasCrm/>

    return (
        (!hasPermission(`update-call`) || loading ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <CallFormFields/>
                </div>
            </div>
        </div>
        )

    );
};

export default Edit;
