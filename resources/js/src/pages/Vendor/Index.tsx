
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
            'route':'availability-vendor/list'
        },
       
    ];

    const columns: any = [
       
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
            <GenerateIndexTable modelName="vendor" tableColumns={columns}
            actionPlus={actionPlus}
            />
        </>
    );
};

export default List;
