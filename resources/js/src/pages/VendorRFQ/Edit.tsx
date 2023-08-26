import {Link, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import VendorRfqFormFields from "./components/edit/VendorRfqFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {updateFormData} from "../../store/vendorRfqFormSlice";
import LoadingAlpyn from "../../components/LoadingAlpyn"
import Api from "../../config/api";
import {useParams} from "react-router-dom";

const Edit = () => {
    const formState = useSelector((state: any) => state.vendorRfqForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const vendorRfqId = params.id; // Assuming you are using React Router to handle routes
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
            console.log('formState',formState);
            

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
        return <LoadingAlpyn/>

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <VendorRfqFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
