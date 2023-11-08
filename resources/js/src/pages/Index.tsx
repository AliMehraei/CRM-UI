import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../store';
import ReactApexChart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from '../components/Dropdown';
import {setPageTitle} from '../store/themeConfigSlice';
import LastPeriodCompareWidget from "../components/Reports/LastPeriodCompareWidget";
import Api from "../config/api";
import LoadingSasCrm from "../components/LoadingSasCrm";
import {useUserStatus} from "../config/authCheck";
import {updateFormData} from "../store/accountFormSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import OpenQuotes from "./Dashboard/components/OpenQuotes";
import BookingRevenue from "./Dashboard/components/BookingRevenue";
import BillingYtdSales from "./Dashboard/components/BillingYtdSales";
import BookingGp from "./Dashboard/components/BookingGp";
import MtdBlilling from "./Dashboard/components/MtdBlilling";

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('CRM Admin'));
    });
    const api = new Api();

    const [loading, setLoading] = useState(true);
    const [salesOrderData, setSalesOrderData] = useState(null);
    const {hasPermission} = useUserStatus();
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

    //Revenue Chart


    return (
        (loading) ? (
            <LoadingSasCrm/>
        ) : (
            <div>
                <ul className="flex space-x-2 rtl:space-x-reverse">
                    <li>
                        <Link to="/" className="text-primary hover:underline">
                            Dashboard
                        </Link>
                    </li>

                </ul>
                <div className="pt-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white">

                        {salesOrderData ? (
                            <>
                                <LastPeriodCompareWidget
                                    currentAmount={salesOrderData.ytd?.total_so}
                                    lastPeriodAmount={salesOrderData.last_year?.total_so}
                                    sectionTitle="Sales Order YTD"
                                    firstColor="blue-500"
                                    secondColor="blue-400"
                                    currentTitle="This Year"
                                    lastPeriodTitle="Last Year"
                                    currentAverage={parseFloat(salesOrderData.ytd?.average_so ?? "0")}
                                    currentCount={salesOrderData.ytd?.count_so}
                                    lastPeriodAverage={parseFloat(salesOrderData.last_year?.average_so ?? "0")}
                                    lastPeriodCount={salesOrderData.last_year?.count_so}
                                />
                                <LastPeriodCompareWidget
                                    currentAmount={salesOrderData.ytd?.closed_so?.total_so}
                                    lastPeriodAmount={salesOrderData.last_year?.closed_so?.total_so}
                                    sectionTitle="Sales Order (Closed) YTD"
                                    firstColor="cyan-500"
                                    secondColor="cyan-400"
                                    currentTitle="This Year"
                                    lastPeriodTitle="Last Year"
                                    currentAverage={parseFloat(salesOrderData.ytd?.closed_so?.average_so ?? "0")}
                                    currentCount={salesOrderData.ytd?.closed_so?.count_so}
                                    lastPeriodAverage={parseFloat(salesOrderData.last_year?.closed_so?.average_so ?? "0")}
                                    lastPeriodCount={salesOrderData.last_year?.closed_so?.count_so}
                                />
                                <LastPeriodCompareWidget
                                    currentAmount={salesOrderData.mtd?.total_so}
                                    lastPeriodAmount={salesOrderData.last_month?.total_so}
                                    sectionTitle="Sales Order MTD"
                                    firstColor="fuchsia-500"
                                    secondColor="fuchsia-400"
                                    currentTitle="This Month"
                                    lastPeriodTitle="Last Month"
                                    currentAverage={parseFloat(salesOrderData.mtd?.average_so ?? "0")}
                                    currentCount={salesOrderData.mtd?.count_so}
                                    lastPeriodAverage={parseFloat(salesOrderData.last_month?.average_so ?? "0")}
                                    lastPeriodCount={salesOrderData.last_month?.count_so}
                                />
                                <LastPeriodCompareWidget
                                    currentAmount={salesOrderData.mtd?.closed_so?.total_so}
                                    lastPeriodAmount={salesOrderData.last_month?.closed_so?.total_so}
                                    sectionTitle="Sales Order (Closed) MTD"
                                    firstColor="violet-500"
                                    secondColor="violet-400"
                                    currentTitle="This Month"
                                    lastPeriodTitle="Last Month"
                                    currentAverage={parseFloat(salesOrderData.mtd?.closed_so?.average_so ?? "0")}
                                    currentCount={salesOrderData.mtd?.closed_so?.count_so}
                                    lastPeriodAverage={parseFloat(salesOrderData.last_month?.closed_so?.average_so ?? "0")}
                                    lastPeriodCount={salesOrderData.last_month?.closed_so?.count_so}
                                />
                            </>
                        ) : (
                            <LoadingSpinner/>
                        )}


                        {/*<LastPeriodCompareWidget*/}
                        {/*    currentAmount={75}*/}
                        {/*    lastPeriodAmount={60}*/}
                        {/*    sectionTitle="User Engagement"*/}
                        {/*    isCurrency={false}*/}
                        {/*    firstColor="cyan-500"*/}
                        {/*    secondColor="cyan-400"*/}
                        {/*    currentTitle="Active Users"*/}
                        {/*    lastPeriodTitle="Previous Period"*/}
                        {/*/>*/}

                        {/*<LastPeriodCompareWidget*/}
                        {/*    currentAmount={7500}*/}
                        {/*    lastPeriodAmount={7000}*/}
                        {/*    sectionTitle="Sales"*/}
                        {/*    currency="USD"*/}
                        {/*    firstColor="fuchsia-500"*/}
                        {/*    secondColor="fuchsia-400"*/}
                        {/*    currentTitle="This Quarter"*/}
                        {/*    lastPeriodTitle="Last Quarter"*/}
                        {/*/>*/}
                    </div>

                </div>
                <OpenQuotes/>
                <div className="flex flex-row gap-5">
                    <BookingRevenue/>
                    <BillingYtdSales/>
                </div>

                <div className="flex flex-row gap-5">
                    <BookingGp/>
                    <MtdBlilling/>
                </div>
            </div>
        )
    );
};

export default Index;
