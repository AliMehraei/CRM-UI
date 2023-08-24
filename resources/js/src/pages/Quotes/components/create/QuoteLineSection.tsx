import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import AsyncSelect from "react-select/async";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {updateFormData} from "../../../../store/quoteFormSlice";
import {loadProducts} from "../../../../components/Functions/CommonFunctions";
import {useDispatch} from "react-redux";

const QuoteLineSection = () => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const fields = {
        'Quote Line': {
            'Product Name': <AsyncSelect isMulti={false} id="product_id" name="product_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadProducts}
                                         onChange={({value}: any) => {
                                             handleChangeField('product_id', value)
                                         }}
                                         className="flex-1"/>,

            'Customer part ID': <input id="customer_part_id" name="customer_part_id" className="form-input flex-1 "
                                       onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />
        },
        '': {
            'Quantity': <input id="quantity" name="quantity" className="form-input flex-1 "
                               onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'List Price': <input id="list_price" name="list_price" className="form-input flex-1 "
                                 onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Lead Time': <input id="lead_time" name="lead_time" className="form-input flex-1 "
                                onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

        }

    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)
}

export default QuoteLineSection
