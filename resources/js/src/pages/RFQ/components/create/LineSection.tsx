import AsyncSelect from "react-select/async";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {searchAvailability, searchExcess, searchProducts} from "../../../../components/Functions/CommonFunctions";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/accountFormSlice";


export const LineSection = () => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const fields = {
        'RFQ Line': {
            'Product Name': <AsyncSelect isMulti={false} id="product_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={searchProducts}
                                         onChange={({value}: any) => {
                                             handleChangeField('product_id', value)
                                         }}
                                         className="flex-1"
                                         required/>,

            'Customer Part Id': <input id="customer_part_id" name="customer_part_id" className="form-input flex-1 "
                                       onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

            'Quantity': <input id="quantity" name="Quantity" className="form-input flex-1 "
                               onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                               required/>,

            'Target Price': <input id="target_price" name="target_price"
                                   onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                   className="form-input flex-1 "/>,
        },
        '': {
            'Alternative Products': <AsyncSelect id="alternative_products" name="alternative_products"
                                                 placeholder="Type at least 2 characters to search..."
                                                 loadOptions={searchProducts}
                                                 onChange={({value}: any) => {
                                                     handleChangeField('alternative_products', value)
                                                 }}
                                                 className="flex-1"/>,
            'Availability': <AsyncSelect isMulti={false} id="availability" name="availability_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={searchAvailability}
                                         onChange={({value}: any) => {
                                             handleChangeField('availability_id', value)
                                         }}
                                         className="flex-1"/>,
            'Excess': <AsyncSelect isMulti={false} id="excess_id"
                                   name="excess_id"
                                   placeholder="Type at least 2 characters to search..."
                                   loadOptions={searchExcess}
                                   onChange={({value}: any) => {
                                       handleChangeField('excess_id', value)
                                   }}
                                   className="flex-1"/>,
            'Special Instructions': <textarea id="special_instructions" name="special_instructions" rows={3}
                                              onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                              className="form-textarea flex-1"></textarea>,

            'comment': <textarea id="comment" rows={3} name="comment" className="form-textarea flex-1"
                                 onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                 placeholder=""></textarea>,

        }

    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)
}