import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import 'flatpickr/dist/flatpickr.css';
import {useUserStatus} from "../../config/authCheck";
import LoadingSasCrm from '../../components/LoadingSasCrm';
import {useNavigate, useParams} from "react-router-dom";
import {notifyErrorMessage} from "../../components/Functions/CommonFunctions";
import Api from "../../config/api";
import AccountExists from "./components/convert/AccountExists";
import AccountNotExists from "./components/convert/AccountNotExists";
import {updateFormData} from "../../store/leadFormSlice";

const Add = () => {
    const formState = useSelector((state: any) => state.leadForm);
    const {hasPermission} = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [accountExists, setAccountExists] = useState(false);
    const params = useParams();
    const leadId = params.id;
    const api = new Api();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setPageTitle('Lead Convert'));
    });
    const checkAccountExists = async (companyName: string) => {
        const checkAccountResponse = await api.checkAccountExists({
            'field': 'account_name',
            'value': companyName,
        });
        if (checkAccountResponse.status != 200)
            throw new Error(`Failed to check account exists. Status code: ${checkAccountResponse.status}`);
        return checkAccountResponse.data.exists;
    }
    const fetchLead = async () => {
        const leadResponse = await api.fetchSingleLead(leadId);
        if (leadResponse.status != 200)
            throw new Error(`Failed to fetch lead data. Status code: ${leadResponse.status}`);

        const lead = leadResponse.data.data.lead;
        dispatch(updateFormData(lead));

        return lead;
    };

    const handleDataFetching = async () => {
        const lead = await fetchLead();
        const accountExists = await checkAccountExists(lead.company);
        setAccountExists(accountExists);
    }


    useEffect(() => {
        handleDataFetching()
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                notifyErrorMessage(error.message);
                console.error(error)
            });
    }, [leadId]);


    //TODO : fix permission
    if (loading || !hasPermission(`create-lead`))
        return <LoadingSasCrm/>;

    return (

        <div className='px-4'>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <div className="mt-8 px-4">
                        <div className="flex flex-row items-center gap-2.5">
                            <h3 className="font-bold text-xl ">Convert Lead</h3>
                            <span
                                className="text-sm">({`${formState.first_name} ${formState.last_name} - ${formState.company}`})</span>
                        </div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                        {accountExists ? <AccountExists/> : <AccountNotExists/>}

                        <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                        <div className="flex gap-2.5 px-5">
                            <button className="btn btn-primary">Convert</button>

                            <button onClick={() => {
                                navigate(`/lead/list/`, {replace: true});
                            }} className="btn btn-outline-dark">Cancel
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Add;
