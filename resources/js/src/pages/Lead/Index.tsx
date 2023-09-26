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


    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ id }: any) => <div className="font-semibold">{id}</div>,
        },
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



    ];

    return (
        <>
            <GenerateIndexTable modelName="lead" tableColumns={columns} />
        </>
    );
};

export default List;
