import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
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
