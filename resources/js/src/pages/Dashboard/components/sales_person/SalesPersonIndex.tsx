import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import LastPeriodCompareWidget from "../../../../components/Reports/LastPeriodCompareWidget";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import Api from "../../../../config/api";
import PerfectScrollbar from 'react-perfect-scrollbar';

const SalesPersonIndex = () => {
    const [salesOrderData, setSalesOrderData] = useState<any>(null);
    const [salesRecentLeads, setSalesRecentLeads] = useState<any>(null);

    const api = new Api();
    const [loading, setLoading] = useState(true);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JS
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}:${month}:${day}`;
    };

    const fetchData = async () => {
        try {
            const dashboardResponse = await api.salePersonDashboardData();
            if (dashboardResponse.status === 200) {
                setSalesOrderData(dashboardResponse.data.data.sales_order);
                setSalesRecentLeads(dashboardResponse.data.data.recent_lead);
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

    const getStatusColorClass = (status) => {
        switch (status) {
            case '0.0 Cold lead / unqualified (CLU)':
                return { colorClass: 'bg-blue-500', colorLightClass: 'bg-blue-300' };
            case '1.0 Cold lead qualified (CLQ)':
                return { colorClass: 'bg-gray-500', colorLightClass: 'bg-gray-300' };
            case '2.0 First contact made (FCM)':
                return { colorClass: 'bg-green-500', colorLightClass: 'bg-green-300' };
            case '3.0 Warm lead qualified (WLQ)':
                return { colorClass: 'bg-orange-500', colorLightClass: 'bg-orange-300' };
            case '4.0 Hot lead qualified (HLQ)':
                return { colorClass: 'bg-red-500', colorLightClass: 'bg-red-300' };
            case 'Cold Call':
                return { colorClass: 'bg-purple-500', colorLightClass: 'bg-purple-300' };
            case 'Follow Up':
                return { colorClass: 'bg-yellow-500', colorLightClass: 'bg-yellow-300' };
            case 'Prequalified':
                return { colorClass: 'bg-teal-500', colorLightClass: 'bg-teal-300' };
            case 'Wertloser Lead':
                return { colorClass: 'bg-pink-500', colorLightClass: 'bg-pink-300' };
            default:
                return { colorClass: 'bg-gray-500', colorLightClass: 'bg-gray-300' }; // Default color
        }
    };
    const [selectedTab, setSelectedTab] = useState('All');
    const statusAbbreviations = {
        '0.0(CLU)': '0.0 Cold lead / unqualified (CLU)',
        '1.0(CLQ)': '1.0 Cold lead qualified (CLQ)',
        '2.0(FCM)': '2.0 First contact made (FCM)',
        '3.0(WLQ)': '3.0 Warm lead qualified (WLQ)',
        '4.0(HLQ)': '4.0 Hot lead qualified (HLQ)',
        'Cold Call': 'Cold Call',
        'Follow Up': 'Follow Up',
        'Prequalified': 'Prequalified',
        'Wertloser Lead': 'Wertloser Lead',

    };
    const tabs = ['All', '0.0(CLU)', '1.0(CLQ)', '2.0(FCM)', '3.0(WLQ)', '4.0(HLQ)', 'Cold Call', 'Follow Up', 'Prequalified', 'Wertloser Lead'];
    const filteredLeads = selectedTab === 'All' ? salesRecentLeads : salesRecentLeads.filter(lead => lead.status === (statusAbbreviations[selectedTab] || selectedTab));

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
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 ">
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
                        <LoadingSpinner />
                    )}

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 mb-6 ">

                    <div className="panel h-full sm:col-span-2 xl:col-span-1 pb-0">
                        <h5 className="font-semibold text-lg dark:text-dark mb-5">Recent Leads</h5>
                        <PerfectScrollbar className="relative h-[50px] pr-3 -mr-3 mb-4">

                            <div className="flex space-x-1">
                                {tabs.map(tab => (
                                    <button
                                        key={tab}
                                        className={`px-4 rounded-md	  ${selectedTab === tab ? 'bg-gray-300' : 'bg-white'}`}
                                        onClick={() => setSelectedTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </PerfectScrollbar>
                        <PerfectScrollbar className="relative h-[290px] pr-3 -mr-3 mb-4">
                            {salesRecentLeads ? (
                                <>
                                    <div className="text-sm cursor-pointer">
                                             {filteredLeads.map((lead, index) => {
                                            const { colorClass, colorLightClass } = getStatusColorClass(lead.status);
                                            return (
                                                <Link to={`/lead/preview/${lead.id}`} className="flex items-center py-1.5 relative group" key={index}>
                                                    <div className={`${colorClass} w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5`}></div>
                                                    <div className="flex-1">{lead.company}</div>
                                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                                                        {formatDate(lead.updated_at)}
                                                    </div>
                                                    <div className={`badge badge-outline ${colorClass} absolute ltr:right-0 rtl:left-0 text-xs ${colorLightClass} dark:bg-black opacity-0 group-hover:opacity-100`}>
                                                        {lead.status}
                                                    </div>

                                                </Link>
                                            );
                                        })}
                                    </div>
                                </>

                            ) : (
                                <LoadingSpinner />
                            )}
                        </PerfectScrollbar>
                        <div className="border-t border-white-light dark:border-white/10">
                            <Link to="/lead/list" className=" font-semibold group hover:text-primary p-4 flex items-center justify-center group">
                                View All
                                <svg
                                    className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition duration-300 ltr:ml-1 rtl:mr-1"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SalesPersonIndex;
