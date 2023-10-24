import {NavLink} from 'react-router-dom';
import {useEffect} from 'react';
import {setPageTitle} from '../../store/themeConfigSlice';
import {useDispatch} from "react-redux";
import {useUserStatus} from "../../config/authCheck";
import GenerateIndexTable from "../../components/FilterFields/GenerateIndexTable";

const List = () => {
    const dispatch = useDispatch();
    const {hasPermission} = useUserStatus();
    useEffect(() => {
        dispatch(setPageTitle('Call List'));
    }, [dispatch]);


    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({id}: any) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'subject',
            title: 'Call subject',
            sortable: false,
            render: ({subject, id}: any) => (
                hasPermission('update-call') ? (
                    <NavLink to={`/call/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${subject}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${subject}`}</div>
                )
            )
        },

        {
            accessor: 'type',
            sortable: true,
            render: ({type}: any) => (
                <div className="flex items-center font-semibold">
                    {type}
                </div>
            ),
        },


    ];

    return (
        <>
            <GenerateIndexTable modelName="call" tableColumns={columns}/>
        </>
    );
};

export default List;
