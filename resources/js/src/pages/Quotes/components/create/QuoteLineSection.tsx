import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import AsyncSelect from "react-select/async";
import GenerateFields from "../../../../components/FormFields/GenerateFields";

const QuoteLineSection = () => {
    const loadProducts = () => {

    };
    const handleChangeProduct = () => {

    };
    const fields = {
        'Quote Line': {
            'Product Name': <AsyncSelect isMulti={false} id="product_id" name="product_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadProducts} onChange={handleChangeProduct} className="flex-1"/>,

            'Customer part ID': <input id="rating" name="rating" className="form-input flex-1 "/>
        },
        '': {
            'Quantity': <input id="quantity" name="quantity" className="form-input flex-1 "/>,
            'List Price': <input id="list_price" name="list_price" className="form-input flex-1 "/>,
            'Lead Time': <input id="lead_time" name="lead_time" className="form-input flex-1 "/>,

        }

    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)
}

export default QuoteLineSection
