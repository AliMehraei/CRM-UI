import {Link, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import LeadFormFields from "./components/edit/LeadFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {updateFormData} from "../../store/leadFormSlice";
import LoadingAlpyn from "../../components/LoadingAlpyn"
import Api from "../../config/api";
import {useParams} from "react-router-dom";

const Edit = () => {
    const formState = useSelector((state: any) => state.leadForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const leadId = params.id; // Assuming you are using React Router to handle routes
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Lead Edit'));
    });

    const fetchData = async () => {
        const leadResponse = await api.fetchSingleLead(leadId);
        if (leadResponse.status != 200)
            return
        const lead = leadResponse.data.data.lead;
        dispatch(updateFormData(lead));
    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);
            console.log('formState',formState);
            

        });
    }, [leadId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleLead',
            redirectTo: 'updateSingleLead',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingAlpyn/>

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <LeadFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
