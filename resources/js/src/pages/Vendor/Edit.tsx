import {useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import VendorFormFields from "./components/edit/VendorFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import {resetForm, updateFormData} from '../../store/vendorFormSlice';
import LoadingAlpyn from '../../components/LoadingAlpyn';
import Api from '../../config/api';

const Edit = () => {
    const formState = useSelector((state: any) => state.vendorForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const vendorId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Vendor Edit'));
    });

    const fetchData = async () => {
        const vendorResponse = await api.fetchSingleVendor(vendorId);
        if (vendorResponse.status != 200)
            return
        const vendor = vendorResponse.data.data.vendor;
        dispatch(updateFormData(vendor));
    };

    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);

        });
    }, [vendorId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleVendor',
            redirectTo: '/vendor/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingAlpyn/>


    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <VendorFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
