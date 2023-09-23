import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import VendorRfqFormFields from "./components/edit/VendorRfqFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {resetForm, updateFormData} from "../../store/vendorRfqFormSlice";
import LoadingSasCrm from "../../components/LoadingSasCrm"
import Api from "../../config/api";
import {useParams} from "react-router-dom";
import {useUserStatus} from "../../config/authCheck";

const Edit = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.vendorRfqForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const vendorRfqId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('VendorRfq Edit'));
    });

    const fetchData = async () => {
        const vendorRfqResponse = await api.fetchSingleVendorRfq(vendorRfqId);
        if (vendorRfqResponse.status != 200)
            return
        const vendorRfq = vendorRfqResponse.data.data.vendorRfq;
        dispatch(updateFormData(vendorRfq));
    };


    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [vendorRfqId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleVendorRfq',
            redirectTo: "/vendor_rfq/edit/:id",
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingSasCrm/>

    return (
        (!hasPermission(`update-vendor-rfq`) || loading ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <VendorRfqFormFields/>
                </div>
            </div>
        </div>
        )

    );
};

export default Edit;
