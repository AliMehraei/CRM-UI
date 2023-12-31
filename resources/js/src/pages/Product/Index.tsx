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
        dispatch(setPageTitle('Product List'));
    }, [dispatch]);


    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({id}: any) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'product_name',
            sortable: true,
            render: ({product_name, id}: any) =>
                hasPermission('update-product') ? (
                    <NavLink to={`/product/edit/${id}`}>
                        <div
                            className="text-primary underline hover:no-underline font-semibold">{`#${product_name}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${product_name}`}</div>
                ),
        },
        {
            accessor: 'manufacturer',
            sortable: false,
            render: ({manufacturer}: any) => (
                <div className="flex items-center font-semibold">
                    {manufacturer ? manufacturer.name : 'No manufacturer'}
                </div>
            ),
        },
        {
            accessor: 'owner',
            title: 'Product Owner',
            sortable: false,
            render: ({owner}: any) =>
                <div className="font-semibold">
                    {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
                </div>,
        },
        {
            accessor: 'product_active',
            title: 'Product Active',
            sortable: true,
            render: ({product_active}: any) => (
                <div className="flex items-center font-semibold">
                    {product_active === 1 ? '✔' : ''}
                </div>
            ),
        },
        {
            accessor: 'created_at',
            title: 'Created time',
            sortable: true,
            render: ({created_at}: any) => {
                const formattedDate = formatDate(created_at);
                return (
                    <div className="font-semibold">
                        {formattedDate}
                    </div>
                );
            },
        },
        {
            accessor: 'Product Type',
            sortable: true,
            render: ({product_type}: any) =>
                <div className="font-semibold">{product_type}</div>,
        },

    ];

    return (
        <>
            <GenerateIndexTable modelName="product" tableColumns={columns}/>
        </>
    );
};

export default List;
