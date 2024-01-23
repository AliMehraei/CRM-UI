
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
        dispatch(setPageTitle('Email Log List'));
    }, [dispatch]);


    const columns: any = [

        {
            accessor: 'subject',
            sortable: true,
            render: ({ subject }) => (
                <div className="font-semibold">
                    {subject}
                </div>
            ),
        },
       
        {
            accessor: 'receiver_mail',
            sortable: true,
            render: ({ receiver_mail }) => (
                <div className="font-semibold">
                    {receiver_mail}
                </div>
            ),
        },
        {
            accessor: 'sender_email',
            sortable: true,
            render: ({ sender_email }) => (
                <div className="font-semibold">
                    {sender_email}
                </div>
            ),
        },
        {
            accessor: 'sender_type',
            sortable: true,
            render: ({ sender_type }) => (
                <div className="font-semibold">
                    {sender_type}
                </div>
            ),
        },
        {
            accessor: 'status',
            sortable: true,
            render: ({ status }) => (
                <div>
                {status === 'pending' && (
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{status}</span>
                )}
                {status === 'received' && (
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{status}</span>
                )}
                </div>
            ),
        },
        {
            accessor: 'owner',
            title: 'Owner',
            sortable: false,
            render: ({ owner }) => (
                <div className="font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
                </div>
            ),
        },
        {
            accessor: 'created_at',
            title: 'Created time',
            sortable: true,
            render: ({ created_at }) => {
                const date = new Date(created_at);
                const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
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
            <GenerateIndexTable modelName="emailLog" tableColumns={columns} frontRoute="email_log" />
        </>
    );
};

export default List;
