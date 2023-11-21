import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setPageTitle} from '../store/themeConfigSlice';
import Api from "../config/api";
import LoadingSasCrm from "../components/LoadingSasCrm";
import {useUserStatus} from "../config/authCheck";
import AdminIndex from "./Dashboard/components/admin/AdminIndex";
import SalesPersonIndex from "./Dashboard/components/sales_person/SalesPersonIndex"
const Index = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('CRM Admin'));
    });

    const {hasPermission} = useUserStatus();

    //Revenue Chart

    const handleShowingDashboard = () => {
        const isAdmin = hasPermission('admin-dashboard');
        const isSalesPerson = hasPermission('sales-person-dashboard');
    
        if (isAdmin && isSalesPerson) {
            return (
                <>
                    <SalesPersonIndex /> 
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>                    <AdminIndex />
                    <AdminIndex />
                </>
            );
        } else if (isAdmin) {
            return <AdminIndex />;
        } else if (isSalesPerson) {
            return <SalesPersonIndex />;
        }
        return null;
    }
    

    return (

        <>
            {handleShowingDashboard()}
        </>
    );
};

export default Index;
