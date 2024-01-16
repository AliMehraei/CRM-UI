
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { formatDate } from "@fullcalendar/core";
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import GenerateIndexTable from "../../components/FilterFields/GenerateIndexTable";

const List = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    useEffect(() => {
        dispatch(setPageTitle('Purchase Order List'));
    }, [dispatch]);


    const columns: any = [
       
        {
            accessor: 'subject',
            sortable: true,
            render: ({ subject, id }) => (
                hasPermission('update-purchase-order') ? (
                    <NavLink to={`/purchase/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${subject}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${subject}`}</div>
                )
            )
        },
        {
            accessor: 'status',
            sortable: true,
            render: ({ status }) => (
                <div className="flex items-center font-semibold">
                    {status}
                </div>
            ),
        },
        {
            accessor: 'vendor_owner',
            title: 'Purchase Order Owner',
            sortable: false,
            render: ({ owner }) =>
                <div className="font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : '-No Owner-'}
                </div>,
        },
        {
            accessor: 'vendor',
            title: 'Vendor Name',
            sortable: false,
            render: ({ vendor }) =>
                <div className="font-semibold">
                    {vendor ? vendor.vendor_name : '-No vendor-'}
                </div>,
        },
        {
            accessor: 'created_at',
            title: 'Created time',
            sortable: true,
            render: ({ created_at }) => {
                const date = new Date(created_at);
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const hours = date.getHours();
                const minutes = String(date.getMinutes()).padStart(2, '0');
                const ampm = hours >= 12 ? 'PM' : 'AM';
                const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${hours % 12 || 12}:${minutes} ${ampm}`;
    
                return (
                    <div className="font-semibold">
                        {formattedDate}
                    </div>
                );
            },
        },
    ];

    return (
        <>
            <GenerateIndexTable modelName="purchaseOrder" tableColumns={columns} frontRoute='purchase' />
        </>
    );
};

export default List;
