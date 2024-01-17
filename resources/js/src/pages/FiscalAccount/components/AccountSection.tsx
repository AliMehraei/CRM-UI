import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../config/api";
import GenerateFields from "../../../components/FormFields/GenerateFields";
import {
    AccountTypes, Contract, Currencies, displayImage, getImageSource, handleCopySelect,
    handleUploadFile, searchOwners,
} from "../../../components/Functions/CommonFunctions";
import {AccountRating, AccountActivities} from "../../../components/Options/SelectOptions";
import Select from "react-select";
import {updateFormData} from "../../../store/accountFormSlice";
import ClearButtonComponent from "../../../components/FormFields/ClearButtonComponent";
import ImageUploadComponent from "../../../components/FormFields/ImageUploadComponent";
import FileUploadComponent from "../../../components/FormFields/FileUploadComponent";
import React from "react";

const AccountSection = ({ action }: any) => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.accountForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Account': {
           
            'Account Name': (
                <input
                    id="account_name"
                    required
                    name="account_name"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={action == 'edit' ? formState.account_name : ''}

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
                defaultValue={
                    action == 'edit' 
                        ? 
                        AccountTypes.find((data) => data.value == formState.account_type)
                        :
                        ''
                    }

            />,
            'Account Code': 
                <input
                id="account_code"
                required
                name="account_code"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={action == 'edit' ? formState.account_name : ''}

            />,
            
           
        },
        '': {
           
            'Description':
            <textarea id="description" rows={3} name="description"
            className="form-textarea flex-1"
            placeholder=""
            defaultValue={action == 'edit' ? formState.description : ''}
            onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}></textarea>,
           
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
