import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import LastPeriodCompareWidget from "../../../../components/Reports/LastPeriodCompareWidget";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import Api from "../../../../config/api";
import PerfectScrollbar from 'react-perfect-scrollbar';
import CountUp from 'react-countup';
import StatusCard from './components/StatusCard';
import MotiviationComponent from './components/MotiviationComponent';

const SalesPersonIndex = () => {
  const [salesOrderData, setSalesOrderData] = useState<any>(null);
  const [recentLeads, setRecentLeads] = useState<any>(null);
  const [recentRfqs, setRecentRfqs] = useState<any>(null);
  const [recentQuotes, setRecentQuotes] = useState<any>(null);
  const [recentSO, setRecentSO] = useState<any>(null);
  const [recentTasks, setRecentTasks] = useState<any>(null);
  const [countModel, setCountModel] = useState<any>(null);

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
        setRecentLeads(dashboardResponse.data.data.recent_lead);
        setRecentRfqs(dashboardResponse.data.data.recent_rfq);
        setRecentQuotes(dashboardResponse.data.data.recent_quote);
        setRecentSO(dashboardResponse.data.data.recent_sales_order);
        setRecentTasks(dashboardResponse.data.data.recent_task);
        setCountModel(dashboardResponse.data.data.counts);

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

  const getStatusColorClassLeads = (status) => {
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
      default:
        return { colorClass: 'bg-gray-500', colorLightClass: 'bg-gray-300' }; // Default color
    }
  };
  const getStatusColorClassRfq = (status) => {
    switch (status) {
      case 'Open':
        return { colorClass: 'bg-blue-500', colorLightClass: 'bg-blue-300' };
      case 'In review':
        return { colorClass: 'bg-purple-500', colorLightClass: 'bg-purple-300' };
      case 'Open without routing':
        return { colorClass: 'bg-green-500', colorLightClass: 'bg-green-300' };
      default:
        return { colorClass: 'bg-gray-500', colorLightClass: 'bg-gray-300' };
    }
  };
  const getStatusColorClassQuotes = (status) => {
    switch (status) {
      case 'High':
        return { colorClass: 'bg-blue-500', colorLightClass: 'bg-blue-300' };
      case 'Low':
        return { colorClass: 'bg-purple-500', colorLightClass: 'bg-purple-300' };
      case 'undefined':
        return { colorClass: 'bg-green-500', colorLightClass: 'bg-green-300' };
      case 'unknown':
        return { colorClass: 'bg-green-500', colorLightClass: 'bg-green-300' };
      default:
        return { colorClass: 'bg-gray-500', colorLightClass: 'bg-gray-300' };
    }
  };
  const getStatusColorClassSO = (status) => {
    switch (status) {
      case 'Approved':
        return { colorClass: 'bg-blue-500', colorLightClass: 'bg-blue-300' };
      case 'Draft':
        return { colorClass: 'bg-purple-500', colorLightClass: 'bg-purple-300' };
      case 'Closed':
        return { colorClass: 'bg-red-500', colorLightClass: 'bg-red-300' };
      case 'open':
        return { colorClass: 'bg-green-500', colorLightClass: 'bg-green-300' };
      case 'pending_approval':
        return { colorClass: 'bg-yellow-500', colorLightClass: 'bg-yellow-300' };
      default:
        return { colorClass: 'bg-gray-500', colorLightClass: 'bg-gray-300' };
    }
  };
  const getStatusColorClassTask = (status) => {
    switch (status) {
      default:
        return { colorClass: 'bg-gray-500', colorLightClass: 'bg-gray-300' };
    }
  };
  const [selectedLeadTab, setSelectedLeadTab] = useState('All');
  const [selectedRfqTab, setSelectedRfqTab] = useState('All');
  const [selectedQuotesTab, setSelectedQuotesTab] = useState('All');
  const [selectedSOTab, setSelectedSOTab] = useState('All');
  const [selectedTaskTab, setSelectedTaskTab] = useState('All');

  const quotesStatusAbbreviations = {
    'High': 'High',
    'Low': 'Low',
    'undefined': 'undefined',
    'unknown': 'unknown'
  };
  const taskStatusAbbreviations = {
    '0.0(CLU)': '0.0 Cold task / unqualified (CLU)',
    '1.0(CLQ)': '0.1 Cold task qualified (CLQ)',
    '2.0(FCM)': '2.0 First contact made (FCM)',
    '3.0(WLQ)': '3.0 warm task qualified (WLQ)',
    '4.0(HLQ)': '4.0 Hot task(HLQ)',
    'Close/Lost': 'Close/Lost',
    'Nicht gestartet': 'Nicht gestartet',
    'Verschoben': 'Verschoben',
    'Läuft...': 'Läuft...'
  };
  const leadStatusAbbreviations = {
    '0.0(CLU)': '0.0 Cold lead / unqualified (CLU)',
    '1.0(CLQ)': '1.0 Cold lead qualified (CLQ)',
    '2.0(FCM)': '2.0 First contact made (FCM)',
    '3.0(WLQ)': '3.0 Warm lead qualified (WLQ)',
    '4.0(HLQ)': '4.0 Hot lead qualified (HLQ)',
  };

  const leadTabs = ['All', '0.0(CLU)', '1.0(CLQ)', '2.0(FCM)', '3.0(WLQ)', '4.0(HLQ)'];
  const rfqTabs = ['All', 'Open', 'Open without routing'];
  const quoteTabs = ['All', 'High', 'Low', 'undefined', 'unknown'];
  const sOTabs = ['All', 'Approved', 'open', 'pending_approval', 'Draft', 'Closed', 'Void'];
  const taskTabs = ['All', '0.0(CLU)', '1.0(CLQ)', '2.0(FCM)', '3.0(WLQ)', '4.0(HLQ)', 'Close/Lost', 'Läuft...', 'Nicht gestartet', 'Verschoben'];

  const filteredLeads = selectedLeadTab === 'All' ? recentLeads : recentLeads.filter(lead => lead.status === (leadStatusAbbreviations[selectedLeadTab] || selectedLeadTab));
  const filteredRfqs = selectedRfqTab === 'All' ? recentRfqs : recentRfqs.filter(rfq => rfq.status === selectedRfqTab);
  const filteredQuotes = selectedQuotesTab === 'All' ? recentQuotes : recentQuotes.filter(quote => quote.quote_chance === selectedQuotesTab);
  const filteredSO = selectedSOTab === 'All' ? recentSO : recentSO.filter(so => so.status === selectedSOTab);
  const filteredTasks = selectedTaskTab === 'All' ? recentTasks : recentTasks.filter(task => task.status === (taskStatusAbbreviations[selectedTaskTab] || selectedTaskTab));

  const [showLeadWidget, setShowLeadWidget] = useState(true);
  const [showRfqWidget, setShowRfqWidget] = useState(true);
  const [showQuotesWidget, setShowQuotesWidget] = useState(true);
  const [showSOWidget, setShowSOWidget] = useState(true);

  return (
    <div>
     
      <div className='card card-body'>

        <MotiviationComponent />
      </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 ">

          <div className="panel h-full sm:col-span-2 xl:col-span-1 pb-0">
            <h5 className="font-semibold text-lg inline-flex dark:text-dark mb-5">
              Your Recent Leads

            </h5>
            <PerfectScrollbar className="relative h-[50px] pr-3 -mr-3 mb-4">
              <div className="flex space-x-1">
                {leadTabs.map(tab => (
                  <button
                    key={tab}
                    className={`px-2 rounded-md	  ${selectedLeadTab === tab ? 'bg-gray-300 font-bold' : 'bg-white'}`}
                    onClick={() => setSelectedLeadTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

            </PerfectScrollbar>

            <PerfectScrollbar className="relative h-[200px] pr-3 -mr-3 mb-4">
              {recentLeads ? (
                <>
                  <div className="text-sm cursor-pointer">
                    {filteredLeads.map((lead, index) => {
                      const { colorClass, colorLightClass } = getStatusColorClassLeads(lead.status);
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

          <div className="panel h-full sm:col-span-2 xl:col-span-1 pb-0">
            <h5 className="font-semibold text-lg inline-flex dark:text-dark mb-5">
              Your Recent RFQS

            </h5>

            <PerfectScrollbar className="relative h-[50px] pr-3 -mr-3 mb-4">

              <div className="flex space-x-1">
                {rfqTabs.map(tab => (
                  <button
                    key={tab}
                    className={`px-2 rounded-md	  ${selectedRfqTab === tab ? 'bg-gray-300 font-bold' : 'bg-white'}`}
                    onClick={() => setSelectedRfqTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </PerfectScrollbar>
            <PerfectScrollbar className="relative h-[200px] pr-3 -mr-3 mb-4">
              {recentLeads ? (
                <>
                  <div className="text-sm cursor-pointer">
                    {filteredRfqs.map((rfq, index) => {
                      const { colorClass, colorLightClass } = getStatusColorClassRfq(rfq.status);
                      return (
                        <Link to={`/rfq/preview/${rfq.id}`} className="flex items-center py-1.5 relative group" key={index}>
                          <div className={`${colorClass} w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5`}></div>
                          <div className="flex-1">{rfq.rfq_name} | <span className='font-bold'>Source:</span>  {rfq.rfq_source}</div>
                          <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                            {formatDate(rfq.updated_at)}
                          </div>
                          <div className={`badge badge-outline ${colorClass} absolute ltr:right-0 rtl:left-0 text-xs ${colorLightClass} dark:bg-black opacity-0 group-hover:opacity-100`}>
                            {rfq.status}
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
              <Link to="/rfq/list" className=" font-semibold group hover:text-primary p-4 flex items-center justify-center group">
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

          <div className="panel h-full sm:col-span-2 xl:col-span-1 pb-0">
            <h5 className="font-semibold text-lg dark:text-dark mb-5">Your Recent Quotes</h5>
            <PerfectScrollbar className="relative h-[50px] pr-3 -mr-3 mb-4">

              <div className="flex space-x-1">
                {quoteTabs.map(tab => (
                  <button
                    key={tab}
                    className={`px-2 rounded-md	  ${selectedQuotesTab === tab ? 'bg-gray-300 font-bold' : 'bg-white'}`}
                    onClick={() => setSelectedQuotesTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </PerfectScrollbar>
            <PerfectScrollbar className="relative h-[200px] pr-3 -mr-3 mb-4">
              {recentLeads ? (
                <>
                  <div className="text-sm cursor-pointer">
                    {filteredQuotes.map((quote, index) => {
                      const { colorClass, colorLightClass } = getStatusColorClassQuotes(quote.quote_chance);
                      return (
                        <Link to={`/quotes/preview/${quote.id}`} className="flex items-center py-1.5 relative group" key={index}>
                          <div className={`${colorClass} w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5`}></div>
                          <div className="flex-1">{quote.subject} </div>
                          <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                            {formatDate(quote.updated_at)}
                          </div>
                          <div className={`badge badge-outline ${colorClass} absolute ltr:right-0 rtl:left-0 text-xs ${colorLightClass} dark:bg-black opacity-0 group-hover:opacity-100`}>
                            {quote.quote_chance}
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
              <Link to="/quotes/list" className=" font-semibold group hover:text-primary p-4 flex items-center justify-center group">
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
          <div className="panel h-full sm:col-span-2 xl:col-span-1 pb-0">
            <h5 className="font-semibold text-lg dark:text-dark mb-5">Your Recent Sales Order</h5>
            <PerfectScrollbar className="relative h-[50px] pr-3 -mr-3 mb-4">

              <div className="flex space-x-1">
                {sOTabs.map(tab => (
                  <button
                    key={tab}
                    className={`px-2 rounded-md	  ${selectedSOTab === tab ? 'bg-gray-300 font-bold' : 'bg-white'}`}
                    onClick={() => setSelectedSOTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </PerfectScrollbar>
            <PerfectScrollbar className="relative h-[200px] pr-3 -mr-3 mb-4">
              {recentLeads ? (
                <>
                  <div className="text-sm cursor-pointer">
                    {filteredSO.map((so, index) => {
                      const { colorClass, colorLightClass } = getStatusColorClassSO(so.status);
                      return (
                        <Link to={`/sales/preview/${so.id}`} className="flex items-center py-1.5 relative group" key={index}>
                          <div className={`${colorClass} w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5`}></div>
                          <div className="flex-1">{so.subject}</div>
                          <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                            {formatDate(so.updated_at)}
                          </div>
                          <div className={`badge badge-outline ${colorClass} absolute ltr:right-0 rtl:left-0 text-xs ${colorLightClass} dark:bg-black opacity-0 group-hover:opacity-100`}>
                            {so.status}
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
              <Link to="/sales/list" className=" font-semibold group hover:text-primary p-4 flex items-center justify-center group">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 mb-6 ">
          <div className="panel h-full sm:col-span-2 xl:col-span-2 pb-0">
            <h5 className="font-semibold text-lg dark:text-dark mb-5">Your Recent Uncompleted Tasks</h5>
            <PerfectScrollbar className="relative h-[50px] pr-3 -mr-3 mb-4">

              <div className="flex space-x-1">
                {taskTabs.map(tab => (
                  <button
                    key={tab}
                    className={`px-2 rounded-md	  ${selectedTaskTab === tab ? 'bg-gray-300 font-bold' : 'bg-white'}`}
                    onClick={() => setSelectedTaskTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </PerfectScrollbar>
            <PerfectScrollbar className="relative h-[200px] pr-3 -mr-3 mb-4">
              {recentTasks ? (
                <>
                  <div className="text-sm cursor-pointer">
                    {filteredTasks.map((task, index) => {
                      const { colorClass, colorLightClass } = getStatusColorClassTask(task.status);
                      return (
                        <Link to={`/task/preview/${task.id}`} className="flex items-center py-1.5 relative group" key={index}>
                          <div className={`${colorClass} w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5`}></div>
                          <div className="flex-1">{task.subject} | <span className='font-bold'>Due Date:</span> {formatDate(task.due_date)} </div>
                          <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">
                            {formatDate(task.updated_at)}
                          </div>
                          <div className={`badge badge-outline ${colorClass} absolute ltr:right-0 rtl:left-0 text-xs ${colorLightClass} dark:bg-black opacity-0 group-hover:opacity-100`}>
                            {task.status}
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
              <Link to="/task/list" className=" font-semibold group hover:text-primary p-4 flex items-center justify-center group">
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
          {countModel ? (
            <div className="panel h-full sm:col-span-2 xl:col-span-3 pb-0">
              <h5 className="font-semibold text-lg dark:text-dark mb-5">Your Recent Completed Status</h5>

              <StatusCard
                countModel={countModel}
              />
            </div>
          ) : (
            <LoadingSpinner />
          )}


        </div>
      </div>
    </div>
  );
};

export default SalesPersonIndex;
