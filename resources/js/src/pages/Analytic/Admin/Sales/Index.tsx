
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
        dispatch(setPageTitle('Sales Performance Analytics'));
    }, [dispatch]);
    const [salesOrderData, setSalesOrderData] = useState<any>(null);
    const api = new Api();
    const [loading, setLoading] = useState(true);
    const [dateFilter, setDateFilter] = useState<any>('2023-07-05 to 2023-07-10');
    const [dateStartFilter, setDateStartFilter] = useState(null);
    const [dateEndFilter, setDateEndFilter] = useState(null);

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

           {(!hasPermission(`admin-sales-order-analytics`)) ? (
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
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {salesOrderData ? (
                        <>
                            <LastPeriodCompareWidget
                                currentAmount={salesOrderData.ytd?.all?.total || 0}
                                lastPeriodAmount={salesOrderData.last_year?.all?.total || 0}
                                sectionTitle="Sales Order YTD"
                                firstColor="blue-500"
                                secondColor="blue-400"
                                currentTitle="This Year"
                                lastPeriodTitle="Last Year"
                                currentAverage={parseFloat(salesOrderData.ytd?.all?.average || "0")}
                                currentCount={salesOrderData.ytd?.all?.count || 0}
                                lastPeriodAverage={parseFloat(salesOrderData.last_year?.all?.average || "0")}
                                lastPeriodCount={salesOrderData.last_year?.all?.count || 0}
                            />
                            <LastPeriodCompareWidget
                                currentAmount={salesOrderData.ytd?.closed?.total || 0}
                                lastPeriodAmount={salesOrderData.last_year?.closed?.total || 0}
                                sectionTitle="Sales Order (Closed) YTD"
                                firstColor="cyan-500"
                                secondColor="cyan-400"
                                currentTitle="This Year"
                                lastPeriodTitle="Last Year"
                                currentAverage={parseFloat(salesOrderData.ytd?.closed?.average || "0")}
                                currentCount={salesOrderData.ytd?.closed?.count || 0}
                                lastPeriodAverage={parseFloat(salesOrderData.last_year?.closed?.average || "0")}
                                lastPeriodCount={salesOrderData.last_year?.closed?.count || 0}
                            />
                            <LastPeriodCompareWidget
                                currentAmount={salesOrderData.mtd?.all?.total || 0}
                                lastPeriodAmount={salesOrderData.last_month?.all?.total || 0}
                                sectionTitle="Sales Order MTD"
                                firstColor="fuchsia-500"
                                secondColor="fuchsia-400"
                                currentTitle="This Month"
                                lastPeriodTitle="Last Month"
                                currentAverage={parseFloat(salesOrderData.mtd?.all?.average || "0")}
                                currentCount={salesOrderData.mtd?.all?.count || 0}
                                lastPeriodAverage={parseFloat(salesOrderData.last_month?.all?.average || "0")}
                                lastPeriodCount={salesOrderData.last_month.all?.count || 0}
                            />
                            <LastPeriodCompareWidget
                                currentAmount={salesOrderData.mtd?.closed?.total || 0}
                                lastPeriodAmount={salesOrderData.last_month?.closed?.total || 0}
                                sectionTitle="Sales Order (Closed) MTD"
                                firstColor="violet-500"
                                secondColor="violet-400"
                                currentTitle="This Month"
                                lastPeriodTitle="Last Month"
                                currentAverage={parseFloat(salesOrderData.mtd?.closed?.average || "0")}
                                currentCount={salesOrderData.mtd?.closed?.count || 0}
                                lastPeriodAverage={parseFloat(salesOrderData.last_month?.closed?.average || "0")}
                                lastPeriodCount={salesOrderData.last_month?.closed?.count || 0}
                            />
                        </>
                    ) : (
                        <LoadingSpinner/>
                    )}

            </div>
               </>
            )}

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

            <Details/>

        </div >
    );
};

export default List;
