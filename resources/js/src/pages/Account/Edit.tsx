import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {updateFormData} from "../../store/accountFormSlice";
import {useParams} from "react-router-dom";
import Api from "../../config/api";
import LoadingAlpyn from "../../components/LoadingAlpyn";
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
            api: 'updateSingleManufacture',
            redirectTo: 'updateSingleManufacture',
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
        console.log(accountResponse);
        const account = accountResponse.data.data.account;
        dispatch(updateFormData(account));
    /*    if (account.vendor_line_card_id) {
            await handleFetchingVendor(account.vendor_line_card_id, 'vendor_line_card');
        }
        if (account.vendor_line_card_id) {
            await handleFetchingVendor(account.vendor_line_card_id, "vendor_strong_lines");
        }
*/
        const ownerResponse = await api.loadUserById({id: account.owner_id});
        const owner = ownerResponse.data.data;
        dispatch(updateFormData({['owner']: owner}));
    };
    if (loading)
        return <LoadingAlpyn/>
    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <AccountFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
