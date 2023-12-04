import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {displayImage, handleCopySelect, searchAccounts} from "../../../../components/Functions/CommonFunctions";
import {AccountDoubleCheckStatuses} from "../../../../components/Options/SelectOptions";
import Select from "react-select";
import {updateFormData} from "../../../../store/accountFormSlice";
import React from "react";

const AccountInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.accountForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const doubleCheckStatuses = [
        {value: "none", label: "-None-"},
        {value: "back_to_lead", label: "Back to lead"},
        {value: "converted_to_lead", label: "Converted to lead"},
        {value: "must_be_deleted", label: "Must be deleted"},
    ];


    const fields = {
        'Account Information': {
            'Primary First Name': (<input
                id="primary_first_name"
                name="primary_first_name"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.primary_first_name}
            />),

            'Phone': (
                <input
                    id="phone"
                    required
                    name="phone"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.phone}
                />
            ),
            'Fax': (<input
                id="fax"
                name="fax"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.fax}
            />),
            'Email': (<input
                id="email"
                required
                name="email"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.email}
            />),
            'Website': (<input

                id="website"
                name="website"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.website}

            />),

        },
        '': {
            'Primary Last Name': (<input
                id="primary_last_name"
                name="primary_last_name"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.primary_last_name}

            />),

            'Parent Account': <AsyncSelect
                defaultOptions={true}
                isMulti={false}
                id="parent_account_id"
                placeholder="Type at least 2 characters to search..."
                name="parent_account_id"
                loadOptions={searchAccounts}
                onChange={({value}: any) => {
                    handleChangeField('parent_account_id', value)
                }}
                defaultValue={{
                    value: formState.parent?.id,
                    label: (
                        <div key={formState.parent?.id} className="flex items-center">
                            {formState.parent ? (
                                <>
                                <img
                                    src={displayImage(formState.parent.image)}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />

                            <div>
                                <div
                                    className="text-sm font-bold">{formState.parent?.account_name}</div>
                                <div
                                    className="text-xs text-gray-500">{formState.parent?.email}</div>
                            </div>
                                    <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.parent?.account_name}`)}>
                                        Copy & Select
                                    </button>
                                </>
                                ) : null}
                        </div>
                    ),
                }}
                className="flex-1"
            />,

            'LinkedIn Company':
                <input
                    id="linkedin_company"
                    name="linkedin"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.linkedin}

                />,
            'Account Number':
                <input
                    id="account_number"
                    name="account_number"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.account_number}

                />,

            'Double Check Status': <Select
                id="double_check_status"
                name="double_check_status"
                onChange={({value}: any) => {
                    handleChangeField('double_check_status', value)
                }}
                className="flex-1"
                defaultValue={AccountDoubleCheckStatuses.find((data) => data.value == formState.double_check_status)}
                options={AccountDoubleCheckStatuses}
            />,

            'Child Account': <AsyncSelect
                defaultOptions={true}
                isMulti={false}
                id="child_account_id"
                placeholder="Type at least 2 characters to search..."
                name="child_account_id"
                loadOptions={searchAccounts}
                onChange={({value}: any) => {
                    handleChangeField('child_account_id', value)
                }}
                defaultValue={{
                    value: formState.child?.id,
                    label: (
                        <div key={formState.child?.id} className="flex items-center">
                            {formState.child ? (
                                <>
                                <img
                                    src={displayImage(formState.child.image)}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />

                            <div>
                                <div
                                    className="text-sm font-bold">{formState.child?.account_name}</div>
                                <div
                                    className="text-xs text-gray-500">{formState.child?.email}</div>
                            </div>
                                    <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.child?.account_name}`)}>
                                        Copy & Select
                                    </button>
                                </>
                                ) : null}
                        </div>
                    ),
                }}
                className="flex-1"
            />,
            'Has No Contacts': <input
                id="has_no_contacts"
                type="checkbox"
                name="has_no_contacts"
                className="form-checkbox"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                checked={formState.has_no_contacts}
            />,
            'DCheck': <input
                id="d_check"
                type="checkbox"
                name="d_check"
                className="form-checkbox"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                checked={formState.has_no_contacts}
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

export default AccountInformationSection;
