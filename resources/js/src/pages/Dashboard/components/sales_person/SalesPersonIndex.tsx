import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import LastPeriodCompareWidget from "../../../../components/Reports/LastPeriodCompareWidget";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import Api from "../../../../config/api";

const SalesPersonIndex = () => {
    const [salesOrderData, setSalesOrderData] = useState<any>(null);
    const api = new Api();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const dashboardResponse = await api.salePersonDashboardData();
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
                      Sale Person  Dashboard
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
                                sectionTitle="Your Sales Order YTD"
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
                                sectionTitle="Your Sales Order (Closed) YTD"
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
                                sectionTitle="Your Sales Order MTD"
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
                                sectionTitle="Your Sales Order (Closed) MTD"
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

            </div>
            
        </div>
    );
};

export default SalesPersonIndex;
