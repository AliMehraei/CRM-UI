
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
        dispatch(setPageTitle('Task List'));
    }, [dispatch]);


    const columns: any = [
       
        {
            accessor: 'subject',
            title: 'Task subject',
            sortable: false,
            render: ({ subject, id }) => {
                const maxSubjectLength = 30; // Set your desired maximum length for the subject
                const truncatedSubject = subject.length > maxSubjectLength ? subject.slice(0, maxSubjectLength) + '...' : subject;
            
                return (
                    hasPermission('update-task') ? (
                        <NavLink to={`/task/edit/${id}`}>
                            <div className="text-primary underline hover:no-underline font-semibold">{`#${truncatedSubject}`}</div>
                        </NavLink>
                    ) : (
                        <div className="font-semibold">{`#${truncatedSubject}`}</div>
                    )
                );
            }
        },

        {
            accessor: 'due_date',
            title: 'Due Date',
            sortable: true,
            render: ({ due_date }) => {
                const date = new Date(due_date);
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
            accessor: 'owner',
            title: 'Task Owner',
            sortable: false,
            render: ({ owner }) => (
                <div className="flex items-center font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
                </div>
            ),
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
            accessor: 'priority',
            sortable: true,
            render: ({ priority }) => (
                <div className="flex items-center font-semibold">
                    {priority}
                </div>
            ),
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
            <GenerateIndexTable modelName="task" tableColumns={columns} />
        </>
    );
};

export default List;
