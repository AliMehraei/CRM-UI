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

export const LeadStatus: any = [
    {value: 'none', label: '-None-'},
    {
        value: '0.0 Cold lead / unqualified (CLU)',
        label: (<><span className="inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"></span>0.0 Cold lead /
            unqualified (CLU)</>)
    },
    {
        value: '1.0 Cold lead qualified (CLQ)',
        label: (<><span className="inline-block w-4 h-4 mr-2 bg-blue-300 rounded-full"></span>1.0 Cold lead
            qualified (CLQ)</>)
    },
    {
        value: '2.0 First contact made (FCM)',
        label: (<><span className="inline-block w-4 h-4 mr-2 bg-purple-200 rounded-full"></span>2.0 First contact
            made (FCM)</>)
    },
    {
        value: '3.0 warm lead qualified (WLQ)',
        label: (<><span className="inline-block w-4 h-4 mr-2 bg-orange-300 rounded-full"></span>3.0 warm lead
            qualified (WLQ)</>)
    },
    {
        value: '4.0 Hot lead (HLQ)',
        label: (<><span className="inline-block w-4 h-4 mr-2 bg-orange-600 rounded-full"></span>4.0 Hot lead
            (HLQ)</>)
    },
    {
        value: 'Close Lead / Lost Lead',
        label: (<><span className="inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"></span>Close Lead / Lost
            Lead</>)
    },

];

export const LeadCompanyType = [
    {value: 'none', label: '-None-'},
    {value: 'OEM', label: 'OEM'},
    {value: 'EMS', label: 'EMS'},
    {value: 'ODM (Development)', label: 'ODM (Development)'},
    {value: 'Reseller', label: 'Reseller'},
    {value: 'Other', label: 'Other'},

];

export const LeadLostReason = [
    {value: 'none', label: '-None-'},
    {value: 'Account or Contact exist already', label: 'Account or Contact exist already'},
    {value: 'Wrong Branch', label: 'Wrong Branch'},
    {value: 'Wrong Department', label: 'Wrong Department'},
    {value: 'Does Not Exist Anymore', label: 'Does Not Exist Anymore'},
    {value: 'Bankruptcy', label: 'Bankruptcy'},
    {value: 'Have partners already', label: 'Have partners already'},
    {value: 'No feedback', label: 'No feedback'},
    {value: 'Other', label: 'Other'},

];

export const LeadSource = [
    {value: 'none', label: '-None-'},
    {value: 'Exhibitor Messe Liste', label: 'Exhibitor Messe Liste'},
    {value: 'Exhibitor / Messeaussteller', label: 'Exhibitor / Messeaussteller'},
    {value: 'Research', label: 'Research'},
    {value: 'Internal Recommendation', label: 'Internal Recommendation'},
    {value: 'External Recommendation', label: 'External Recommendation'},
    {value: 'Inbound Call', label: 'Inbound Call'},
    {value: 'Linkedin', label: 'Linkedin'},
    {value: 'Website / Inbound', label: 'Website / Inbound'},

];

export const LeadIndustry = [
    {value: 'none', label: '-None-'},
    {value: 'Industrial', label: 'Industrial'},
    {value: 'Automotive', label: 'Automotive'},
    {value: 'Consumer', label: 'Consumer'},
    {value: 'IT', label: 'IT'},
    {value: 'Defence', label: 'Defence'},
    {value: 'Transportation', label: 'Transportation'},
    {value: 'Medtec', label: 'Medtec'},
    {value: 'Metrology', label: 'Metrology'},
    {value: 'Other', label: 'Other'},

];

export const LeadRating = [
    {value: 'none', label: '-None-'},
    {value: 'Keine Aktivität', label: 'Keine Aktivität'},
    {value: 'Aktiv', label: 'Aktiv'},
    {value: 'In Qualifikation', label: 'In Qualifikation'},
    {value: 'Kein Potential', label: 'Kein Potential'},
    {value: 'Cold Lead', label: 'Cold Lead'},
    {value: 'Warm Lead', label: 'Warm Lead'},
    {value: 'Hot Lead', label: 'Hot Lead'},
];

export const LeadJobDescription = [
    {value: 'none', label: '-None-'},
    {value: 'Buyer', label: 'Buyer'},
    {value: 'Operative Buyer', label: 'Operative Buyer'},
    {value: 'Strategic Buyer', label: 'Strategic Buyer'},
    {value: 'Project Buyer', label: 'Project Buyer'},
    {value: 'Commodity Buyer', label: 'Commodity Buyer'},
    {value: 'Team Leader', label: 'Team Leader'},
    {value: 'Purchasing Manager', label: 'Purchasing Manager'},
    {value: 'Purchasing Director', label: 'Purchasing Director'},
    {value: 'Director', label: 'Director'},
    {value: 'Developer', label: 'Developer'},
    {value: 'Sales Account', label: 'Sales Account'},
    {value: 'Project Manager', label: 'Project Manager'},
    {value: 'Plant Manager', label: 'Plant Manager'},
    {value: 'Consultant', label: 'Consultant'},
    {value: 'not yet clear', label: 'Not Yet Clear'},
];

export const TaskStatus = [
    { value: 'none', label: '-None-' },
    { value: 'Nicht gestartet', label: 'Nicht gestartet' },
    { value: 'Verschoben', label: 'Verschoben' },
    { value: 'Läuft...', label: 'Läuft...' },
    { value:'Abgeschlossen' , label: 'Abgeschlossen' },
    { value: 'Warte auf Eingabe', label: 'Warte auf Eingabe' },
];

export const TaskPriority = [
    { value: 'none', label: '-None-' },
    { value: 'Hoch', label: 'Hoch' },
    { value: 'Höchster', label: 'Höchster' },
    { value: 'Niedrig', label: 'Niedrig' },
    { value: 'Niedrigster', label: 'Niedrigster' },
    { value: 'Normal', label: 'Normal' },

];
