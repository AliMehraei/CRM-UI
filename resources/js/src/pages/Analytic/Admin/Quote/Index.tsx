
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../../../store/themeConfigSlice';
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../../../config/authCheck";
import Api from "../../../../config/api";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import LastPeriodCompareWidget from "../../../../components/Reports/LastPeriodCompareWidget";
import MTDQuote from "./components/MTDQuote";
import Filter from "./components/Filter";
import YTDQuote from "./components/YTDQuote";
import Details from "./components/Details";

const List = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    useEffect(() => {
        dispatch(setPageTitle('Quote Performance Analytics'));
    }, [dispatch]);
    const [salesOrderData, setSalesOrderData] = useState<any>(null);
    const api = new Api();
    const [loading, setLoading] = useState(true);
    const [dateStartFilter, setDateStartFilter] = useState('');
    const [dateEndFilter, setDateEndFilter] = useState('');

    const [statusFilter, setStatusFilter] = useState([]);
    const [personFilter, setPersonFilter] = useState([]);

    const fetchData = async () => {
        try {
            const dashboardResponse = await api.dashboardData();
            if (dashboardResponse.status === 200) {
                setSalesOrderData(dashboardResponse.data.data.sales_order);
            } else {
                console.error('Failed to fetch dashboard data:', dashboardResponse);
            }
        } catch (error) {
            console.error('An error occurred while fetching dashboard data:', error);
        } finally {
            setLoading(false);

        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="panel  border-white-light dark:border-[#1b2e4b]">


            {(!hasPermission(`admin-quote-analytics`)) ? (
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
                    <MTDQuote
                        dateStartFilter={dateStartFilter}
                        dateEndFilter={dateEndFilter}
                        statusFilter={statusFilter}
                        personFilter={personFilter}
                    />

                    <YTDQuote
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
