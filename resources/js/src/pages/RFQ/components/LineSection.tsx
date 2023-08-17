import {RequiredComponent} from "../../../components/FormFields/RequiredComponent";
import AsyncSelect from "react-select/async";
import {handleOwnerChange, loadOwners} from "./HeaderSection";

const loadProducts = () => {

}
const handleProductChange = () => {

}

const handleLoadAvailability = () => {

};
const loadAvailability = () => {

};
const loadExcess = () => {

};
const handleLoadExcess = () => {

};
const Line = {
    'RFQ Line': {
        'Product Name': <AsyncSelect isMulti={false} id="owner_id" placeholder="Type at least 2 characters to search..."
                                     loadOptions={loadProducts} onChange={handleProductChange} className="flex-1"
                                     required/>,
        'Customer Part Id': <input id="customer_part_id" name="customer_part_id" className="form-input flex-1 "/>,
        'Quantity': <input id="quantity" name="Quantity" className="form-input flex-1 " required/>,
        'Target Price': <input id="target_price" name="target_price" className="form-input flex-1 "/>,
    },
    '': {
        'Alternative Products': <AsyncSelect isMulti={false} id="alternative_products"
                                             placeholder="Type at least 2 characters to search..."
                                             loadOptions={loadProducts} onChange={handleProductChange}
                                             className="flex-1"/>,
        'Availability': <AsyncSelect isMulti={false} id="availability"
                                     placeholder="Type at least 2 characters to search..."
                                     loadOptions={loadAvailability} onChange={handleLoadAvailability}
                                     className="flex-1"/>,
        'Excess': <AsyncSelect isMulti={false} id="availability"
                               placeholder="Type at least 2 characters to search..."
                               loadOptions={loadExcess} onChange={handleLoadExcess}
                               className="flex-1"/>,
        'Special Instructions': <textarea id="special_instructions" name="special_instructions" rows={3}
                                          className="form-textarea"></textarea>,

        'comment': <textarea id="comment" rows={3} name="comment" className="form-textarea"
                             placeholder=""></textarea>,

    }

}

export const LineSection = () => {
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            {Object.entries(Line).map(([sectionTitle, sectionContent], index) => (
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
