import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    AccountTypes, Contract, Currencies, getImageSource,
    handleUploadFile, searchOwners,
} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import {updateFormData} from "../../../../store/accountFormSlice";
import ClearButtonComponent from "../../../../components/FormFields/ClearButtonComponent";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";
import FileUploadComponent from "../../../../components/FormFields/FileUploadComponent";

const AccountSection = () => {
    const dispatch = useDispatch();
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

    const rating = [
        {value: "none", label: "-None-"},
        {value: "rfq", label: "RFQ"},
        {value: "quote", label: "Quote"},
        {value: "so", label: "SO"},
        {value: "no_action", label: "No Action"},
        {value: "inactive", label: "Inactive"},

    ]


    const fields = {
        'Account': {
            'Account Image': (
                <ImageUploadComponent formState={formState}
                                      modelName={'account'}
                                      id={'account_image'}
                                      formAttribute={'image'}
                                      updateFormData={updateFormData}
                />
            ),
            'Account Name': (
                <input
                    id="account_name"
                    required
                    name="account_name"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Account Type': <Select
                name="account_type"
                id="account_type"
                placeholder="Select Product Type..."
                options={AccountTypes}
                onChange={({value}: any) => {
                    handleChangeField('account_type', value)
                }}
            />,
            'Contracts': <Select
                isMulti={true}
                name="contract"
                id="contract"
                placeholder="Select Contract Type..."
                options={Contract}
                onChange={(values: any) => {
                    handleChangeField('contract', values.map((v: any) => v.value))
                }}

            />,
            'Contract Attachment': (
                <FileUploadComponent
                    id="contract_attachment"
                    updateFormData={updateFormData}
                    formState={formState}
                    modelName='account'
                    formAttribute='contract_attachment'
                />
            ),
            'Business Account': <input
                id="is_business"
                type="checkbox"
                name="business_account"
                className="form-checkbox"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
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
            'Account Owner': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }}
                    className="flex-1"
                />
            ),
            'PM User': <AsyncSelect
                defaultOptions={true}
                isMulti={false}
                id="pm_user_id"
                placeholder="Type at least 2 characters to search..."
                name="pm_user_id"
                loadOptions={searchOwners}
                onChange={({value}: any) => {
                    handleChangeField('pm_user_id', value)
                }}
                className="flex-1"
            />,
            'Account Activity': <Select id="account_activity" name="account_activity" options={activities}
                                        onChange={({value}: any) => {
                                            handleChangeField('account_activity', value)
                                        }}
                                        className="flex-1"/>,
            'TAM':
                <input
                    id="tam"
                    name="tam"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />,

            'Exchange Rate': <input id="exchange_rate" name="exchange_rate" type="text" value="1"
                                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                    disabled/>,
            'Lead Reference':
                <input
                    id="lead_reference"
                    name="lead_reference"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />,

            'Account Rating': <Select id="rating" name="rating" options={rating}
                                      onChange={({value}: any) => {
                                          handleChangeField('rating', value)
                                      }}
                                      defaultValue={{value: "no_action", label: "No Action"}}
                                      className="flex-1"/>,
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
