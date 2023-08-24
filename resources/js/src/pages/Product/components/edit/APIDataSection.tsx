import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import Flatpickr from "react-flatpickr";

const APIDataSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

  
    


    const fields = {
        'Product Information': {
           
            'Octopart ID': (
                <input
                id="octopart_id"
                name="octopart_id"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
               
                />
            ),
            'Octopart URL': (
                <input
                id="octopart_url"
                name="octopart_url"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
               
                />
            ),
            'updateByMouser': (
                <input
                id="update_by_mouser"
                type="checkbox"
                name="update_by_mouser"
                className="form-checkbox"
                onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                />
            ),
            'ZohoBooksID': (
                <input
                id="zoho_books_id"
                name="zoho_books_id"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
               
                />
            ),
            'OP Last Update': (
                <Flatpickr
                options={{
                    dateFormat: 'Y-m-d ',
                    position: 'auto left',
                }}
                name="last_activity_date"
                value=""
                className="form-input flex-1"
                />
            ),
            'OP Failure Message': (
                <input
                id="op_failure_message"
                name="op_failure_message"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
               
                />
            ),
            'Octopart Images': (
                <textarea 
                id="octopart_images" 
                rows={2} 
                name="octopart_images"
                className="form-textarea flex-1"
                placeholder=""
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}></textarea>
            ),
            'Octopart Datasheets': (
                <textarea 
                id="octopart_datasheets" 
                rows={2} 
                name="octopart_datasheets"
                className="form-textarea flex-1"
                placeholder=""
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}></textarea>
            ),
            'Octopart Compliance Documents': (
                <textarea 
                id="octopart_compliance_documents" 
                rows={2} 
                name="octopart_compliance_documents"
                className="form-textarea flex-1"
                placeholder=""
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}></textarea>
            ),
            
        },
        '': {
            
            'Mouser URL': (
                <input
                    id="mouser_url"
                    name="mouser_url"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    // defaultValue={formState.name}
                />
            ),
            'Mouser ID': (
                <input
                    id="mouser_id"
                    name="mouser_id"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    // defaultValue={formState.name}
                />
            ),
            'Mouser Category': (
                <input
                    id="mouser_category"
                    name="mouser_category"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    // defaultValue={formState.name}
                />
            ),
            'M Last Update': (
                <Flatpickr
                options={{
                    dateFormat: 'Y-m-d ',
                    position: 'auto left',
                }}
                name="m_last_update"
                value=""
                className="form-input flex-1"
                />
            ),
            'Product Margin': (
                <input
                    id="product_margin"
                    name="product_margin"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    // defaultValue={formState.name}
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

export default APIDataSection;
