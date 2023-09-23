import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import Api from "../../config/api";
import {useParams} from "react-router-dom";
import {resetForm, updateFormData} from "../../store/userFormSlice";
import LoadingSasCrm from "../../components/LoadingSasCrm"
import UserFormFields from "./components/edit/UserFormFields";
import 'flatpickr/dist/flatpickr.css';
import {useUserStatus} from "../../config/authCheck";

const Edit = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.userForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const userId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('User Edit'));
    });

    const fetchData = async () => {
        const userResponse = await api.fetchSingleUser(userId);
        if (userResponse.status != 200)
            return
        const user = userResponse.data.data.user;
        user.oldImage = user.image;
        dispatch(updateFormData(user));
    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);

        });
    }, [userId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleUser',
            redirectTo: '/user/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingSasCrm/>

    return (
        (!hasPermission(`update-user`) || loading ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <UserFormFields/>
                </div>
            </div>
        </div>
        )
    );
};

export default Edit;
