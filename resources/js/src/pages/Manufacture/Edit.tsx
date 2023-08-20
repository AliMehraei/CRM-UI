import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ManufactureFormFields from "./components/edit/ManufactureFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import Api from "../../config/api";
import {useParams} from "react-router-dom";
import {updateFormData} from "../../store/manufactureFormSlice";

const Edit = () => {
    const formState = useSelector((state: any) => state.manufactureForm);
    const params = useParams();
    const manufactureId = params.id; // Assuming you are using React Router to handle routes
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Manufacture Edit'));
    });

    useEffect(() => {
        console.log(manufactureId)
        api.fetchSingleManufacturer(manufactureId).then((response) => {
                if (response.status === 200)
                    dispatch(updateFormData(response.data.data.manufacture))

            }
        );
    }, [manufactureId]);

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <ManufactureFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
