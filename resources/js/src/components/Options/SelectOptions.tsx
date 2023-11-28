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

export const ContactSources = [
    {value: "none", label: "-None-"},
    {value: "CEO connections", label: "CEO connections"},
    {value: "Client Tipp", label: "Client Tipp"},
    {value: "Competitor Tipp", label: "Competitor Tipp"},
    {value: "Externe Vermittlung", label: "Externe Vermittlung"},
    {value: "Fachtagung", label: "Fachtagung"},
    {value: "Google Ad campaign SEM", label: "Google Ad campaign SEM"},
    {value: "Google SEO", label: "Google SEO"},
    {value: "Internetrecherche", label: "Internetrecherche"},
    {value: "Lead called ALPYN", label: "Lead called ALPYN"},
    {value: "LinkedIn Ads", label: "LinkedIn Ads"},
    {value: "LinkedIn Social selling activity", label: "LinkedIn Social selling activity"},
    {value: "Messe", label: "Messe"},
    {value: "Messe AT", label: "Messe AT"},
    {value: "Messe CH", label: "Messe CH"},
    {value: "Messe DE", label: "Messe DE"},
    {value: "Messe ITA", label: "Messe ITA"},
    {value: "Netcomponents", label: "Netcomponents"},
    {value: "Networking Linkedin", label: "Networking Linkedin"},
    {value: "Networking offline", label: "Networking offline"},
    {value: "Online Events (b2bmatch e.g)", label: "Online Events (b2bmatch e.g)"},
    {value: "Online Messen", label: "Online Messen"},
    {value: "Others", label: "Others"},
    {value: "Portal Access request", label: "Portal Access request"},
    {value: "Reseller Tipp", label: "Reseller Tipp"},
    {value: "Sales activity by general Assistant (BDR / SDR)", label: "Sales activity by general Assistant (BDR / SDR)"},
    {value: "Sales activity by ITA Assistent (BDR / SDR)", label: "Sales activity by ITA Assistent (BDR / SDR)"},
    {value: "Team Connections", label: "Team Connections"},
    {value: "Website request", label: "Website request"}
];

export const ContactJobDescriptions = [
    {value: "none", label: "-None-"},
    {value: "Buyer", label: "Buyer"},
    {value: "Operative Buyer", label: "Operative Buyer"},
    {value: "Strategic Buyer", label: "Strategic Buyer"},
    {value: "Project Buyer", label: "Project Buyer"},
    {value: "Commodity Buyer", label: "Commodity Buyer"},
    {value: "Team Leader", label: "Team Leader"},
    {value: "Purchasing Manager", label: "Purchasing Manager"},
    {value: "Purchasing Director", label: "Purchasing Director"},
    {value: "Director", label: "Director"},
    {value: "Developer", label: "Developer"},
    {value: "Sales", label: "Sales"}
];

export const ContactStatus = [
    {value: "none", label: "-None-"},
    {value: "Nicht qualifiziert", label: "Nicht qualifiziert"},
    {value: "Vorqualifiziert", label: "Vorqualifiziert"},
    {value: "Zukünftig kontaktieren", label: "Zukünftig kontaktieren"},
    {value: "Nicht kontaktiert", label: "Nicht kontaktiert"},
    {value: "Kontaktversuch", label: "Kontaktversuch"},
    {value: "Follow Up notwendig", label: "Follow Up notwendig"},
    {value: "Einwandbehandlung", label: "Einwandbehandlung"},
    {value: "RFQ - Waiting", label: "RFQ - Waiting"},
    {value: "Quote - Sent", label: "Quote - Sent"},
    {value: "Sales Order - received", label: "Sales Order - received"},
    {value: "Verlorener Kontakt", label: "Verlorener Kontakt"},
    {value: "Wertloser Kontakt", label: "Wertloser Kontakt"},

];

export const ContactPortalAccess = [
    { value: "none", label: "-None-" },
    { value: "Waiting", label: "Waiting" },
    { value: "Confirmed", label: "Confirmed" },
    { value: "Rejected", label: "Rejected" },
];

export const ContactActivities = [
    { value: "none", label: "-None-" },
    { value: "No Activity", label: "No Activity" },
    { value: "> 1 year Activity", label: "> 1 year Activity" },
    { value: "> 1 month Activity", label: "> 1 month Activity" },
    { value: "regulare Activity", label: "Regular Activity" },

];

export const ContactDoubleCheckStatuses = [
    { value: "none", label: "-None-" },
    { value: "Back to lead", label: "Back to lead" },
    { value: "Converted to lead", label: "Converted to lead" },
    { value: "Must Be Deleted", label: "Must Be Deleted" },
];

export const SalesOrderDealStages = [
    { value: 'none', label: '-None-' },
    { value: 'Draft', label: 'Draft' },
    { value: 'No Feedback', label: 'No Feedback' },
    { value: 'Negotiation Price', label: 'Negotiation Price' },
    { value: 'Negotiation Conditions', label: 'Negotiation Conditions' },
    { value: 'Open', label: 'Open' },
    { value: 'Lost', label: 'Lost' },
    { value: 'Won', label: 'Won' },
];

export const SalesOrderTypeOption = [
    {value: 'none', label: '-None-'},
    {value: 'Single Order', label: 'Single Order'},
    {value: 'Frame Contract', label: 'Frame Contract'},
    {value: 'Call Off', label: 'Call Off'},
    {value: 'Forecast', label: 'Forecast'},

];
export const SalesOrderStatusOption = [
    { value: 'Draft', label: 'Draft' },
    { value: 'Open', label: 'Open' },
    { value: 'Approved', label: 'Approved' },
    { value: 'Closed', label: 'Closed' },
    { value: 'Void', label: 'Void' },
];

export const SalesOrderApproveChanges = [
    { value: 'none', label: '-None-' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
];

export const QuoteStages = [
    {value: 'Draft', label: 'Draft'},
    {value: 'Open', label: 'Open'},
    {value: 'No Feedback', label: 'No Feedback'},
    {value: 'Negotiation Price', label: 'Negotiation Price'},
    {value: 'Negotiation Conditions', label: 'Negotiation Conditions'},
    {value: 'Lost', label: 'Lost'},
    {value: 'Won', label: 'Won'},


];

export const QuoteChances = [
    {value: 'none', label: '-None-'},
    {value: 'High', label: 'High'},
    {value: 'Unknown', label: 'Unknown'},
    {value: 'Low', label: 'Low'},

];

export const QuoteValid = [
    {value: 'none', label: '-None-'},
    {value: '1 Day', label: '1 Day'},
    {value: '3 Days', label: '3 Days'},
    {value: '1 Week', label: '1 Week'},

];
