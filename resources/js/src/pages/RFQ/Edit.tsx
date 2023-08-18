import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import RFQFormFields from "./components/edit/RFQFormFields";

const Add = () => {
    const formData = useSelector((state: any) => state.form);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setPageTitle('RFQ Add'));
    });

    useEffect(() => {
        formData
    });


    return (
        <div className="flex xl:flex-row flex-col gap-2.5">
            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                <RFQFormFields/>
            </div>
        </div>
    );
};

export default Add;
