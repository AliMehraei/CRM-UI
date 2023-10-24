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
        dispatch(setPageTitle('Excess List'));
    }, [dispatch]);


    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ id }) => <div className="font-semibold">{id}</div>,
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
        {
            accessor: 'excess_name',
            sortable: true,
            render: ({ excess_name, id }) => (
                hasPermission('update-excess') ? (
                    <NavLink to={`/excess/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${excess_name}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${excess_name}`}</div>
                )
            )
        },
        {
            accessor: 'owner',
            sortable: false,
            render: ({ owner }) => (
                <div className="flex items-center font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : '-No owner-'}
                </div>
            ),
        },
        {
            accessor: 'product',
            sortable: false,
            render: ({ product }) => (
                <div className="flex items-center font-semibold">
                    {product ? product.product_name : '-No product-'}
                </div>
            ),
        },
        {
            accessor: 'quantity_in_demand',
            sortable: true,
            render: ({ quantity_in_demand }) => <div className="font-semibold">{quantity_in_demand}</div>,
        },
    ];

    return (
        <>
            <GenerateIndexTable modelName="excess" tableColumns={columns} />
        </>
    );
};

export default List;
