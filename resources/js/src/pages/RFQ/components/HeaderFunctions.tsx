import {ex} from "@fullcalendar/core/internal-common";

const loadContacts = async (inputValue: any) => {
    const fetchedContacts = [
        {key: 1, value: 'contact1', label: 'Contact 1'},
        {key: 2, value: 'contact2', label: 'Contact 2'},
        // ... other contacts ...
    ];
    return fetchedContacts;
}

const handleContactChange = () => {

}

export const RFQSources = [
    {value: 'none', label: '-None-'},
    {value: 'email', label: 'Email'},
    {value: 'telephone', label: 'Telephone'},
    {value: 'web_portal', label: 'Web portal'},
    {value: 'history', label: 'History'}
];


const handleRFQSourceChange = () => {

}

export const RFQTypes = [
    {value: 'none', label: '-None-'},
    {value: 'cost_saving', label: 'Cost Saving'},
    {value: 'shortage', label: 'Shortage'},
    {value: 'eol', label: 'EOL'},
    {value: 'proactive', label: 'Proactive'},
    {value: 'calculation', label: 'Calculation'},
];

const handleRFQTypeChange = () => {

}
export const Statuses = [
    {value: 'none', label: '-None-'},
    {value: 'open', label: 'Open'},
    {value: 'open_without_routing', label: 'Open without routing'},
    {value: 'quoted', label: 'Quoted'},
    {value: 'closed', label: 'Closed'},
    {value: 'in_review', label: 'In review'},
];
const handleStatusChange = () => {
}

const loadOwners = () => {

}
const handleOwnerChange = () => {

}

export const DealStages = [
    {value: 'none', label: '-None-'},
    {value: 'draft', label: 'Draft'},
    {value: 'no_feedback', label: 'No Feedback'},
    {value: 'negotiation_price', label: 'Negotiation Price'},
    {value: 'negotiation_conditions', label: 'Negotiation Conditions'},
    {value: 'Open', label: 'open'},
    {value: 'Open', label: 'open'},
]

const loadUsers = () => {

}
const handleUpload = () => {
}

export const Currencies = [
    'EUR',
    'USD'
]

export {
    handleUpload,
    loadUsers,
    handleOwnerChange,
    loadOwners,
    handleRFQTypeChange,
    handleStatusChange,
    loadContacts,
    handleContactChange,
    handleRFQSourceChange
};
