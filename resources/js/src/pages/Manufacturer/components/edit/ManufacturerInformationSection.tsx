import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../store/manufacturerFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import { getImageSource, handleUploadFile, searchOwners } from "../../../../components/Functions/CommonFunctions";
import ClearButtonComponent from "../../../../components/FormFields/ClearButtonComponent";

const ManufacturerInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.manufacturerForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };


    const fields = {
        'Manufacturer Information': {
            'Manufacturer Image': (<div className="">
                <div className="flex">
                    <input
                        id="manufacturer_image"
                        key="manufacturer_image"
                        type="file"
                        className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                        accept="image/*"
                        onChange={(e) => handleUploadFile(e, (response: any) => {
                            dispatch(updateFormData({ 'image': `${response?.data.data.file_url}` }));
                        })}
                        name="manufacturerImage"
                    />
                    <ClearButtonComponent callBack={() => {
                        const fileInput = document.getElementById('manufacturer_image') as HTMLInputElement | null;
                        if (fileInput) {
                            fileInput.value = '';
                            fileInput.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                        dispatch(updateFormData({ 'image': null }));
                    }} />
                </div>
                <img
                    id="manufacturer_image_preview"
                    src={getImageSource(formState.image || formState.oldImage)}
                    alt="img" className="mt-4 w-20 h-20 rounded" />
            </div>
            ),
            'Manufacturer Name': (
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
            'Manufacturer Owner': (
                <AsyncSelect
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={searchOwners}
                    onChange={({ value }: any) => {
                        handleChangeField('owner_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.owner?.id,
                        label: (
                            <div key={formState.owner?.id} className="flex items-center">
                                <img src={formState.owner?.avatar ?? '/assets/images/user-profile.jpeg'} alt="avatar" className="w-8 h-8 mr-2 rounded-full" />
                                <div>
                                    <div className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
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
                <GenerateFields fields={fields} />
            </div>
        </>
    )
}

export default ManufacturerInformationSection;
