
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
        dispatch(setPageTitle('Invoice List'));
    }, [dispatch]);


    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ id }) => <div className="font-semibold">{id}</div>,
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
            accessor: 'subject',
            sortable: true,
            render: ({ subject, id }) => (
                hasPermission('update-invoice') ? (
                    <NavLink to={`/invoice/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${subject}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${subject}`}</div>
                )
            )
        },
        {
            accessor: 'owner',
            title: 'Invoice Owner',
            sortable: false,
            render: ({ owner }) => (
                <div className="flex items-center font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : '-No owner-'}
                </div>
            ),
        },
        {
            accessor: 'contact',
            title: 'Contact Owner',
            sortable: false,
            render: ({ contact }) => (
                <div className="flex items-center font-semibold">
                    {contact ? `${contact.first_name} ${contact.last_name}` : '-No contact-'}
                </div>
            ),
        },
        {
            accessor: 'account',
            title: 'Account Owner',
            sortable: false,
            render: ({ account }) => (
                <div className="flex items-center font-semibold">
                    {account ? account.account_name : '-No account-'}
                </div>
            ),
        },
    ];

    return (
        <>
            <GenerateIndexTable modelName="invoice" tableColumns={columns} />
        </>
    );
};

export default List;
