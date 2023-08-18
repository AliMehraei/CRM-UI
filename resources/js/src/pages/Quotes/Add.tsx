import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import QuotesFormFields from "./components/create/QuotesFormFields";
import 'flatpickr/dist/flatpickr.css';

const Add = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Quotes Add'));
    });

    return (
        <div className="flex xl:flex-row flex-col gap-2.5">
            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                <QuotesFormFields/>
            </div>
        </div>
    );
};

export default Add;
