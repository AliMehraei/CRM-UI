import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ExcessFormFields from "./components/edit/ExcessFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import Api from "../../config/api";
import {useParams} from "react-router-dom";
import {updateFormData, resetForm} from "../../store/excessFormSlice";
import LoadingSasCrm from "../../components/LoadingSasCrm"
import {useUserStatus} from "../../config/authCheck";

const Edit = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.excessForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const excessId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Excess Edit'));
    });

    useEffect(() => {
        dispatch(resetForm());
    }, []);

    const fetchData = async () => {
        const excessResponse = await api.fetchSingleExcess(excessId);
        if (excessResponse.status != 200)
            return
        const excess = excessResponse.data.data.excess;
        excess.oldImage = excess.image;
        dispatch(updateFormData(excess));
    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);

        });
    }, [excessId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleExcess',
            redirectTo: '/excess/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingSasCrm/>

    return (
        (!hasPermission(`update-excess`) || loading ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <ExcessFormFields/>
                </div>
            </div>
        </div>
        )

    );
};

export default Edit;
