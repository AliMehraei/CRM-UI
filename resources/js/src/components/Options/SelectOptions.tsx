import React from 'react';

export const PurchaseOrdersTypeOption = [
    {value: 'none', label: '-None-'},
    {value: 'Single PO', label: 'Single PO'},
    {value: 'Frame PO', label: 'Frame PO'},
    {value: 'Call Off', label: 'Call Off'},
    {value: 'Forecast PO', label: 'Forecast PO'},

];

export const PurchaseCarrierOption = [
    {value: 'Vendor Forwarder', label: 'Vendor Forwarder'},
    {value: 'UPS', label: 'UPS'},
    {value: 'USPS', label: 'USPS'},
    {value: 'DHL', label: 'DHL'},
    {value: 'BlueDart', label: 'BlueDart'},
];

export const AccountRating = [
    {value: "none", label: "-None-"},
    {value: "RFQ", label: "RFQ"},
    {value: "Quote", label: "Quote"},
    {value: "SO", label: "SO"},
    {value: "No Action", label: "No Action"},
    {value: "Inactive", label: "Inactive"},

];

export const AccountActivities = [
    {value: "none", label: "-None-"},
    {value: "No Activity", label: "No Activity"},
    {value: "1 year Activity", label: "> 1 year Activity"},
    {value: "1 month Activity", label: "> 1 month Activity"},
    {value: "regulare Activity", label: "Regular Activity"},
];

export const AccountDoubleCheckStatuses = [
    {value: "none", label: "-None-"},
    {value: "Back to lead", label: "Back to lead"},
    {value: "Converted to lead", label: "Converted to lead"},
    {value: "Must Be Deleted", label: "Must be deleted"},
];
