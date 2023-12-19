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
            accessor: 'product',
            title: 'product',
            sortable: false,
            render: ({product}: any) => (
                <div className="flex items-center font-semibold">
                    {product ? product.product_name : 'No product'}
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
            <GenerateIndexTable modelName="salesOrder" tableColumns={columns} frontRoute='sales'/>
        </>
    );
};

export default List;
