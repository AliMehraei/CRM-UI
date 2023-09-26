
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
            accessor: 'id',
            sortable: true,
            render: ({ id }) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'subject',
            sortable: true,
            render: ({ subject, id }) => (
                hasPermission('update-purchase') ? (
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

    ];

    return (
        <>
            <GenerateIndexTable modelName="purchaseOrder" tableColumns={columns} />
        </>
    );
};

export default List;
