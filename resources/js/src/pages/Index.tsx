import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setPageTitle} from '../store/themeConfigSlice';
import Api from "../config/api";
import LoadingSasCrm from "../components/LoadingSasCrm";
import {useUserStatus} from "../config/authCheck";
import AdminIndex from "./Dashboard/components/admin/AdminIndex";

const Index = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('CRM Admin'));
    });

    const {hasPermission} = useUserStatus();

    //Revenue Chart

    const handleShowingDashboard = () => {
        if (hasPermission('admin-dashboard')) {
            return <AdminIndex/>
        }
        if (hasPermission('sales-person-dashboard')) {
            return <AdminIndex/>
        }
    }


    return (

        <>
            {handleShowingDashboard()}
        </>
    );
};

export default Index;
