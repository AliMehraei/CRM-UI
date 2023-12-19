
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
        dispatch(setPageTitle('Account List'));
    }, [dispatch]);


    const columns: any = [
       
        {
            accessor: 'account_name',
            sortable: true,
            render: ({ account_name, id }) => (
                hasPermission('update-account') ? (
                    <NavLink to={`/account/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${account_name}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${account_name}`}</div>
                )
            )
        },
        {
            accessor: 'business_account',
            title: 'Business Account',
            sortable: true,
            render: ({ business_account }) => (
                <div className="flex items-center font-semibold">
                    {business_account === 1 ? '✔' : ''}
                </div>
            ),
        },
        {
            accessor: 'owner',
            title: 'Account Owner',
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
        {
            accessor: 'phone',
            sortable: true,
            render: ({ phone }) => (
                <div className="font-semibold">
                    {phone}
                </div>
            ),
        },


    ];

    return (
        <>
            <GenerateIndexTable modelName="account" tableColumns={columns} />
        </>
    );
};

export default List;
