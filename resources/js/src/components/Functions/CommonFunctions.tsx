import api from "../../config/api";

const api_instance = new api();

export const Currencies = [
    {value: 'EUR', label: 'EUR'},
    {value: 'USD', label: 'USD'},
]

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


export const loadOwners = async (e: any) => {
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

export const loadAccounts = async (e: any) => {
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
export const loadOrders = () => {

};

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

export const loadProducts = async () => {
    const result = await api_instance.fetch_data_product();
    if (result.status) {
        const valField = 'id';
        const nameField = 'name';
        const avatarField = 'avatar';
        const emailField = 'email';
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
}
