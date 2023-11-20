
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../../../store/themeConfigSlice';
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../../../config/authCheck";
import Api from "../../../../config/api";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import LastPeriodCompareWidget from "../../../../components/Reports/LastPeriodCompareWidget";
import MTDSales from "./components/MTDSales";
import Filter from "./components/Filter";
import YTDSales from "./components/YTDSales";
import Details from "./components/Details";

const List = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    useEffect(() => {
        dispatch(setPageTitle('Invoice Performance Analytics'));
    }, [dispatch]);
    const [salesOrderData, setSalesOrderData] = useState<any>(null);
    const api = new Api();
    const [loading, setLoading] = useState(true);
    const [dateStartFilter, setDateStartFilter] = useState('');
    const [dateEndFilter, setDateEndFilter] = useState('');

    const [statusFilter, setStatusFilter] = useState([]);
    const [personFilter, setPersonFilter] = useState([]);


    return (
        <div className="panel  border-white-light dark:border-[#1b2e4b]">


            {(!hasPermission(`admin-invoice-analytics`)) ? (
                null
            ) : (
                <>
                    <Filter
                        setDateStartFilter={setDateStartFilter}
                        setDateEndFilter={setDateEndFilter}
                        setStatusFilter={setStatusFilter}
                        setPersonFilter={setPersonFilter}
                        dateStartFilter={dateStartFilter}
                        dateEndFilter={dateEndFilter}
                        statusFilter={statusFilter}
                        personFilter={personFilter}
                    />
                    <MTDSales
                        dateStartFilter={dateStartFilter}
                        dateEndFilter={dateEndFilter}
                        statusFilter={statusFilter}
                        personFilter={personFilter}
                    />

                    <YTDSales
                        dateStartFilter={dateStartFilter}
                        dateEndFilter={dateEndFilter}
                        statusFilter={statusFilter}
                        personFilter={personFilter}
                    />

                    <Details
                        dateStartFilter={dateStartFilter}
                        dateEndFilter={dateEndFilter}
                        statusFilter={statusFilter}
                        personFilter={personFilter}
                    />
                </>

            )}
        </div>
    );
};

export default List;
