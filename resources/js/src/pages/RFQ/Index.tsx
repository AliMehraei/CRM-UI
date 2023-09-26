
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
        dispatch(setPageTitle('RFQ List'));
    }, [dispatch]);


    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ id }) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'rfq_name',
            sortable: true,
            render: ({ rfq_name, id }) => (
                hasPermission('update-rfq') ? (
                    <NavLink to={`/rfq/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${rfq_name}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${rfq_name}`}</div>
                )
            )
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
            accessor: 'owner',
            title: 'Quote Owner',
            sortable: false,
            render: ({ owner }) => (
                <div className="flex items-center font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
                </div>
            ),
        },
        {
            accessor: 'target_price',
            sortable: true,
            render: ({ target_price, currency }) => <div className="font-semibold">{`${target_price} ${currency}`}</div>,
        },
        {
            accessor: 'Rfq Type',
            sortable: true,
            render: ({ rfq_type }) => <div className="font-semibold">{rfq_type}</div>,
        },


    ];

    return (
        <>
            <GenerateIndexTable modelName="rfq" tableColumns={columns} />
        </>
    );
};

export default List;
