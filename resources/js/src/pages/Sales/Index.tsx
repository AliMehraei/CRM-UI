import {NavLink} from 'react-router-dom';
import {useEffect} from 'react';
import {setPageTitle} from '../../store/themeConfigSlice';
import {formatDate} from "@fullcalendar/core";
import {useDispatch} from "react-redux";
import {useUserStatus} from "../../config/authCheck";
import GenerateIndexTable from "../../components/FilterFields/GenerateIndexTable";

const List = () => {
    const dispatch = useDispatch();
    const {hasPermission} = useUserStatus();
    useEffect(() => {
        dispatch(setPageTitle('Sales Order List'));
    }, [dispatch]);


    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({id}: any) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'subject',
            title: 'Sales Order subject',
            sortable: true,
            render: ({subject, id}: any) => (
                hasPermission('update-sales-order') ? (
                    <NavLink to={`/sales/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${subject}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${subject}`}</div>
                )
            )
        },
        {
            accessor: 'status',
            sortable: true,
            render: ({status}: any) => (
                <div className="flex items-center font-semibold">
                    {status}
                </div>
            ),
        },
        {
            accessor: 'owner',
            title: 'Sale Order Owner',
            sortable: false,
            render: ({owner}: any) => (
                <div className="flex items-center font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
                </div>
            ),
        },


    ];

    return (
        <>
            <GenerateIndexTable modelName="salesOrder" tableColumns={columns} frontRoute='sales'/>
        </>
    );
};

export default List;
