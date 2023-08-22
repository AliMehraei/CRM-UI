import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {loadAccounts} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import {updateFormData} from "../../../../store/accountFormSlice";

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
        'Account': {
            'Primary First Name': (<input
                id="primary_first_name"
                name="primary_first_name"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.primary_first_name}
            />),

            'Phone': (
                <input
                    id="phone"
                    required
                    name="phone"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.phone}
                />
            ),
            'Fax': (<input
                id="fax"
                name="fax"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.fax}
            />),
            'Email': (<input
                id="email"
                required
                name="email"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.email}
            />),
            'Website': (<input
                required
                id="website"
                name="website"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.website}

            />),

        },
        '': {
            'Primary Last Name': (<input
                id="primary_last_name"
                name="primary_last_name"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.primary_last_name}

            />),

            'Parent Account': <AsyncSelect
                isMulti={false}
                id="parent_account_id"
                placeholder="Type at least 2 characters to search..."
                name="parent_account_id"
                loadOptions={loadAccounts}
                onChange={({value}: any) => {
                    handleChangeField('parent_account_id', value)
                }} // Use 'owner_id' if it's the field name
                className="flex-1"
            />,

            'LinkedIn Company':
                <input
                    id="linkedin_company"
                    name="linkedin"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.linkedin}

                />,
            'Account Number':
                <input
                    id="account_number"
                    name="account_number"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.account_number}
                />,

            'Double Check Status': <Select id="double_check_status"
                                           name="double_check_status"
                                           onChange={({value}: any) => {
                                               handleChangeField('double_check_status', value)
                                           }} // Use 'owner_id' if it's the field name
                                           className="flex-1"
                                           options={doubleCheckStatuses}
            />,

            'Child Account': <AsyncSelect
                isMulti={false}
                id="child_account_id"
                placeholder="Type at least 2 characters to search..."
                name="child_account_id"
                loadOptions={loadAccounts}
                onChange={({value}: any) => {
                    handleChangeField('child_account_id', value)
                }} // Use 'owner_id' if it's the field name
                className="flex-1"
            />,
            'Has No Contacts': <input
                id="has_no_contacts"
                type="checkbox"
                name="has_no_contacts"
                className="form-checkbox"
                onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                defaultValue={formState.has_no_contacts}
            />,
            'DCheck': <input
                id="d_check"
                type="checkbox"
                name="d_check"
                className="form-checkbox"
                onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                defaultValue={formState.has_no_contacts}
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
