import {NavLink} from 'react-router-dom';
import {useEffect} from 'react';
import {setPageTitle} from '../../store/themeConfigSlice';
import {formatDate} from "@fullcalendar/core";
import {useDispatch} from "react-redux";
import {useUserStatus} from "../../config/authCheck";
import GenerateIndexTable from "../../components/FilterFields/GenerateIndexTable";

const List = () => {
    const dispatch = useDispatch();
    const {hasPermission} = useUserStatus();
    useEffect(() => {
        dispatch(setPageTitle('vendor RFQ List'));
    }, [dispatch]);


    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({id}: any) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'vendor_rfq_name',
            sortable: true,
            render: ({vendor_rfq_name, id}: any) => (
                hasPermission('update-vendor-rfq') ? (
                    <NavLink to={`/vendor_rfq/edit/${id}`}>
                        <div
                            className="text-primary underline hover:no-underline font-semibold">{`#${vendor_rfq_name}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${vendor_rfq_name}`}</div>
                )
            )
        },
        {
            accessor: 'status',
            sortable: true,
            render: ({status}: any) => (
                <div className="flex items-center font-semibold">
                    {status}
                </div>
            ),
        },
        {
            accessor: 'vendor_rfq_owner',
            sortable: false,
            render: ({owner}: any) =>
                <div className="font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : '-No Owner-'}
                </div>,
        },
        {
            accessor: 'vendor name',
            sortable: false,
            render: ({vendor}: any) =>
                <div className="font-semibold">
                    {vendor ? vendor.vendor_name : '-No Vendor-'}
                </div>,
        },


    ];

    return (
        <>
            <GenerateIndexTable modelName="vendorRfq" tableColumns={columns} frontRoute="vendor_rfq"/>
        </>
    );
};

export default List;
