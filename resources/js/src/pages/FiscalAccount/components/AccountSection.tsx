import { useDispatch, useSelector } from "react-redux";
import api from "../../../config/api";
import GenerateFields from "../../../components/FormFields/GenerateFields";
import Select from "react-select";
import { updateFormData } from "../../../store/fiscalAccountFormSlice";
import React from "react";
import { FiscalAccountType } from "../../../components/Options/SelectOptions";
import {
    searchFiscalAccount,
    searchOwners,
} from "../../../components/Functions/CommonFunctions";
import AsyncSelect from "react-select/async";

const AccountSection = ({ action }: any) => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.fiscalAccountForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };

    const fields = {
        Account: {
            "Account Name": (
                <input
                    id="account_name"
                    required
                    name="account_name"
                    className="form-input flex-1 "
                    onChange={(e: any) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                    defaultValue={
                        action == "edit" ? formState.account_name : ""
                    }
                />
            ),
            "Account Type": (
                <Select
                    name="account_type"
                    id="account_type"
                    placeholder="Select Account Type..."
                    options={FiscalAccountType}
                    onChange={({ value }: any) => {
                        handleChangeField("account_type", value);
                    }}
                    defaultValue={
                        action == "edit"
                            ? FiscalAccountType.find(
                                  (data) => data.value == formState.account_type
                              )
                            : ""
                    }
                />
            ),
            "Account Code": (
                <input
                    id="account_code"
                    required
                    name="account_code"
                    className="form-input flex-1 "
                    onChange={(e: any) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                    defaultValue={
                        action == "edit" ? formState.account_name : ""
                    }
                />
            ),
            "Is Active": (
                <input
                    id="is_Active"
                    type="checkbox"
                    name="is_Active"
                    className="form-checkbox"
                    defaultChecked
                    onChange={(e: any) =>
                        handleChangeField(e.target.name, e.target.checked)
                    }
                />
            ),
        },
        "": {
            "Account Owner": (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="owner_id"
                    name="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    loadOptions={searchOwners}
                    onChange={({ value }: any) => {
                        handleChangeField("owner_id", value);
                    }}
                    className="flex-1"
                />
            ),
            "Parent Account": (
                <AsyncSelect
                    isMulti={false}
                    id="parent_account_id"
                    defaultOptions={true}
                    placeholder="Type at least 2 characters to search..."
                    name="parent_account_id"
                    loadOptions={searchFiscalAccount}
                    onChange={({ value }: any) => {
                        handleChangeField("parent_account_id", value.toString());
                    }}
                    className="flex-1"
                />
            ),
            Description: (
                <textarea
                    id="description"
                    rows={3}
                    name="description"
                    className="form-textarea flex-1"
                    placeholder=""
                    defaultValue={action == "edit" ? formState.description : ""}
                    onChange={(e: any) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                ></textarea>
            ),
        },
    };
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields} />
            </div>
        </>
    );
};

export default AccountSection;
