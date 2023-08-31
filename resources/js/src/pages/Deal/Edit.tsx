import {Link, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import DealFormFields from "./components/edit/DealFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {updateFormData} from "../../store/dealFormSlice";
import LoadingAlpyn from "../../components/LoadingAlpyn"
import Api from "../../config/api";
import {useParams} from "react-router-dom";

const Edit = () => {
    const formState = useSelector((state: any) => state.dealForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const dealId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Deal Edit'));
    });

    const fetchData = async () => {
        const dealResponse = await api.fetchSingleDeal(dealId);
        if (dealResponse.status != 200)
            return
        const deal = dealResponse.data.data.deal;
        dispatch(updateFormData(deal));
    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);


        });
    }, [dealId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleDeal',
            redirectTo: 'updateSingleDeal',
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
                    <DealFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
