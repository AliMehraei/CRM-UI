import { RequiredComponent } from "../../../../components/FormFields/RequiredComponent";
import AsyncSelect from "react-select/async";
import { handleOwnerChange, searchOwners } from "./HeaderSection";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import { searchProducts } from "../../../../components/Functions/CommonFunctions";

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
            loadOptions={searchProducts} onChange={handleProductChange} className="flex-1"
            required />,
        'Customer Part Id': <input id="customer_part_id" name="customer_part_id" className="form-input flex-1 " />,
        'Quantity': <input id="quantity" name="Quantity" className="form-input flex-1 " required />,
        'Target Price': <input id="target_price" name="target_price" className="form-input flex-1 " />,
    },
    '': {
        'Alternative Products': <AsyncSelect isMulti={false} id="alternative_products"
            placeholder="Type at least 2 characters to search..."
            loadOptions={searchProducts} onChange={handleProductChange}
            className="flex-1" />,
        'Availability': <AsyncSelect isMulti={false} id="availability"
            placeholder="Type at least 2 characters to search..."
            loadOptions={loadAvailability} onChange={handleLoadAvailability}
            className="flex-1" />,
        'Excess': <AsyncSelect isMulti={false} id="availability"
            placeholder="Type at least 2 characters to search..."
            loadOptions={loadExcess} onChange={handleLoadExcess}
            className="flex-1" />,
        'Special Instructions': <textarea id="special_instructions" name="special_instructions" rows={3}
            className="form-textarea flex-1"></textarea>,

        'comment': <textarea id="comment" rows={3} name="comment" className="form-textarea flex-1"
            placeholder=""></textarea>,

    }

}

export const LineSection = () => {
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields} />

        </div>
    </>)
}
