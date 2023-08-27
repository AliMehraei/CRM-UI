import AsyncSelect from "react-select/async";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {searchAvailability, searchExcess, searchProducts} from "../../../../components/Functions/CommonFunctions";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/accountFormSlice";


export const LineSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.rfqFormSlice);

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
                                         defaultValue={{
                                             value: formState.product?.id,
                                             label: (
                                                 <div key={formState.product?.id} className="flex items-center">
                                                     <div className="text-sm font-bold">{formState.product?.product_name}</div>
                                                 </div>
                                             ),
                                         }}
                                         className="flex-1"
                                         required/>,

            'Customer Part Id': <input id="customer_part_id" name="customer_part_id" className="form-input flex-1 "
                                       defaultValue={formState.customer_part_id}
                                       onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

            'Quantity': <input id="quantity" name="Quantity" className="form-input flex-1 "
                               defaultValue={formState.quantity}
                               onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                               required/>,

            'Target Price': <input id="target_price" name="target_price"
                                   defaultValue={formState.target_price}
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
                                                 defaultValue={{
                                                     value: formState.contact?.id,
                                                     label: (
                                                         <div key={formState.contact?.id} className="flex items-center">
                                                             <img src={formState.contact?.image} alt="avatar"
                                                                  className="w-8 h-8 mr-2 rounded-full"/>
                                                             <div>
                                                                 <div
                                                                     className="text-sm font-bold">{formState.contact?.name}</div>
                                                                 <div
                                                                     className="text-xs text-gray-500">{formState.contact?.email}</div>
                                                             </div>
                                                         </div>
                                                     ),
                                                 }}
                                                 className="flex-1"/>,  //TODO : fix this for default value
            'Availability': <AsyncSelect isMulti={false} id="availability" name="availability_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={searchAvailability}
                                         onChange={({value}: any) => {
                                             handleChangeField('availability_id', value)
                                         }}
                                         defaultValue={{
                                             value: formState.contact?.id,
                                             label: (
                                                 <div key={formState.availability?.id} className="flex items-center">
                                                     <div
                                                         className="text-sm font-bold">{formState.availability?.availability_name}</div>
                                                 </div>
                                             ),
                                         }}
                                         className="flex-1"/>,
            'Excess': <AsyncSelect isMulti={false} id="excess_id"
                                   name="excess_id"
                                   placeholder="Type at least 2 characters to search..."
                                   loadOptions={searchExcess}
                                   onChange={({value}: any) => {
                                       handleChangeField('excess_id', value)
                                   }}
                                   defaultValue={{
                                       value: formState.excess?.id,
                                       label: (
                                           <div key={formState.excess?.id} className="flex items-center">
                                               <div
                                                   className="text-sm font-bold">{formState.excess?.excess_name}</div>
                                           </div>
                                       ),
                                   }}
                                   className="flex-1"/>,
            'Special Instructions': <textarea id="special_instructions" name="special_instructions" rows={3}
                                              defaultValue={formState.special_instructions}
                                              onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                              className="form-textarea flex-1"></textarea>,

            'comment': <textarea id="comment" rows={3} name="comment" className="form-textarea flex-1"
                                 defaultValue={formState.comment}
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
