import {RequiredComponent} from "../../../components/FormFields/RequiredComponent";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import Flatpickr from "react-flatpickr";

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
            {Object.entries(fields).map(([sectionTitle, sectionContent], index) => (
                <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                    <div key={sectionTitle} className="">
                        <div className="text-lg">{sectionTitle ? `${sectionTitle}:` :
                            <div className="mt-10"></div>}</div>
                        {Object.entries(sectionContent).map(([label, inputComponent], index) => (
                            <div key={label} className="mt-4 flex items-center">
                                <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
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
    </>)
}
export default SourceSection
