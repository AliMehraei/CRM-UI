import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import TaskFormFields from "./components/edit/TaskFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {resetForm, updateFormData} from "../../store/taskFormSlice";
import LoadingSasCrm from "../../components/LoadingSasCrm"
import Api from "../../config/api";
import {useParams} from "react-router-dom";
import {useUserStatus} from "../../config/authCheck";

const Edit = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.taskForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const taskId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Task Edit'));
    });

    useEffect(() => {
        dispatch(resetForm());
    }, []);

    const fetchData = async () => {
        const taskResponse = await api.fetchSingleTask(taskId);
        if (taskResponse.status != 200)
            return
        const task = taskResponse.data.data.task;
        dispatch(updateFormData(task));
    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);
        });
    }, [taskId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleTask',
            redirectTo: '/task/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingSasCrm/>

    return (
        (!hasPermission(`update-task`) || loading ) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    {/* <TaskFormFields/> */}
                </div>
            </div>
        </div>
        )

    );
};

export default Edit;
