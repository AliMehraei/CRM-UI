
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
    const [dateRfqStartFilter, setDateRfqStartFilter] = useState('');
    const [dateRfqEndFilter, setDateRfqEndFilter] = useState('');

    const [dateVendorRfqStartFilter, setDateVendorRfqStartFilter] = useState('');
    const [dateVendorRfqEndFilter, setDateVendorRfqEndFilter] = useState('');

    const [dateAvailabilityStartFilter, setDateAvailabilityStartFilter] = useState('');
    const [dateAvailabilityEndFilter, setDateAvailabilityEndFilter] = useState('');

    const [vendorNameFilter, setVendorNameFilter] = useState([]);
    const [manufacturerNameFilter, setManufacturerNameFilter] = useState([]);




    return (
        <div className="panel  border-white-light dark:border-[#1b2e4b]">


            {(!hasPermission(`admin-vendor-list-analytics`)) ? (
                null
            ) : (
                <>
                    <Filter
                        setDateRfqStartFilter={setDateRfqStartFilter}
                        setDateRfqEndFilter={setDateRfqEndFilter}
                        setDateVendorRfqStartFilter={setDateVendorRfqStartFilter}
                        setDateVendorRfqEndFilter={setDateVendorRfqEndFilter}
                        setDateAvailabilityStartFilter={setDateAvailabilityStartFilter}
                        setDateAvailabilityEndFilter={setDateAvailabilityEndFilter}
                        setVendorNameFilter={setVendorNameFilter}
                        setManufacturerNameFilter={setManufacturerNameFilter}
                    />


                    <ListVendor
                        dateRfqStartFilter={dateRfqStartFilter}
                        dateRfqEndFilter={dateRfqEndFilter}
                        dateVendorRfqStartFilter={dateVendorRfqStartFilter}
                        dateVendorRfqEndFilter={dateVendorRfqEndFilter}
                        dateAvailabilityStartFilter={dateAvailabilityStartFilter}
                        dateAvailabilityEndFilter={dateAvailabilityEndFilter}
                        vendorNameFilter={vendorNameFilter}
                        manufacturerNameFilter={manufacturerNameFilter}
                    />

                </>

            )}
        </div>
    );
};

export default List;
