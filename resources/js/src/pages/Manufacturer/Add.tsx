import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import ManufacturerFormFields from "./components/create/ManufacturerFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import { resetForm } from "../../store/manufacturerFormSlice";
import {useUserStatus} from "../../config/authCheck";
import LoadingSasCrm from '../../components/LoadingSasCrm';

const Add = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.manufacturerForm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Manufacturer Add'));
    });

    return (
        (!hasPermission(`create-manufacturer`) ) ? (
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

export default Add;
