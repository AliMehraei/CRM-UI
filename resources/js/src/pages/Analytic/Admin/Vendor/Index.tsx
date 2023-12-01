
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../../../store/themeConfigSlice';
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../../../config/authCheck";
import Api from "../../../../config/api";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import LastPeriodCompareWidget from "../../../../components/Reports/LastPeriodCompareWidget";
import Filter from "./components/Filter";
import ListVendor from "./components/ListVendor";

const List = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    useEffect(() => {
        dispatch(setPageTitle('Vendor Performance Analytics'));
    }, [dispatch]);
    const [dateStartFilter, setDateStartFilter] = useState('');
    const [dateEndFilter, setDateEndFilter] = useState('');

    const [statusFilter, setStatusFilter] = useState([]);
    const [vendorFilter, setVendorFilter] = useState([]);

    


    return (
        <div className="panel  border-white-light dark:border-[#1b2e4b]">

            
            {(!hasPermission(`admin-vendor-list-analytics`)) ? (
                null
            ) : (
                <>
                    <Filter
                        setDateStartFilter={setDateStartFilter}
                        setDateEndFilter={setDateEndFilter}
                        setStatusFilter={setStatusFilter}
                        setVendorFilter={setVendorFilter}
                        dateStartFilter={dateStartFilter}
                        dateEndFilter={dateEndFilter}
                        statusFilter={statusFilter}
                        vendorFilter={vendorFilter}
                    />
                   

                    <ListVendor
                        dateStartFilter={dateStartFilter}
                        dateEndFilter={dateEndFilter}
                        statusFilter={statusFilter}
                        vendorFilter={vendorFilter}
                    />

                </>

            )}
        </div>
    );
};

export default List;
