import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ManufactureFormFields from "./components/edit/ManufactureFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";

const Edit = () => {
    const formState = useSelector((state: any) => state.manufactureForm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Manufacture Edit'));
    });

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
