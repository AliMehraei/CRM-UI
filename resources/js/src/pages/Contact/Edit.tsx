import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import ContactFormFields from "./components/edit/ContactFormFields";
import {useParams} from "react-router-dom";
import Api from "../../config/api";
import {resetForm, updateFormData} from "../../store/contactFormSlice";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import {useUserStatus} from "../../config/authCheck";

const Edit = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.contactForm);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const contactId = params.id;
    const api = new Api();


    const fetchData = async () => {
        const contactResponse = await api.fetchSingleContact(contactId);
        if (contactResponse.status != 200)
            return
        const contact = contactResponse.data.data.contact;
        dispatch(updateFormData(contact));
    };

    useEffect(() => {
        dispatch(setPageTitle('Contact Edit'));
    });

    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);

        });
    }, [contactId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleContact',
            redirectTo: '/contact/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingSasCrm/>


    return (
        (!hasPermission(`update-contact`) || loading ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <ContactFormFields/>
                </div>
            </div>
        </div>
        )
    );
};

export default Edit;
