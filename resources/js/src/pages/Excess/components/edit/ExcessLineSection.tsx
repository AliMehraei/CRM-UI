import AsyncSelect from "react-select/async";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    searchProducts
} from "../../../../components/Functions/CommonFunctions";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/excessFormSlice";

const ExcessLineSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.excessForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Excess Line': {
            'Product name': <AsyncSelect
                    defaultOptions={true} isMulti={false} id="product_name" name="product_name"
                                         required
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
                                         className="flex-1"/>,
            'Customer Internal No.': <input id="customer_internal_no" type="text" name="customer_internal_no"
                                            className="form-input flex-1 "
                                            defaultValue={formState.customer_internal_no}
                                            onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Quantity': <input id="quantity" type="text" name="quantity"
                               className="form-input flex-1 "
                               defaultValue={formState.quantity}
                               required
                               onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Cost': <input id="cost" type="text" name="cost"
                           className="form-input flex-1 "
                           defaultValue={formState.cost}
                           required
                           onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
        },
        '': {
            'Date Code': <input id="date_code" type="text" name="date_code"
                                className="form-input flex-1 "
                                defaultValue={formState.date_code}
                                onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'SPQ': <input id="spq" type="text" name="spq"
                          className="form-input flex-1 "
                          defaultValue={formState.spq}
                          onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'MOQ': <input id="moq" type="text" name="moq"
                          defaultValue={formState.moq}
                          className="form-input flex-1 "
                          onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Comment': <input id="comment" type="text" name="comment"
                              defaultValue={formState.comment}
                              className="form-input flex-1 "
                              onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
        }

    }


    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)

}

export default ExcessLineSection;
