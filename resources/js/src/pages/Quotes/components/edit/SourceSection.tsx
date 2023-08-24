import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import Flatpickr from "react-flatpickr";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/quoteFormSlice";
import {loadAvailability, loadVendor} from "../../../../components/Functions/CommonFunctions";

const SourceSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const fields = {
        'Source': {
            'Vendor': <AsyncSelect isMulti={false} id="vendor_id" name="vendor_id"
                                   placeholder="Type at least 2 characters to search..."
                                   loadOptions={loadVendor}
                                   onChange={({value}: any) => {
                                       handleChangeField('product_id', value)
                                   }}
                                   className="flex-1"/>,

            'Availability No': <input id="availability_no" name="availability_no" className="form-input flex-1 "
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Availability Date': <Flatpickr name='availability_date' options={{dateFormat: 'd-m-Y'}}
                                            className="form-input flex-1"
                                            placeholder="MM DD YYYY"
                                            onChange={(dates) => handleChangeField('availability_date', dates[0])}/>,

            'Availability': <AsyncSelect isMulti={false} id="availability_id" name="availability_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadAvailability}
                                         onChange={({value}: any) => {
                                             handleChangeField('availability_id', value)
                                         }}
                                         className="flex-1"/>,

        },
        '': {

            'Cost': <input id="cost" name="cost" className="form-input flex-1 "
                           onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

            'LT vendor': <input id="lt_vendor" name="lt_vendor" className="form-input flex-1 "
                                onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

            'SPQ': <input id="spq" name="spq" className="form-input flex-1 "
                          onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

            'Quantity in Stock': <input id="quantity_in_stock" name="quantity_in_stock"
                                        className="form-input flex-1 "
                                        onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

        }
    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)
}
export default SourceSection
