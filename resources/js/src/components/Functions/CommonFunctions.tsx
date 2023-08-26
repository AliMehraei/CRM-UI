import api from "../../config/api";

const api_instance = new api();

export const PortalAccess = [
    {value: 'none', label: '-None-'},
    {value: 'waiting', label: 'Waiting'},
    {value: 'confirmed', label: 'Confirmed'},
    {value: 'rejected', label: 'Rejected'},
]
export const Currencies = [
    {value: 'EUR', label: 'EUR'},
    {value: 'USD', label: 'USD'},
]
export const ApproveChangesOption = [
    {value: 'none', label: '-None-'},
    {value: 'yes', label: 'Yes'},
    {value: 'no', label: 'No'},
]
export const StatusOption = [
    {value: 'draft', label: 'Draft'},
    {value: 'approved', label: 'Approved'},
    {value: 'confirmed', label: 'Confirmed'},
    {value: 'closed', label: 'Closed'},
];
export const Stages = [
    {value: 'none', label: '-None-'},
    {value: 'draft', label: 'Draft'},
    {value: 'no_feedback', label: 'No Feedback'},
    {value: 'negotiation_price', label: 'Negotiation Price'},
    {value: 'negotiation_conditions', label: 'Negotiation Conditions'},
    {value: 'open', label: 'Open'},
    {value: 'lost', label: 'Lost'},
    {value: 'won', label: 'Won'},
];


export const handleUploadFile = (e: any, callBack: any) => {
    if (e.target.files && e.target.files.length > 0) {
        api_instance.uploadFile(e.target.files[0]).then((response) => {
            callBack(response)
        }).catch();
    }
};
export const AccountTypes = [
    {value: 'none', label: '-None-'},
    {value: 'ems', label: 'EMS'},
    {value: 'odm', label: 'ODM(EMS + Development)'},
    {value: 'oem', label: 'OEM'},
    {value: 'reseller', label: 'Reseller'},
    {value: 'systemintegrator_it', label: 'System-Integrator It'},
    {value: 'other', label: 'Other'},
]

export const Contract = [
    {value: 'nda', label: 'NDA'},
    {value: 'quality_agreement', label: 'Quality Agreement'},
    {value: 'logistic_agreement', label: 'Logistic Agreement'},
    {value: 'other_agreement', label: 'Other Agreement'},

];

export const searchProducts = async (query: string) => {
    const result = await api_instance.searchProduct({query: query});
    if (result.status) {
        const valField = 'id';
        const nameField = 'product_name';
        return result.data.data.map((user: any) => ({
            value: user[valField],
            label: (
                <div key={user[valField]} className="flex items-center">
                    <div className="text-sm font-bold">{user[nameField]}</div>
                </div>
            ),
        }));
    }
}

export const searchRFQ = async (query: string) => {
    const result = await api_instance.searchRfq({query: query});
    if (result.status) {
        return result.data.data.map((data: any) => ({
            value: data['id'],
            label: (
                <div key={data['id']} className="flex items-center">
                    <div className="text-sm font-bold">{data['rfq_name']}</div>
                </div>
            ),
        }));
    }
}

export const searchDeals = async (query: string) => {
    const result = await api_instance.searchDeal({query: query}); // TODO : fix this to deal
    if (result.status) {
        return result.data.data.map((data: any) => ({
            value: data['id'],
            label: (
                <div key={data['id']} className="flex items-center">
                    <div className="text-sm font-bold">{data['deal_name']}</div>
                </div>
            ),
        }));
    }
}

export const searchVendor = async (query: string) => {
    const result = await api_instance.searchVendor({query: query});
    if (result.status) {
        return result.data.data.map((data: any) => ({
            value: data['id'],
            label: (
                <div key={data['id']} className="flex items-center">
                    <div className="text-sm font-bold">{data['vendor_name']}</div>
                </div>
            ),
        }));
    }
}
export const searchAvailability = async (query: string) => {
    const result = await api_instance.searchAvailability({query: query});
    if (result.status) {
        return result.data.data.map((data: any) => ({
            value: data['id'],
            label: (
                <div key={data['id']} className="flex items-center">
                    <div className="text-sm font-bold">{data['availability_name']}</div>
                </div>
            ),
        }));
    }
}
export const searchQuote = async (query: string) => {
    const result = await api_instance.searchQuote({query: query});
    if (result.status) {
        return result.data.data.map((data: any) => ({
            value: data['id'],
            label: (
                <div key={data['id']} className="flex items-center">
                    <div className="text-sm font-bold">{data['subject']}</div>
                </div>
            ),
        }));
    }
}
export const searchInvoice = async (query: string) => {
    const result = await api_instance.searchInvoice({query: query});
    if (result.status) {
        return result.data.data.map((data: any) => ({
            value: data['id'],
            label: (
                <div key={data['id']} className="flex items-center">
                    <div className="text-sm font-bold">{data['subject']}</div>
                </div>
            ),
        }));
    }
}
export const searchPurchaseOrder = async (query: string) => {
    const result = await api_instance.searchPurchaseOrder({query: query});
    if (result.status) {
        return result.data.data.map((data: any) => ({
            value: data['id'],
            label: (
                <div key={data['id']} className="flex items-center">
                    <div className="text-sm font-bold">{data['subject']}</div>
                </div>
            ),
        }));
    }
}
export const loadAvailability = async (query: string) => {
    const result = await api_instance.searchAvailability({query: query});
    if (result.status) {
        return result.data.data.map((data: any) => ({
            value: data['id'],
            label: (
                <div key={data['id']} className="flex items-center">
                    <div className="text-sm font-bold">{data['availability_name']}</div>
                </div>
            ),
        }));
    }
}


