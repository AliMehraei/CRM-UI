import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/leadFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";
const DevelopmentSection = () => {
    const formState = useSelector((state: any) => state.leadForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };



    const searchVendor = async (query: string) => {
        const valField = 'id';
        const nameField = 'lead_name';

        const result = await api_instance.searchVendor({query: query});

        if (result.status) {
            return result.data.data.map((data: any) => ({
                value: data[valField],
                label: (
                    <div key={data[valField]} className="flex items-center">
                        <div>
                            <div className="text-sm font-bold">{data[nameField]}</div>
                        </div>
                    </div>
                ),
            }));
        }
    };

    const fields = {
        'Development': {
            'Imported Qualification Status': (<input
                id="imported_qualification_status"
                name="imported_qualification_status"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.imported_qualification_status}
            />),

            'Last Modified': (
                <Flatpickr
                    name="last_modified"


                    options={{
                        dateFormat: 'Y-m-d',
                        position: 'auto left',
                        defaultDate: formState.last_modified ? new Date(formState.last_modified) : null as any,
                    }}
                    className="form-input flex-1"
                    value={formState.last_modified ? new Date(formState.last_modified) : ''}
                    onChange={(_,dateString) => handleChangeField('last_modified', dateString)} // Update the field value on change
                    defaultValue={formState.last_modified}
                />
            ),
            'Created Date': (
                <Flatpickr

                name="created_date"
                options={{
                    dateFormat: 'Y-m-d',
                    position: 'auto left',
                    defaultDate: formState.created_date ? new Date(formState.created_date) : null as any,
                }}
                className="form-input flex-1"
                value={formState.created_date ? new Date(formState.created_date) : ''}
                onChange={(_,dateString) => handleChangeField('created_date', dateString)} // Update the field value on change
                defaultValue={formState.created_date}
                />
            ),



        },
        '': {
            'From Panel Side': <input
                id="from_panel_site"
                type="checkbox"
                name="from_panel_site"
                className="form-checkbox"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                checked={formState.from_panel_site}
            />,

        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )

}

export default DevelopmentSection;
