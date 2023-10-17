import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    AccountTypes, Contract, Currencies, getImageSource,
    handleUploadFile, searchOwners,
} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import {updateFormData} from "../../../../store/accountFormSlice";
import ClearButtonComponent from "../../../../components/FormFields/ClearButtonComponent";

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
            'Account Image': (<div className="">
                    <div className="flex">
                        <input
                            id="account_image"
                            key="account_image"
                            type="file"
                            className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                            accept="image/*"
                            onChange={(e) => handleUploadFile(e, (response: any) => {
                                dispatch(updateFormData({'image': `${response?.data.data.file_url}`}));
                            })}
                            name="account_image"
                        />
                        <ClearButtonComponent callBack={() => {
                            const fileInput = document.getElementById('account_image') as HTMLInputElement | null;
                            if (fileInput) {
                                fileInput.value = '';
                                fileInput.dispatchEvent(new Event('change', {bubbles: true}));
                            }
                            dispatch(updateFormData({'image': null}));
                        }}/>
                    </div>
                    <img
                        id="manufacturer_image_preview"
                        src={getImageSource(formState.image || formState.oldImage)}
                        alt="img" className="mt-4 w-20 h-20 rounded"/>
                </div>
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
                name="contract"
                id="contract"
                placeholder="Select Contract..."
                options={Contract}
                onChange={({value}: any) => {
                    handleChangeField('contract', value)
                }}
                defaultValue={Contract.find((data) => data.value == formState.contract)}

            />,
            'Contract Attachment': (
                <div className="flex">
                    <input
                        id="contract_attachment"
                        key="contract_attachment"
                        type="file"
                        className="form-input mr-1 file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                        accept="image/*"
                        onChange={(e) => handleUploadFile(e, (response: any) => {
                            dispatch(updateFormData({
                                field: 'contract_attachment',
                                value: `${response?.data.data.file_url}`
                            }));
                        })}
                        name="contract_attachment"
                    />
                    <a className="btn btn-outline-primary" href={formState.contract_attachment}
                       target="_blank">Download</a>
                </div>
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
                    isMulti={false}
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
                                        src={formState.owner.avatar ?? '/assets/images/user-profile.jpeg'}
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
                                    src={formState.pm_user.image ?? '/assets/images/user-profile.jpeg'}
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
