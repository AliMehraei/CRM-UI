import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import AsyncSelect from "react-select/async";

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

export default QuoteLineSection
