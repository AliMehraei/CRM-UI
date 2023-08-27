import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import AvailabilityFormFields from "./components/create/AvailabilityFormFields";
import 'flatpickr/dist/flatpickr.css';

const Add = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Availability Add'));
    });

    return (
        <div className="flex xl:flex-row flex-col gap-2.5">
            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                <AvailabilityFormFields/>
            </div>
        </div>
    );
};

export default Add;
