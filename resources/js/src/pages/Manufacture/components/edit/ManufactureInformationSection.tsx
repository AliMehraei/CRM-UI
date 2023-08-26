import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/manufactureFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile, searchOwners} from "../../../../components/Functions/CommonFunctions";

const ManufactureInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.manufactureForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Manufacture Information': {
            'Manufacture Image': (<input
                    id="manufacture_image"
                    key="manufacture_image"
                    type="file"
                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                    accept="image/*"
                    onChange={(e) => handleUploadFile(e, (response: any) => {
                        dispatch(updateFormData({'image': `${response?.data.data.file_url}`}));
                    })}
                    name="manufactureImage"
                />
            ),
            'Manufacture Name': (
                <input
                    id="name"
                    required
                    name="name"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    value={formState.name}
                />
            ),
            'Octo Api Id': (
                <input
                    id="octo_api_id"
                    name="octo_api_id"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    value={formState.octo_api_id}
                />
            ),
            'Alias Names': (
                <textarea
                    id="alias_names"
                    name="alias_names"
                    rows={3}
                    className="form-textarea flex-1"
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    value={formState.alias_names}

                ></textarea>
            ),
        },
        '': {
            'Active': (
                <input
                    id="is_active"
                    type="checkbox"
                    name="is_active"
                    className="form-checkbox"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                    checked={formState.is_active}
                />
            ),
            'Manufacture Owner': (
                <AsyncSelect
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                    defaultValue={{
                        value: formState.owner?.id,
                        label: (
                            <div key={formState.owner?.id} className="flex items-center">
                                <img src={formState.owner?.avatar} alt="avatar" className="w-8 h-8 mr-2 rounded-full"/>
                                <div>
                                    <div className="text-sm font-bold">{formState.owner?.name}</div>
                                    <div className="text-xs text-gray-500">{formState.owner?.email}</div>
                                </div>
                            </div>
                        ),
                    }}
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
