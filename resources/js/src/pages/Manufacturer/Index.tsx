
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
        dispatch(setPageTitle('manufacturer List'));
    }, [dispatch]);


    const columns: any = [
        
        {
            accessor: 'manufacturer_name',
            sortable: true,
            render: ({ name, id }) => (
                hasPermission('update-manufacturer') ? (
                    <NavLink to={`/manufacturer/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${name}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${name}`}</div>
                )
            )
        },
        {
            accessor: 'octo_api_id',
            sortable: true,
            render: ({ octo_api_id }) => (
                <div className="flex items-center font-semibold">
                    {octo_api_id}
                </div>
            ),
        },
        {
            accessor: 'owner',
            sortable: true,
            render: ({ owner }) => (
                <div className="flex items-center font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
                </div>
            ),
        },
        {
            accessor: 'is_active',
            title: 'Active',
            sortable: true,
            render: ({ is_active }) => (
                <div className="flex items-center font-semibold">
                    {is_active === 1 ? 'Active' : 'Not Active'}
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
            <GenerateIndexTable modelName="manufacturer" tableColumns={columns} />
        </>
    );
};

export default List;
