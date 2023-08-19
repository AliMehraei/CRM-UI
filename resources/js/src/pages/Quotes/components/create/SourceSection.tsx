import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import Flatpickr from "react-flatpickr";
import GenerateFields from "../../../../components/FormFields/GenerateFields";

const SourceSection = () => {
    const loadVendors = () => {

    };
    const handleVendorChange = () => {

    };
    const handleAvailabilityChange = () => {

    };
    const loadAvailability = () => {

    };
    const fields = {
        'Source': {
            'Vendor': <AsyncSelect isMulti={false} id="vendor_id" name="vendor_id"
                                   placeholder="Type at least 2 characters to search..."
                                   loadOptions={loadVendors} onChange={handleVendorChange} className="flex-1"/>,
            'Availability No': <input id="availability_no" name="availability_no" className="form-input flex-1 "/>,
            'Availability Date': <Flatpickr options={{dateFormat: 'd-m-Y'}} className="form-input flex-1"
                                            placeholder="MM DD YYYY"/>,
            'Availability': <AsyncSelect isMulti={false} id="availability" name="availability"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadAvailability} onChange={handleAvailabilityChange}
                                         className="flex-1"/>,

        },
        '': {

            'Cost': <input id="cost" name="cost" className="form-input flex-1 "/>,
            'LT vendor': <input id="lt_vendor" name="lt_vendor" className="form-input flex-1 "/>,
            'SPQ': <input id="spq" name="spq" className="form-input flex-1 "/>,
            'Quantity in Stock': <input id="quantity_in_stock" name="quantity_in_stock"
                                        className="form-input flex-1 "/>,
        }
    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)
}
export default SourceSection
