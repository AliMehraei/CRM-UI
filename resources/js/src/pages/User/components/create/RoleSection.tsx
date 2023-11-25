import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/userFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import AsyncSelect from "react-select/async";
import {searchRFQ, searchRoles} from "../../../../components/Functions/CommonFunctions";

const RoleSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.userForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Roles': {
            'Roles': <AsyncSelect
                    defaultOptions={true}
                isMulti={true}
                id="roles_id"
                placeholder="Type at least 2 characters to search..."
                name="roles_id"
                loadOptions={searchRoles}
                onChange={(values: any) => {
                    handleChangeField('roles_id', values.map((v: any) => v.value))
                }}
                className="flex-1"
            />,

            'Role Id': <input
                id="role_id"
                name="role_id"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Added By Id': <input
                id="added_by_id"
                name="added_by_id"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Profile Id': <input
                id="profile_id"
                name="profile_id"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,


        },
        '': {
            'Reporting To Id': <input
                id="reporting_to_id"
                name="reporting_to_id"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'User Status': <input
                id="user_status"
                name="user_status"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Confirmation Status': <input
                type="checkbox"
                id="confirmation_status"
                name="confirmation_status"
                className="form-checkbox  "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
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

export default RoleSection;
