import React,{ useEffect, useState } from "react";

export const leadColumns = [
    
    {
        accessor: 'owner',
        title: 'Lead Owner',
        sortable: false,
        render: ({ owner }) => (
            <div className="font-semibold">
                {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
            </div>
        ),
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

export const accountColumns = [
    
    {
        accessor: 'owner',
        title: 'Account Owner',
        sortable: false,
        render: ({ owner }) => (
            <div className="font-semibold">
                {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
            </div>
        ),
    },
    {
        accessor: 'account_name',
        sortable: true,
        render: ({ account_name } : any) => <div className="font-semibold">{account_name}</div>,
    },
    
    {
        accessor: 'phone',
        sortable: true,
        render: ({ phone } : any) => <div className="font-semibold">{phone}</div>,
    },
    {
        accessor: 'website',
        sortable: true,
        render: ({ website } : any) => <div className="font-semibold">{website}</div>,
    },
     
];

export const contactColumns = [
    
    {
        accessor: 'owner',
        title: 'Contact Owner',
        sortable: false,
        render: ({ owner }) => (
            <div className="font-semibold">
                {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
            </div>
        ),
    },
    {
        accessor: 'full_name',
        sortable: true,
        render: ({ full_name } : any) => <div className="font-semibold">{full_name}</div>,
    },
    
    // {
    //     accessor: 'account_name',
    //     sortable: true,
    //     render: ({ account } : any) => <div className="font-semibold">{account ? account.account_name  : ' '}</div>,
    // },
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
     
];

export const dealColumns = [
    
    {
        accessor: 'owner',
        title: 'Deal Owner',
        sortable: false,
        render: ({ owner }) => (
            <div className="font-semibold">
                {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
            </div>
        ),
    },
    {
        accessor: 'deal_name',
        sortable: true,
        render: ({ deal_name } : any) => <div className="font-semibold">{deal_name}</div>,
    },
    
    
    {
        accessor: 'deal_stage',
        sortable: true,
        render: ({ deal_stage } : any) => <div className="font-semibold">{deal_stage}</div>,
    },

    {
        accessor: 'amount',
        sortable: true,
        render: ({ amount } : any) => <div className="font-semibold">{amount}</div>,
    },
     
];

export const manufacturerColumns = [

    {
        accessor: 'owner',
        title: 'Manufacture Owner',
        sortable: false,
        render: ({ owner }) => (
            <div className="font-semibold">
                {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
            </div>
        ),
    },
    
    {
        accessor: 'name',
        title: 'Manufacture name',
        sortable: true,
        render: ({ name } : any) => <div className="font-semibold">{name}</div>,
    },

    {
        accessor: 'email',
        sortable: true,
        render: ({ email } : any) => <div className="font-semibold">{email}</div>,
    },
     
];

export const taskColumns = [

    {
        accessor: 'owner',
        title: 'Task Owner',
        sortable: false,
        render: ({ owner }) => (
            <div className="font-semibold">
                {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
            </div>
        ),
    },
    
    {
        accessor: 'subject',
        sortable: true,
        render: ({ subject } : any) => <div className="font-semibold">{subject}</div>,
    },

    {
        accessor: 'status',
        sortable: true,
        render: ({ status } : any) => <div className="font-semibold">{status}</div>,
    },
     
];

export const vendorColumns = [

    {
        accessor: 'owner',
        title: 'Vendor Owner',
        sortable: false,
        render: ({ owner }) => (
            <div className="font-semibold">
                {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
            </div>
        ),
    },
    
    {
        accessor: 'vendor_name',
        sortable: true,
        render: ({ vendor_name } : any) => <div className="font-semibold">{vendor_name}</div>,
    },

    {
        accessor: 'email',
        sortable: true,
        render: ({ email } : any) => <div className="font-semibold">{email}</div>,
    },

    {
        accessor: 'vendor_source',
        sortable: true,
        render: ({ vendor_source } : any) => <div className="font-semibold">{vendor_source}</div>,
    },

    {
        accessor: 'vendor_type',
        sortable: true,
        render: ({ vendor_type } : any) => <div className="font-semibold">{vendor_type}</div>,
    },

    {
        accessor: 'approved_status',
        sortable: true,
        render: ({ approved_status } : any) => <div className="font-semibold">{approved_status}</div>,
    },
     
];

export const callColumns = [

    {
        accessor: 'owner',
        title: 'Call Owner',
        sortable: false,
        render: ({ owner }) => (
            <div className="font-semibold">
                {owner ? owner.first_name + ' ' + owner.last_name : 'No Owner'}
            </div>
        ),
    },
    
    {
        accessor: 'subject',
        sortable: true,
        render: ({ subject } : any) => <div className="font-semibold">{subject}</div>,
    },

    {
        accessor: 'type',
        sortable: true,
        render: ({ type } : any) => <div className="font-semibold">{type}</div>,
    },

    
];