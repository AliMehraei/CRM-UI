import React, { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import Api from "../config/api";
import LoadingSasCrm from "../components/LoadingSasCrm";
import { useUserStatus } from "../config/authCheck";
import AdminIndex from "./Dashboard/components/admin/AdminIndex";
import SalesPersonIndex from "./Dashboard/components/sales_person/SalesPersonIndex"
const Index = () => {

  const [activeTab, setActiveTab] = useState('salesPerson');

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('CRM Admin'));
  });

  const { hasPermission } = useUserStatus();

  //Revenue Chart

  const handleShowingDashboard = () => {
    const isAdmin = hasPermission('admin-dashboard');
    const isSalesPerson = hasPermission('sales-person-dashboard');

    if (isAdmin && isSalesPerson) {
      return (
        <>
          <Tab.Group>
            <Tab.List className="mt-3 flex flex-wrap">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${selected ? 'bg-primary text-white !outline-none' : ''}
                    -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`}>
                    Sale Person
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${selected ? 'bg-primary text-white !outline-none' : ''}
                    -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`}>
                    Admin
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <SalesPersonIndex />
              </Tab.Panel>
              <Tab.Panel>
                <AdminIndex />

              </Tab.Panel>
            </Tab.Panels>

          </Tab.Group>
        </>
      );
    } else if (isAdmin) {
      return <AdminIndex />;
    } else if (isSalesPerson) {
      return <SalesPersonIndex />;
    }
    return null;
  }


  return (

    <>
      {handleShowingDashboard()}
    </>
  );
};

export default Index;
