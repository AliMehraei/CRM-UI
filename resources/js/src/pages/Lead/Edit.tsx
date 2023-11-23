import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import LeadFormFields from "./components/edit/LeadFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {resetForm, updateFormData} from "../../store/leadFormSlice";
import LoadingSasCrm from "../../components/LoadingSasCrm"
import Api from "../../config/api";
import {useParams} from "react-router-dom";
import {useUserStatus} from "../../config/authCheck";
import {updateErrors} from "../../store/formErrorsSlice";
import {globalToast, notifyErrorMessage} from "../../components/Functions/CommonFunctions";

const Edit = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.leadForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const leadId = params.id;
    const api = new Api();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(resetForm());
    }, []);

    const fetchData = async () => {
        const leadResponse = await api.fetchSingleLead(leadId);
        if (leadResponse.status != 200)
            return
        const lead = leadResponse.data.data.lead;
        dispatch(updateFormData(lead));
    };

    const handleConvertLead = async () => {
        const response: any = await api.convertLeadValidation({
            'id': formState.id,
        });
        if (response.status == 200) {
            navigate(`/lead/convert/${leadId}`, {replace: true});
        } else if (response.status === 422) {
            const errorData = response.data.errors;
            const errorsToUpdate = {titleMessage: "You have validation error on converting lead", hasError: true, ...Object.fromEntries(Object.entries(errorData).map(([field, value]: any) => [field, value[0]]))};
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
                title: 'Internal Server Error ,submitting form failed',
                padding: '10px 20px',
            });
        }
    }

    useEffect(() => {
        dispatch(setPageTitle('Lead Edit'));
    });


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);
        });
    }, [leadId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleLead',
            redirectTo: '/lead/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingSasCrm/>

    return (
        (!hasPermission(`update-lead`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <div className='px-4'>
                <ActionButtonsComponent disabled={formState.status == 'converted'} formState={formState}
                                        resetForm={resetForm}/>
                {formState.status == 'converted' && (<div
                    className="flex items-center p-3.5 rounded text-warning bg-warning-light dark:bg-warning-dark-light mb-5">
                    <span className="ltr:pr-2 rtl:pl-2 flex item-center">
                        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>This lead has been converted before , you can not modify it .
                    </span>
                </div>)}


                <div className="flex xl:flex-row flex-col gap-2.5">
                    <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                        {formState.status != 'converted' && (
                            <button onClick={handleConvertLead} className="mx-5 btn btn-secondary gap-2">
                                Convert Lead
                            </button>)}
                        <LeadFormFields/>
                    </div>
                </div>
            </div>
        )
    );
};

export default Edit;
