import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import ContactFormFields from "./components/create/ContactFormFields";
import {resetForm} from "../../store/contactFormSlice";
import {useUserStatus} from "../../config/authCheck";
import LoadingSasCrm from '../../components/LoadingSasCrm';

const Add = () => {
    const {hasPermission} = useUserStatus();

    const formState = useSelector((state: any) => state.contactForm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Contact Add'));
    });

    return (
        (!hasPermission(`create-contact`) ) ? (
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

export default Add;
