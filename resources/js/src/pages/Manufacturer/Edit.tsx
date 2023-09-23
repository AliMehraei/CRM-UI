import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import ManufacturerFormFields from "./components/edit/ManufacturerFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import Api from "../../config/api";
import { useParams } from "react-router-dom";
import { resetForm, updateFormData } from "../../store/manufacturerFormSlice";
import LoadingSasCrm from "../../components/LoadingSasCrm"
import {useUserStatus} from "../../config/authCheck";

const Edit = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.manufacturerForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const manufacturerId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Manufacturer Edit'));
    });

    const fetchData = async () => {
        const manufacturerResponse = await api.fetchSingleManufacturer(manufacturerId);
        if (manufacturerResponse.status != 200)
            return
        const manufacturer = manufacturerResponse.data.data.manufacturer;
        manufacturer.oldImage = manufacturer.image;
        dispatch(updateFormData(manufacturer));
    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);

        });
    }, [manufacturerId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleManufacturer',
            redirectTo: '/manufacturer/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingSasCrm />

    return (
        (!hasPermission(`update-manufacturer`) || loading ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm} />
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <ManufacturerFormFields />
                </div>
            </div>
        </div>
        )
    );
};

export default Edit;
