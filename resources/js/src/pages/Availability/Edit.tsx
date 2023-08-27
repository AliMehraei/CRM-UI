import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import {updateFormData} from "../../store/availabilityFormSlice";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import LoadingAlpyn from "../../components/LoadingAlpyn";
import Api from "../../config/api";
import {useParams} from "react-router-dom";
import AvailabilityFormFields from "./components/edit/AvailabilityFormFields";
import 'flatpickr/dist/flatpickr.css';

const Edit = () => {
    const formState = useSelector((state: any) => state.availabilityForm);
    const dispatch = useDispatch();
    const api = new Api();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const availabilityId = params.id;

    useEffect(() => {
        dispatch(setPageTitle('Availability Edit'));
    });
    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [availabilityId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleAvailability',
            redirectTo: '/availability/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    const fetchData = async () => {
        const response = await api.fetchSingleAvailability(availabilityId);
        if (response.status != 200)
            return
        const availability = response.data.data.availability;
        dispatch(updateFormData(availability));
    };

    if (loading)
        return <LoadingAlpyn/>

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <AvailabilityFormFields/>
                </div>
            </div>
        </div>
    );
};

export default Edit;
