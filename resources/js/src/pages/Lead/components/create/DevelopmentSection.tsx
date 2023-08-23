import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/vendorFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";
const DevelopmentSection = () => {
    const formState = useSelector((state: any) => state.vendorForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };



    const searchVendor = async (query: string) => {
        const valField = 'id';
        const nameField = 'vendor_name';

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
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />),

            'Last Modified': (
                <Flatpickr
                options={{
                    dateFormat: 'Y-m-d ',
                    position: 'auto left',
                }}
                name="last_modified"
                value=""
                className="form-input flex-1"
                />
            ),
            'Created Date': (
                <Flatpickr
                options={{
                    dateFormat: 'Y-m-d ',
                    position: 'auto left',
                }}
                name="created_date"
                value=""
                className="form-input flex-1"
                />
            ),
            
            

        },
        '': {
            'From Panel Side': <input
                id="from_panel_site"
                type="checkbox"
                name="from_panel_site"
                className="form-checkbox"
                onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
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
