import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/manufactureFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";

const ManufactureInformationSection = () => {
    const formState = useSelector((state: any) => state.manufactureForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({field, value}));
    };


    const handleUploadImage = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            api_instance.uploadFile(e.target.files[0]).then((response) => {
                dispatch(updateFormData({'manufacture_image': `${response?.data.data.file_url}`}));
            }).catch();
        }
    };

    const loadOwners = async (e: any) => {
        const result = await api_instance.loadAdminUsers(e);
        const valField = 'id';
        const nameField = 'name';
        const avatarField = 'avatar';
        const emailField = 'email';
        if (result.status) {
            return result.data.map((user: any) => ({
                value: user[valField],
                label: (
                    <div key={user[valField]} className="flex items-center">
                        <img src={user[avatarField]} alt="avatar" className="w-8 h-8 mr-2 rounded-full"/>
                        <div>
                            <div className="text-sm font-bold">{user[nameField]}</div>
                            <div className="text-xs text-gray-500">{user[emailField]}</div>
                        </div>
                    </div>
                ),
            }));
        }
    };


    const fields = {
        'Manufacture Information': {
            'Manufacture Image': (<input
                    id="manufacture_image"
                    key="manufacture_image"
                    type="file"
                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                    accept="image/*"
                    onChange={handleUploadImage}
                    name="manufactureImage"
                />
            ),
            'Manufacture Name': (
                <input
                    id="manufacture_name"
                    required
                    name="manufacture_name"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Octo Api Id': (
                <input
                    id="octo_api_id"
                    name="octo_api_id"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Alias Names': (
                <textarea
                    id="alias_names"
                    name="alias_names"
                    rows={3}
                    className="form-textarea flex-1"
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                ></textarea>
            ),
        },
        '': {
            'Active': (
                <input
                    id="active"
                    type="checkbox"
                    name="active"
                    className="form-checkbox"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                />
            ),
            'Manufacture Owner': (
                <AsyncSelect
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    loadOptions={loadOwners}
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                />
            ),
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

export default ManufactureInformationSection;
