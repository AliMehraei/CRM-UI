import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ManufactireFormFields from "./components/create/ManufactireFormFields";
import QuotesFormFields from "../Quotes/components/create/QuotesFormFields";

const Add = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Manufacture Add'));
    });

    return (
        <div className='px-4'>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <Link to="/manufacture/list" className="btn btn-danger gap-2">
                        Back
                    </Link>
                    <button className="btn btn-primary gap-2">
                        Save and new
                    </button>
                    <button className="btn btn-success gap-2">
                        Save
                    </button>
                </div>
            </div>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <ManufactireFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Add;
