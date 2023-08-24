import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import Flatpickr from "react-flatpickr";
import GenerateFields from "../../../../components/FormFields/GenerateFields";

const SourceSection = () => {
    
    const handleVendorChange = () => {

    };
    const handleAvailabilityChange = () => {

    };
    const loadAvailability = () => {

    };
    const fields = {
        'Development': {
            'From Our Inventory': <input id="from_our_inventory" type="checkbox"
                                         name="from_our_inventory"
                                         className="form-checkbox"/>,
        },
        '': {
            'Portal Availability Id': <input id="portal_availability_id" name="portal_availability_id"
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
