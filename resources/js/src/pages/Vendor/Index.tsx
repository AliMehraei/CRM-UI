
import {NavLink} from 'react-router-dom';
import {useEffect} from 'react';
import {setPageTitle} from '../../store/themeConfigSlice';
import {formatDate} from "@fullcalendar/core";
import {useDispatch} from "react-redux";
import {useUserStatus} from "../../config/authCheck";
import GenerateIndexTable from "../../components/FilterFields/GenerateIndexTable";
import React from 'react';

const List = () => {
    const dispatch = useDispatch();
    const {hasPermission} = useUserStatus();
    useEffect(() => {
        dispatch(setPageTitle('Vendor List'));
    }, [dispatch]);

    const actionPlus=[
        {
            'icon':"Availability",
            'route':'bom/availability/list'
        },
       
    ];

    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ id }) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'vendor_name',
            sortable: true,
            render: ({ vendor_name,id }) => (
                hasPermission('update-vendor') ? (
                    <NavLink to={`/vendor/edit/${id}`}>
                        <div className="text-primary underline hover:no-underline font-semibold">{`#${vendor_name}`}</div>
                  </NavLink>
                ) : (
                  <div className="font-semibold">{`#${vendor_name}`}</div>
                )
              )
            },
        {
            accessor: 'vendor_owner',
            sortable: false,
            render: ({ owner }) =>
            <div className="font-semibold">
                {owner ? owner.first_name+' '+owner.last_name : 'No Owner'}
            </div>,
        },
        {
            accessor: 'phone',
            sortable: true,
            render: ({ phone }) => <div className="font-semibold">{phone}</div>,
        },
        {
            accessor: 'website',
            sortable: true,
            render: ({ website }) => <div className="font-semibold">{website}</div>,
        },

    ];

    return (
        <>
            <GenerateIndexTable modelName="vendor" tableColumns={columns}
            actionPlus={actionPlus}
            />
        </>
    );
};

export default List;
