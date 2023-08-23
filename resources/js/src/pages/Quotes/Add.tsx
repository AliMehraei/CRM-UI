import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import QuotesFormFields from "./components/create/QuotesFormFields";
import 'flatpickr/dist/flatpickr.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";

const Add = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.quotes);

    useEffect(() => {
        dispatch(setPageTitle('Quotes Add'));
    });

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <QuotesFormFields/>
                </div>
            </div>
        </div>
    );
};

export default Add;
