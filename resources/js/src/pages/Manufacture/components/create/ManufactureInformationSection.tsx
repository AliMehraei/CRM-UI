import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/manufactureFormSlice";
import api from "../../../../config/api";

const ManufactureInformationSection = () => {
    const formState = useSelector((state: any) => state.manufactureForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({field, value}));
    };


    const handleUploadImage = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            api_instance.uploadImage(e.target.files[0]).then((response) => {
                dispatch(updateFormData({ 'manufacture_image': response.data['file_url'] }));
            });
        }
    };

    const loadOwners = () => {

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
                    onChange={(selectedOption) => handleChangeField('owner_id', selectedOption)} // Use 'owner_id' if it's the field name
                    className="flex-1"
                />
            ),
        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                {Object.entries(fields).map(([sectionTitle, sectionContent], index) => (
                    <div key={`${sectionTitle}_${index}`} className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                        <div key={sectionTitle} className="">
                            <div className="text-lg">{sectionTitle ? `${sectionTitle}:` :
                                <div className="mt-10"></div>}</div>
                            {Object.entries(sectionContent).map(([label, inputComponent], index) => (
                                <div key={label} className="mt-4 flex items-center">
                                    <label key={label} className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        {label}
                                        {inputComponent.props.required && <RequiredComponent/>}
                                    </label>
                                    {inputComponent}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ManufactureInformationSection;
