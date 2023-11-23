import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    AccountTypes, Contract, Currencies, displayImage, getImageSource,
    handleUploadFile, searchOwners,
} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import {updateFormData} from "../../../../store/accountFormSlice";
import ClearButtonComponent from "../../../../components/FormFields/ClearButtonComponent";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";
import FileUploadComponent from "../../../../components/FormFields/FileUploadComponent";

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
            'Account Image': (<ImageUploadComponent formState={formState}
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
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.account_name}

                />
            ),
            'Account Type': <Select
                name="account_type"
                id="account_type"
                placeholder="Select Account Type..."
                options={AccountTypes}
                onChange={({value}: any) => {
                    handleChangeField('account_type', value)
                }}
                defaultValue={AccountTypes.find((data) => data.value == formState.account_type)}

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

                defaultValue={formState.contract
                    ? formState.contract.map((contract: any) => ({
                        value: contract,
                        label: contract
                    }))
                    : []
                }
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
                onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                checked={formState.business_account}
            />,
            'Approved by': <input id="approved_by" name="approved_by_id" type="text"
                                  placeholder="Readonly input here…"
                                  className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                  defaultValue={formState.approved_by?.first_name + " " + formState.approved_by?.last_name}
                                  disabled/>,

            'Currency': <Select id="currency" name="currency" options={Currencies}
                                onChange={({value}: any) => {
                                    handleChangeField('currency', value)
                                }}
                                defaultValue={Currencies.find((data) => data.value == formState.currency)}

                                className="flex-1"/>,
        },
        '': {
            'Account Owner': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    required
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }}
                    defaultValue={{
                        value: formState.owner?.id,
                        label: (
                            <div key={formState.owner?.id} className="flex items-center">
                                {formState.owner ? (
                                    <img
                                        src={displayImage(formState.owner.avatar_data)}
                                        alt="avatar"
                                        className="w-8 h-8 mr-2 rounded-full"
                                    />
                                ) : null}
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                    <div
                                        className="text-xs text-gray-500">{formState.owner?.email}</div>
                                </div>
                            </div>
                        ),
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
                required
                defaultValue={{
                    value: formState.pm_user?.id,
                    label: (
                        <div key={formState.pm_user?.id} className="flex items-center">
                            {formState.pm_user ? (
                                <img
                                    src={displayImage(formState.pm_user.avatar_data)}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />
                            ) : null}
                            <div>
                                <div
                                    className="text-sm font-bold">{formState.pm_user?.first_name + " " + formState.pm_user?.last_name}</div>
                                <div
                                    className="text-xs text-gray-500">{formState.pm_user?.email}</div>
                            </div>
                        </div>
                    ),
                }}
                className="flex-1"
            />,
            'Account Activity': <Select id="account_activity" name="account_activity" options={activities}
                                        onChange={({value}: any) => {
                                            handleChangeField('account_activity', value)
                                        }}
                                        defaultValue={activities.find((data) => data.value == formState.account_activity)}

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
