import { useEffect, useState } from "react";
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

    const [filterParam, setFilterParam] = useState({
        manufacturer_name: manufacturerNameFilter,
        date_start_vrfq: dateVendorRfqStartFilter ?? '',
        date_end_vrfq: dateVendorRfqEndFilter ?? '',
        date_start_rfq: dateRfqStartFilter ?? '',
        date_end_rfq: dateRfqEndFilter ?? '',
        date_start_ava: dateAvailabilityStartFilter ?? '',
        date_end_ava: dateAvailabilityEndFilter ?? '',
        vendor_name: vendorNameFilter
      });

    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ vendor_id } : any) => <div className="font-semibold">{vendor_id}</div>,
        },
        {
            accessor: 'vendor Name',
            sortable: true,
            render: ({ vendor_name, vendor_id } : any) => (
                hasPermission('update-vendor') ? (
                    <NavLink to={`/vendor/edit/${vendor_id}`}>
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
            render: ({ manufacturer_name, manufacturer_id} : any) => (
                hasPermission('update-manufacturer') ? (
                    <NavLink to={`/manufacturer/edit/${manufacturer_id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${manufacturer_name}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${manufacturer_name}`}</div>
                )
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

    useEffect(() => {
        
        setFilterParam({
            manufacturer_name: manufacturerNameFilter,
            date_start_vrfq: dateVendorRfqStartFilter ?? '',
            date_end_vrfq: dateVendorRfqEndFilter ?? '',
            date_start_rfq: dateRfqStartFilter ?? '',
            date_end_rfq: dateRfqEndFilter ?? '',
            date_start_ava: dateAvailabilityStartFilter ?? '',
            date_end_ava: dateAvailabilityEndFilter ?? '',
            vendor_name: vendorNameFilter
          });
        
    }, [vendorNameFilter,manufacturerNameFilter,dateRfqStartFilter,dateVendorRfqStartFilter,dateAvailabilityStartFilter]);

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
                                    filterParam={filterParam}
                                 />

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ListVendor;
