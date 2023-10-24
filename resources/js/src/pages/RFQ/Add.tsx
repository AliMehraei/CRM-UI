import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import RFQFormFields from "./components/create/RFQFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import {resetForm} from "../../store/rfqFormSlice";
import {useUserStatus} from "../../config/authCheck";
import LoadingSasCrm from '../../components/LoadingSasCrm';

const Add = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.rfqFormSlice);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('RFQ Add'));
    });

    useEffect(() => {
        dispatch(resetForm());
    }, []);


    return (
        (!hasPermission(`create-rfq`) ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <RFQFormFields/>
                </div>
            </div>
        </div>
        )
    );
};

export default Add;
