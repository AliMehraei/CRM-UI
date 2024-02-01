import React,{ useEffect, useState } from "react";

export const leadColumns = [
    {
        accessor: 'id',
        sortable: true,
        render: ({ id } : any) => <div className="font-semibold">{id}</div>,
    },
    {
        accessor: 'company',
        sortable: true,
        render: ({ company } : any) => <div className="font-semibold">{company}</div>,
    },
    {
        accessor: 'email',
        sortable: true,
        render: ({ email } : any) => <div className="font-semibold">{email}</div>,
    },
    {
        accessor: 'phone',
        sortable: true,
        render: ({ phone } : any) => <div className="font-semibold">{phone}</div>,
    },
    {
        accessor: 'lead_source',
        title : 'Lead Source',
        sortable: true,
        render: ({ lead_source } : any) => <div className="font-semibold">{lead_source}</div>,
    },
     
];