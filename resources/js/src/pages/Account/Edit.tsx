import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {resetForm, updateFormData} from "../../store/accountFormSlice";
import {useParams} from "react-router-dom";
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import AccountFormFields from "./components/edit/AccountFormFields";

const Edit = () => {
    const formState = useSelector((state: any) => state.accountForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const accountId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Account Edit'));
    });
    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleAccount',
            redirectTo: '/account/edit/:id',
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
        const accountResponse = await api.fetchSingleAccount(accountId);
        if (accountResponse.status != 200)
            return;
        const account = accountResponse.data.data.account;
        dispatch(updateFormData(account));
    };
    if (loading)
        return <LoadingSasCrm/>
    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <AccountFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
