
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
        dispatch(setPageTitle('Fiscal Account List'));
    }, [dispatch]);


    const columns: any = [
       
        {
            accessor: 'account_name',
            sortable: true,
            render: ({ account_name ,id}) => (
                hasPermission('update-fiscal-account') ? (
                    <NavLink to={`/fiscal-account/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${account_name}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${account_name}`}</div>
                )
            )
        },
        {
            accessor: 'account_type',
            sortable: true,
            render: ({ account_type }) => (
                <div className="font-semibold">
                    {account_type}
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
            <GenerateIndexTable modelName="fiscalAccount" tableColumns={columns} />
        </>
    );
};

export default List;
