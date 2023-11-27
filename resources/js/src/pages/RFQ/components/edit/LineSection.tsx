import AsyncSelect from "react-select/async";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {searchAvailability, searchExcess, searchProducts} from "../../../../components/Functions/CommonFunctions";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/rfqFormSlice";


export const LineSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.rfqFormSlice);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const fields = {
        'RFQ Line': {
            'Product Name': <AsyncSelect
                    defaultOptions={false} isMulti={false} id="product_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={searchProducts}
                                         onChange={({value}: any) => {
                                             handleChangeField('product_id', value)
                                         }}
                                         defaultValue={{
                                             value: formState.product?.id,
                                             label: (
                                                 <div key={formState.product?.id} className="flex items-center">
                                                     <div
                                                         className="text-sm font-bold">{formState.product?.product_name}</div>
                                                 </div>
                                             ),
                                         }}
                                         className="flex-1"
                                         required/>,

            'Customer Part Id': <input id="customer_part_id" name="customer_part_id" className="form-input flex-1 "
                                       defaultValue={formState.customer_part_id}
                                       onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,

            'Quantity': <input id="quantity" name="quantity" className="form-input flex-1 "
                               defaultValue={formState.quantity}
                               onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                               required/>,

            'Target Price': <input id="target_price" name="target_price"
                                   defaultValue={formState.target_price}
                                   onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                   className="form-input flex-1 "/>,
        },
        '': {
            'Alternative Products': <AsyncSelect
                    defaultOptions={true} id="alternative_products" name="alternative_products"
                                                 placeholder="Type at least 2 characters to search..."
                                                 loadOptions={searchProducts}
                                                 onChange={(values: any) => {
                                                     handleChangeField('alternative_products', values.map((v: any) => v.value))
                                                 }}
                                                 isMulti={true}
                                                 defaultValue={formState.rfq_product_alternatives
                                                     ? formState.rfq_product_alternatives.map((data: any) => ({
                                                         value: data.id,
                                                         label: (
                                                             <div key={data.id} className="flex items-center">
                                                                 <div>
                                                                     <div className="text-sm font-bold">{data.product_name}</div>
                                                                 </div>
                                                             </div>
                                                         ),
                                                     }))
                                                     : []
                                                 }
                                                 className="flex-1"/>,
            'Availability': <AsyncSelect
                    defaultOptions={false} isMulti={false} id="availability" name="availability_id"
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
            'Excess': <AsyncSelect
                    defaultOptions={true} isMulti={false} id="excess_id"
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
                                              onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                              className="form-textarea flex-1"></textarea>,

            'comment': <textarea id="comment" rows={3} name="comment" className="form-textarea flex-1"
                                 defaultValue={formState.comment}
                                 onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                 placeholder=""></textarea>,

        }

    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)
}
