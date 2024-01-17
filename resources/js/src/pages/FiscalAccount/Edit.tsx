import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {resetForm, updateFormData} from "../../store/fiscalAccountFormSlice";
import {useParams} from "react-router-dom";
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import AccountFormFields from "./components/FiscalAccountFormFields";
import {useUserStatus} from "../../config/authCheck";

const Edit = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.fiscalAccountForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const accountId = params.id?.toString();
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Fiscal Account Edit'));
    });

    useEffect(() => {
        dispatch(resetForm());
    }, []);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleFiscalAccount',
            redirectTo: '/fiscal_account/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);

        });
    }, [accountId]);

    const fetchData = async () => {
        const accountResponse = await api.fetchSingleFiscalAccount(accountId);
        if (accountResponse.status != 200)
            return;
        const account = accountResponse.data.data.fiscalAccount;
        dispatch(updateFormData(account));
    };
    if (loading)
        return <LoadingSasCrm/>
    return (
        (!hasPermission(`update-fiscal-account`) || loading ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <AccountFormFields action='edit'/>
                </div>
            </div>
        </div>
        )
    );
};

export default Edit;
