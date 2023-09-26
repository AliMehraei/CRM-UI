
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
        dispatch(setPageTitle('Quote List'));
    }, [dispatch]);


    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ id }) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'Subject',
            sortable: true,
            render: ({ subject, id }) => (
                hasPermission('update-quote') ? (
                    <NavLink to={`/quotes/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${subject}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${subject}`}</div>
                )
            )
        },
        {
            accessor: 'quote_stage',
            title: 'Quote Stage',
            sortable: true,
            render: ({ quote_stage }) => (
                <div className="flex items-center font-semibold">
                    {quote_stage}
                </div>
            ),
        },
    
        {
            accessor: 'owner',
            title: 'Quote Owner',
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
            <GenerateIndexTable modelName="quote" tableColumns={columns} />
        </>
    );
};

export default List;
