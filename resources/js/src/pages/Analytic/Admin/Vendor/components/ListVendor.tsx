import ReactApexChart from "react-apexcharts";
import {useEffect, useState} from "react";
import LoadingSpinner from "../../../../../components/LoadingSpinner";
import Api from "../../../../../config/api";
import GenerateTableList from "../../../../../components/FilterFields/GenerateTableList";
import {useUserStatus} from "../../../../../config/authCheck";
import { NavLink } from 'react-router-dom';

const ListVendor = ({
                        dateRfqStartFilter,
                        dateRfqEndFilter,
                        dateVendorRfqStartFilter,
                        dateVendorRfqEndFilter,
                        dateAvailabilityStartFilter,
                        dateAvailabilityEndFilter,
                        vendorNameFilter,
                        manufacturerNameFilter
                    }:any) => {
    const { hasPermission } = useUserStatus();
    // const [loading, setLoading] = useState(true);
    const api_instance = new Api();

    const [filterChange, setFilterChange] = useState(false);
    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ id } : any) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'vendor Name',
            sortable: true,
            render: ({ vendor_name, id } : any) => (
                hasPermission('update-vendor') ? (
                    <NavLink to={`/vendor/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${vendor_name}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${vendor_name}`}</div>
                )
            )
        },
        {
            accessor: 'Manufacturer Name',
            title: 'Manufacturer Name',
            sortable: true,
            render: ({ manufacturer_name } : any) => (
                <div className="font-semibold">{`${manufacturer_name}`}</div>
            ),
        },
        {
            accessor: 'sent_rfqs_count',
            title: 'Sent RFQs count',
            sortable: false,
            render: ({ sent_rfqs_count } : any) => (
                <div className="font-semibold">
                    {sent_rfqs_count}
                </div>
            ),
        },
        {
            accessor: 'sent_v_rfqs_count',
            title: 'Sent VRFQs Count',
            sortable: true,
            render: ({ sent_v_rfqs_count } : any) => {

                return (
                    <div className="font-semibold">
                        {sent_v_rfqs_count}
                    </div>
                );
            },
        },
        {
            accessor: 'received_avas_count',
            title: 'Received AVAs Count',
            sortable: true,
            render: ({ received_avas_count} : any) => (
                <div className="font-semibold">
                    {received_avas_count}
                </div>
            ),
        },


    ];

    // const fetchData = async () => {
    //     try {
    //         const response = await api_instance.reportVendorList({
    //             status:statusFilter,
    //             date_start:dateStartFilter ?? '',
    //             date_end:dateEndFilter ?? '',
    //             vendor_name:vendorFilter
    //         });
    //         if (response.status === 200) {
    //             const responseData = response.data.data;
    //
    //             setLoading(false);
    //         } else {
    //             console.error('Failed to fetch Vendor List:', response);
    //         }
    //     } catch (error) {
    //         console.error('An error occurred while fetching Vendor List: ', error);
    //     }
    // };
    // useEffect(() => {
    //     fetchData();
    //
    //     if(statusFilter.length>0 || vendorFilter.length>0 || dateStartFilter!=''){
    //         setFilterChange(true);
    //     }
    // }, [statusFilter,vendorFilter,dateStartFilter]);

    return (
        <div className="pt-5 flex-1">
            <div className="grid  gap-6 mb-6">
                <div className="panel h-full xl:col-span-2">
                    <div className="relative">
                        <h5 className="font-semibold text-lg">List Vendor</h5>

                        <div className="bg-white dark:bg-black rounded-lg">

                                <GenerateTableList
                                    permissionName="admin-vendor-list-analytics"
                                    tableColumns={columns}
                                    frontRoute="reportVendorList"
                                    filterParam={{
                                        manufacturer_name:manufacturerNameFilter,
                                        date_start_vrfq:dateVendorRfqStartFilter ?? '',
                                        date_end_vrfq:dateVendorRfqEndFilter ?? '',
                                        date_start_rfq:dateRfqStartFilter ?? '',
                                        date_end_rfq:dateRfqEndFilter ?? '',
                                        date_start_ava:dateAvailabilityStartFilter ?? '',
                                        date_end_ava:dateAvailabilityEndFilter ?? '',
                                        vendor_name:vendorNameFilter
                                }
                                }
                                 />

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ListVendor;
