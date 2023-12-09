
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { formatDate } from "@fullcalendar/core";
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import GenerateIndexTable from "../../components/FilterFields/GenerateIndexTable";
import React from 'react';

const List = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    useEffect(() => {
        dispatch(setPageTitle('Contact List'));
    }, [dispatch]);
    const actionPlus=[
        {
            'icon':"BOM",
            'route':'bom/list'
        },
        {
            'icon':"Excess",
            'route':'excess/list'
        }
    ];

    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ id }) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'contact_name',
            sortable: false,
            render: ({ first_name, last_name, id }) => (
                hasPermission('update-contact') ? (
                    <NavLink to={`/contact/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${first_name} ${last_name}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${first_name} ${last_name}`}</div>
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
            title: 'Contact Owner',
            sortable: false,
            render: ({ owner }) => (
                <div className="flex items-center font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
                </div>
            ),
        },
        {
            accessor: 'account',
            title: 'Account Name',
            sortable: false,
            render: ({ account }) => (
                <div className="flex items-center font-semibold">
                    {account ? account.account_name : 'No Account'}
                </div>
            ),
        },

    ];

    return (
        <>
            <GenerateIndexTable modelName="contact" tableColumns={columns} actionPlus={actionPlus} />
        </>
    );
};

export default List;