export const searchOwners = async (e: any) => {
    const result = await api_instance.loadAdminUsers(e);
    const valField = 'id';
    const nameField = 'name';
    const avatarField = 'avatar';
    const emailField = 'email';
    if (result.status) {
        return result.data.map((user: any) => ({
            value: user[valField],
            label: (
                <div key={user[valField]} className="flex items-center">
                    <img src={user[avatarField]} alt="avatar" className="w-8 h-8 mr-2 rounded-full"/>
                    <div>
                        <div className="text-sm font-bold">{user[nameField]}</div>
                        <div className="text-xs text-gray-500">{user[emailField]}</div>
                    </div>
                </div>
            ),
        }));
    }
};

export const searchAccounts = async (e: any) => {
    const result = await api_instance.searchAccount({query: e});
    const valField = 'id';
    const nameField = 'account_name';
    const imageField = 'image';
    const emailField = 'email';
    if (result.status === 200) {
        return result.data.data.map((data: any) => ({
            value: data[valField],
            label: (
                <div key={data[valField]} className="flex items-center">
                    <img src={data[imageField]} alt="avatar" className="w-8 h-8 mr-2 rounded-full"/>
                    <div>
                        <div className="text-sm font-bold">{data[nameField]}</div>
                        <div className="text-xs text-gray-500">{data[emailField]}</div>
                    </div>
                </div>
            ),
        }));
    }

};
export const searchLead = async (e: any) => {
    const result = await api_instance.searchLead({query: e});
    const valField = 'id';
    if (result.status === 200) {
        return result.data.data.map((data: any) => ({
            value: data[valField],
            label: (
                <div key={data[valField]} className="flex items-center">
                    <img src={data['image']} alt="avatar" className="w-8 h-8 mr-2 rounded-full"/>
                    <div>
                        <div className="text-sm font-bold">{data['company']}</div>
                        <div className="text-xs text-gray-500">{data['email']}</div>
                    </div>
                </div>
            ),
        }));
    }

};
export const searchContacts = async (e: any) => {
    const result = await api_instance.searchContact({query: e});
    const valField = 'id';
    if (result.status === 200) {
        return result.data.data.map((data: any) => ({
            value: data[valField],
            label: (
                <div key={data[valField]} className="flex items-center">
                    <img src={data['image']} alt="avatar" className="w-8 h-8 mr-2 rounded-full"/>
                    <div>
                        <div className="text-sm font-bold">{data['first_name']} {data['last_name']}</div>
                        <div className="text-xs text-gray-500">{data['email']}</div>
                    </div>
                </div>
            ),
        }));
    }

};
export const searchManufacture = async (query: string) => {
    const valField = 'id';
    const nameField = 'name';

    const result = await api_instance.searchManufacturer({query: query});

    if (result.status) {
        return result.data.data.map((data: any) => ({
            value: data[valField],
            label: (
                <div key={data[valField]} className="flex items-center">
                    <div>
                        <div className="text-sm font-bold">{data[nameField]}</div>
                    </div>
                </div>
            ),
        }));
    }
};
export const searchSalesOrder = async (query: string) => {
    const valField = 'id';
    const nameField = 'subject';

    const result = await api_instance.searchSalesOrder({query: query});

    if (result.status) {
        return result.data.data.map((data: any) => ({
            value: data[valField],
            label: (
                <div key={data[valField]} className="flex items-center">
                    <div>
                        <div className="text-sm font-bold">{data[nameField]}</div>
                    </div>
                </div>
            ),
        }));
    }
};

export const getImageSource = (image: string) => {
    return image && image !== '' ? image : 'https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png'; // todo : change this
};
