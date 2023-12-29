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
        dispatch(setPageTitle('Lead List'));
    }, [dispatch]);
    const LeadStatus = [
        {value: 'none', label: '-None-'},
        {value: '0.0 Cold lead / unqualified (CLU)', label: (<><span className="inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"></span>0.0 Cold lead / unqualified (CLU)</>)},
        {value: '1.0 Cold lead qualified (CLQ)', label: (<><span className="inline-block w-4 h-4 mr-2 bg-blue-300 rounded-full"></span>1.0 Cold lead qualified (CLQ)</>)},
        {value: '2.0 First contact made (FCM)', label: (<><span className="inline-block w-4 h-4 mr-2 bg-purple-200 rounded-full"></span>2.0 First contact made (FCM)</>)},
        {value: '3.0 warm lead qualified (WLQ)', label: (<><span className="inline-block w-4 h-4 mr-2 bg-orange-300 rounded-full"></span>3.0 warm lead qualified (WLQ)</>)},
        {value: '4.0 Hot lead (HLQ)', label: (<><span className="inline-block w-4 h-4 mr-2 bg-orange-600 rounded-full"></span>4.0 Hot lead (HLQ)</>)},
        {value: 'Close Lead / Lost Lead', label: (<><span className="inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"></span>Close Lead / Lost Lead</>)},

    ];

    const columns: any = [
       
        {
            accessor: 'lead_name',
            title: 'Lead Name',
            sortable: false,
            render: ({ first_name, last_name }) => (
                <div className="flex items-center font-semibold">
                    {`${first_name} ${last_name}`}
                </div>
            ),

        },
        {
            accessor: 'company',
            sortable: true,
            render: ({ company, id }) => (
                hasPermission('update-lead') ? (
                    <NavLink to={`/lead/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${company}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${company}`}</div>
                )
            )
        },
        {
            accessor: 'owner',
            title: 'Lead Owner',
            sortable: false,
            render: ({ owner }) => (
                <div className="flex items-center font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
                </div>
            ),
        },
        {
            accessor: 'email',
            sortable: true,
            render: ({ email }) => (
                <div className="flex items-center font-semibold">
                    {email}
                </div>
            ),
        },
        {
            accessor: 'status',
            sortable: true,
            render: ({ status }) => {
                const statusObj = LeadStatus.find((title) => title.value === status);
                return statusObj ? (
                    <div className="flex items-center font-semibold">
                        {statusObj.label}
                    </div>
                ) : (
                    <div className="flex items-center font-semibold">
                        {status}
                    </div>
                );
            },
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
            <GenerateIndexTable modelName="lead" tableColumns={columns} />
        </>
    );
};

export default List;
