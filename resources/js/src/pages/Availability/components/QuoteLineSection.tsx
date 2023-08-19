import {RequiredComponent} from "../../../components/FormFields/RequiredComponent";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import {Currencies} from "../../RFQ/components/edit/HeaderSection";

const QuoteLineSection = () => {
    const handleProductChange = () => {

    };
    const loadProducts = () => {

    };
    const Currencies = [
        'EUR',
        'USD'
    ]

    const fields = {
        'Quote Line': {
            'Product name': <AsyncSelect required isMulti={false} id="product_id" name="product_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadProducts} onChange={handleProductChange}
                                         className="flex-1"/>,
            'SKU name': <input id="sku_name" name="sku_name" className="form-input flex-1 "/>,

            'Quantity': <input required id="quantity" name="quantity" className="form-input flex-1 "/>,
            'In Stock Quantity': <input id="in_stock_quantity" name="in_stock_quantity"
                                        className="form-input flex-1 "/>,
            'Currency': <Select id="currency" name="currency" options={Currencies}
                                className="flex-1"/>,
            'Cost': <input id="cost" name="sku_name" className="form-input flex-1 "/>,

            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                    disabled/>,
        },
        '': {
            'Lead Time': <input id="lead_time" name="lead_time" className="form-input flex-1 "/>,
            'Date Code': <input id="date_code" name="date_code" className="form-input flex-1 "/>,
            'SPQ': <input id="spq" name="spq" className="form-input flex-1 "/>,
            'MOQ': <input id="moq" name="moq" className="form-input flex-1 "/>,
            'comment': <input id="comment" name="comment" className="form-input flex-1 "/>,

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

export default QuoteLineSection;
