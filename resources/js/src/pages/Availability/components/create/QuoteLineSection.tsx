import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import {Currencies} from "../../../RFQ/components/edit/HeaderSection";
import GenerateFields from "../../../../components/FormFields/GenerateFields";

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
            <GenerateFields fields={fields}/>

        </div>
    </>)
}

export default QuoteLineSection;
