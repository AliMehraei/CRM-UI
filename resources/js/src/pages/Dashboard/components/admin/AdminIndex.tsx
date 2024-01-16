import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import LastPeriodCompareWidget from "../../../../components/Reports/LastPeriodCompareWidget";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import OpenQuotes from "./OpenQuotes";
import BookingRevenue from "./BookingRevenue";
import BillingYtdSales from "./BillingYtdSales";
import BookingGp from "./BookingGp";
import MtdBilling from "./MtdBilling";
import BookingSalesYtd from "./BookingSalesYtd";
import YTDBilling from "./YTDBilling";
import DealsByStage from "./DealsByStage";
import Rfq from "./Rfq";
import CallAmount from "./CallAmount";
import Api from "../../../../config/api";

const AdminIndex = () => {
    const [salesOrderData, setSalesOrderData] = useState<any>(null);
    const api = new Api();
    const [loading, setLoading] = useState(true);

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
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/" className="text-primary hover:underline">
                      Admin  Dashboard
                    </Link>
                </li>

            </ul>
            <div className="pt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white">
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
                <MtdBilling/>
            </div>
            <div className="flex flex-row gap-5">
                <BookingSalesYtd/>
                <YTDBilling/>
            </div>
            <div className="flex flex-row gap-5">
                <DealsByStage/>
                <Rfq/>
            </div>
            <CallAmount/>
        </div>
    );
};

export default AdminIndex;
