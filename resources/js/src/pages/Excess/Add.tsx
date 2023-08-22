import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import ExcessFormFields from "./components/create/ExcessFormFields";

const Add = () => {
    const formState = useSelector((state: any) => state.contactForm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Contact Add'));
    });

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <ExcessFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Add;
