
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
        dispatch(setPageTitle('User List'));
    }, [dispatch]);


    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ id }) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'first_name',
            sortable: true,
            render: ({ first_name,last_name, id }) => (
                hasPermission('update-user') ? (
                    <NavLink to={`/user/edit/${id}`}>
                        <div
                            className="text-primary underline hover:no-underline font-semibold">{`#${first_name + " "+ last_name}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${first_name+ " "+ last_name}`}</div>
                )
            )
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
            accessor: 'owner',
            sortable: true,
            render: ({ owner }) => (
                <div className="flex items-center font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
                </div>
            ),
        },
        {
            accessor: 'status',
            title: 'status',
            sortable: true,
            render: ({ status }) => (
                <div className="flex items-center font-semibold">
                    {status}
                </div>
            ),
        },


    ];

    return (
        <>
            <GenerateIndexTable modelName="user" tableColumns={columns} />
        </>
    );
};

export default List;
