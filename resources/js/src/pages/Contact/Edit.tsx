import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import ContactFormFields from "./components/edit/ContactFormFields";
import {useParams} from "react-router-dom";
import Api from "../../config/api";
import {updateFormData} from "../../store/contactFormSlice";
import LoadingAlpyn from "../../components/LoadingAlpyn";

const Edit = () => {
    const formState = useSelector((state: any) => state.contactForm);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const contactId = params.id; // Assuming you are using React Router to handle routes
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
            redirectTo: 'updateSingleContact',
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
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <ContactFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
