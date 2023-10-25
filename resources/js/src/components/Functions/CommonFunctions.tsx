import api from "../../config/api";
import {EventEmitter} from "events";
import React, {ChangeEvent} from "react";
import Swal from "sweetalert2";


const api_instance = new api();

export const PortalAccess = [
    {value: '-None-', label: '-None-'},
    {value: 'Waiting', label: 'Waiting'},
    {value: 'Confirmed', label: 'Confirmed'},
    {value: 'Rejected', label: 'Rejected'},
]
export const Currencies = [
    {value: 'EUR', label: 'EUR'},
    {value: 'USD', label: 'USD'},
]
export const ApproveChangesOption = [
    {value: '-None-', label: '-None-'},
    {value: 'Yes', label: 'Yes'},
    {value: 'No', label: 'No'},
]
export const StatusOption = [
    {value: 'Draft', label: 'Draft'},
    {value: 'Approved', label: 'Approved'},
    {value: 'Confirmed', label: 'Confirmed'},
    {value: 'Closed', label: 'Closed'},
];
export const Stages = [
    {value: '-None-', label: '-None-'},
    {value: 'Draft', label: 'Draft'},
    {value: 'No Feedback', label: 'No Feedback'},
    {value: 'Negotiation Price', label: 'Negotiation Price'},
    {value: 'Negotiation Conditions', label: 'Negotiation Conditions'},
    {value: 'Open', label: 'Open'},
    {value: 'Lost', label: 'Lost'},
    {value: 'Won', label: 'Won'},
];


export const handleUploadFile = (
    e: ChangeEvent<HTMLInputElement>,
    modelName: string,
    type: string,
    callBack: (response: any) => void) => {

    if (e.target.files && e.target.files.length > 0) {
        api_instance.uploadFile(e.target.files[0], modelName, type).then((response) => {
            callBack(response)
        }).catch();
    }
};

export const handleUploadAttachments = (e: any, modelName: string, modelId: string, callBack: any) => {
    if (e.target.files && e.target.files.length > 0) {
        api_instance.uploadAttachments(e.target.files, modelName, modelId).then((response) => {
            callBack(response)
        }).catch();
    }
};


export const AccountTypes = [
    {value: '-None-', label: '-None-'},
    {value: 'EMS', label: 'EMS'},
    {value: 'ODM (EMS + Development)', label: 'ODM (EMS + Development)'},
    {value: 'OEM', label: 'OEM'},
    {value: 'Reseller', label: 'Reseller'},
    {value: 'System-Integrator It', label: 'System-Integrator It'},
    {value: 'Other', label: 'Other'},
]
export const FirstNameTitles = [
    {value: "-None-", label: "-None-"},
    {value: "Herr", label: "Herr"},
    {value: "Frau", label: "Frau"},
    {value: "Fr.", label: "Fr."},
    {value: "Dr.", label: "Dr."},
    {value: "Prof.", label: "Prof."},

];
export const Contract = [
    {value: 'NDA', label: 'NDA'},
    {value: 'Quality Agreement', label: 'Quality Agreement'},
    {value: 'Logistic Agreement', label: 'Logistic Agreement'},
    {value: 'Other Agreement', label: 'Other Agreement'},

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


export const searchVendorRFQ = async (query: string) => {
    const result = await api_instance.searchVendorRfq({query: query});
    if (result.status) {
        return result.data.data.map((data: any) => ({
            value: data['id'],
            label: (
                <div key={data['id']} className="flex items-center">
                    <div className="text-sm font-bold">{data['vendor_rfq_name']}</div>
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
    const result = await api_instance.loadAdminUsers({'search': e});
    const valField = 'userId';
    const nameField = 'first_name';
    const avatarField = 'avatar';
    const emailField = 'email';
    if (result.status) {
        return result.data.map((user: any) => ({
            value: user[valField],
            label: (
                <div key={user[valField]} className="flex items-center">
                    <img src={displayImage(user[avatarField])} alt="avatar"
                         className="w-8 h-8 mr-2 rounded-full"/>
                    <div>
                        <div className="text-sm font-bold">{user[nameField] + " " + user['last_name']}</div>
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
    const emailField = 'email';
    if (result.status === 200) {
        return result.data.data.map((data: any) => ({
            value: data[valField],
            label: (
                <div key={data[valField]} className="flex items-center">
                    <img src={displayImage(data['image_data'])} alt="avatar"
                         className="w-8 h-8 mr-2 rounded-full"/>
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
                    <img src={displayImage(data['image_data'])} alt="avatar"
                         className="w-8 h-8 mr-2 rounded-full"/>
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
                    <img src={displayImage(data['image_data'])} alt="avatar"
                         className="w-8 h-8 mr-2 rounded-full"/>
                    <div>
                        <div className="text-sm font-bold">{data['first_name']} {data['last_name']}</div>
                        <div className="text-xs text-gray-500">{data['email']}</div>
                    </div>
                </div>
            ),
        }));
    }

};
export const searchManufacturer = async (query: string) => {
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
    return image && image !== '' ? image : '/assets/images/default-placeholder.png';
};


export const searchExcess = async (query: string) => {
    const valField = 'id';
    const nameField = 'excess_name';

    const result = await api_instance.searchExcess({query: query});

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
}

export const getLayout = async (model: string) => {
    return await api_instance.getFormLayout({model: model});
}
export const searchRoles = async (query: string) => {
    const valField = 'id';
    const nameField = 'name';

    const result = await api_instance.searchRoles({query: query});
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
}


export const findApiToCall = (functionName: string) => {
    const api_instance: any = new api();
    const methodToCall = api_instance[functionName];
    if (typeof methodToCall !== 'function') {
        throw new Error(`API not found : ${functionName}`)
    }
    return methodToCall;
}


export const upFirstLetter = (string: string) => {
    return string.replace(/^./, string[0].toUpperCase())
}
export const formattedModelName = (string: string) => {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
export const loadModels = async (inputValue: any, option: any) => {

    if (inputValue.length < 2) return [];
    const apiUrl = option.type_info.api;
    const apiMethod = option.type_info.method;
    const valField = option.type_info.value_field;
    const labelField = option.type_info.label_filed;

    try {
        const result: any = await api_instance.loadApiModelsPost(inputValue, apiUrl, apiMethod);
        if (result.status) {
            return result.data.data.map((model: any) => ({
                value: model[valField],
                label: (
                    <div key={model[valField]} className="flex items-center">
                        <div>
                            <div className="text-sm font-bold">{model[labelField]}</div>
                        </div>
                    </div>
                ),
            }));
        } else {
            console.error('An error occurred while fetching data ', result.message);
            return [];
        }
    } catch (error) {
        console.error('An error occurred while fetching data : ', error);
        return [];
    }
};

export const emitter = new EventEmitter();

export const notifyErrorMessage = async (title: string) => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 5000,
    });

    toast.fire({
        icon: 'error',
        title: title,
    });
}

export const notifySuccess = async (title: string) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })

    Toast.fire({
        icon: 'success',
        title: title
    })
}

export function generateRandomPassword(length = 12) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}

export function copyToClipboard(text: any) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}


export const displayImage = (field: any) =>
    field ? `data:${field['mime']};base64,${field['file']}` : '/assets/images/user-profile.jpeg';


export const displayFile = async (model: any, attribute: any, path: any) => {
    const response = await api_instance.displayFile(model, attribute, path)
    const blob = new Blob([response.data], {type: response.headers['content-type']});
    return window.URL.createObjectURL(blob);

}
