import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/manufacturerFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import { searchOwners} from "../../../../components/Functions/CommonFunctions";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";

const ManufacturerInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.manufacturerForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Manufacturer Information': {
            'Manufacturer Image': (
                <ImageUploadComponent formState={formState}
                                      modelName={'manufacturer'}
                                      id={'manufacturer_image'}
                                      formAttribute={'image'}
                                      updateFormData={updateFormData}
                />
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
                    defaultOptions={true}
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }}
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

export default ManufacturerInformationSection;
