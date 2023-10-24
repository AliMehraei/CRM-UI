
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
        dispatch(setPageTitle('Deal List'));
    }, [dispatch]);


    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ id }) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'deal_name',
            sortable: true,
            render: ({ deal_name, id }) => (
                hasPermission('update-contact') ? (
                    <NavLink to={`/deal/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${deal_name} `}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${deal_name} `}</div>
                )
            ),
        },
        {
            accessor: 'amount',
            sortable: true,
            render: ({ amount, currency }) => (
                <div className="flex items-center font-semibold">
                    {`${amount} ${currency}`}
                </div>
            ),
        },
        {
            accessor: 'deal_owner',
            title: 'Deal Owner',
            sortable: false,
            render: ({ owner }) =>
                <div className="font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : '-No Owner-'}
                </div>,
        },
        
        {
            accessor: 'closing_date',
            title: 'Closing time',
            sortable: true,
            render: ({ closing_date }) => {
                const date = new Date(closing_date);
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
        }

    ];

    return (
        <>
            <GenerateIndexTable modelName="deal" tableColumns={columns} />
        </>
    );
};

export default List;
