import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    AccountTypes, Contract, Currencies,
    handleUploadFile, loadOwners,
} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import {updateFormData} from "../../../../store/accountFormSlice";

const AccountSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.accountForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const activities = [
        {value: "none", label: "-None-"},
        {value: "no_activity", label: "No Activity"},
        {value: "more_1_year", label: "> 1 year Activity"},
        {value: "more_1_month", label: "> 1 month Activity"},
        {value: "regular_activity", label: "Regular Activity"},

    ];


    const fields = {
        'Account': {
            'Account Image': (<input
                    id="account_image"
                    key="account_image"
                    type="file"
                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                    accept="image/*"
                    onChange={(e) => handleUploadFile(e, (response: any) => {
                        dispatch(updateFormData({field: 'image', value: `${response?.data.data.file_url}`}));
                    })}
                    name="manufactureImage"

                />
            ),
            'Account Name': (
                <input
                    id="name"
                    required
                    name="name"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.account_name}

                />
            ),
            'Account Type': <Select
                name="deal_stage"
                id="deal_stage"
                placeholder="Select Product Type..."
                options={AccountTypes}
                onChange={({value}: any) => {
                    handleChangeField('deal_stage', value)
                }}
            />,
            'Contracts': <Select
                name="contract_id"
                id="contract_id"
                placeholder="Select Product Type..."
                options={Contract}
                onChange={({value}: any) => {
                    handleChangeField('contract_id', value)
                }}
            />,
            'Contract Attachment': (<input
                id="contract_attachment"
                key="contract_attachment"
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                accept="image/*"
                onChange={(e) => handleUploadFile(e, (response: any) => {
                    dispatch(updateFormData({field: 'contract_attachment', value: `${response?.data.data.file_url}`}));
                })}
                name="contract_attachment"
            />),
            'Business Account': <input
                id="is_business"
                type="checkbox"
                name="business_account"
                className="form-checkbox"
                onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                checked={formState.business_account}
            />,
            'Approved by': <input id="approved_by" name="approved_by_id" type="text" value="None"
                                  placeholder="Readonly input here…"
                                  className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                  disabled/>,

            'Currency': <Select id="currency" name="currency" options={Currencies}
                                onChange={({value}: any) => {
                                    handleChangeField('currency', value)
                                }}
                                className="flex-1"/>,
        },
        '': {
            'Manufacture Owner': (
                <AsyncSelect
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={loadOwners}
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                />
            ),
            'PM User': <AsyncSelect
                isMulti={false}
                id="pm_user_id"
                placeholder="Type at least 2 characters to search..."
                name="pm_user_id"
                loadOptions={loadOwners}
                onChange={({value}: any) => {
                    handleChangeField('pm_user_id', value)
                }} // Use 'owner_id' if it's the field name
                className="flex-1"
            />,
            'Account Activity': <Select id="account_activity" name="account_activity" options={activities}
                                        onChange={({value}: any) => {
                                            handleChangeField('activity', value)
                                        }}
                                        className="flex-1"/>,
            'TAM':
                <input
                    id="tam"
                    name="tam"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.tam}
                />,

            'Exchange Rate': <input id="exchange_rate" name="exchange_rate" type="text" value="1"
                                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                    disabled/>,
            'Lead Reference':
                <input
                    id="lead_reference"
                    name="lead_reference"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.lead_reference}

                />,

        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>
            </div>
        </>
    )
}

export default AccountSection;
