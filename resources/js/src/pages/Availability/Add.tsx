import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import AvailabilityFormFields from "./components/create/AvailabilityFormFields";
import 'flatpickr/dist/flatpickr.css';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import {resetForm} from "../../store/availabilityFormSlice";
import LoadingSasCrm from '../../components/LoadingSasCrm';
import {useUserStatus} from "../../config/authCheck";

const Add = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.availabilityForm);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Availability Add'));
    });

    useEffect(() => {
        dispatch(resetForm());
    }, []);

    return (
        (!hasPermission(`create-availability`) ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <AvailabilityFormFields/>
                </div>
            </div>
        </div>
        )

    );
};

export default Add;
