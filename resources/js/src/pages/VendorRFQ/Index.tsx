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
            <GenerateIndexTable modelName="vendorRfq" tableColumns={columns} frontRoute="vendor_rfq"/>
        </>
    );
};

export default List;
