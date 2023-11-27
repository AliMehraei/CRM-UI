import AsyncSelect from "react-select/async";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    searchProducts
} from "../../../../components/Functions/CommonFunctions";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/excessFormSlice";

const ExcessLineSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Excess Line': {
            'Product name': <AsyncSelect
                    defaultOptions={false} isMulti={false} id="product_name" name="product_name"
                                         required
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={searchProducts}
                                         onChange={({value}: any) => {
                                             handleChangeField('product_id', value)
                                         }}
                                         className="flex-1"/>,
            'Customer Internal No.': <input id="customer_internal_no" type="text" name="customer_internal_no"
                                            className="form-input flex-1 "
                                            onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,
            'Quantity': <input id="quantity" type="text" name="quantity"
                               className="form-input flex-1 "
                               required
                               onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,
            'Cost': <input id="cost" type="text" name="cost"
                           className="form-input flex-1 "
                           required
                           onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,
        },
        '': {
            'Date Code': <input id="date_code" type="text" name="date_code"
                                className="form-input flex-1 "
                                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,
            'SPQ': <input id="spq" type="text" name="spq"
                          className="form-input flex-1 "
                          onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,
            'MOQ': <input id="moq" type="text" name="moq"
                          className="form-input flex-1 "
                          onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,
            'Comment': <input id="comment" type="text" name="comment"
                              className="form-input flex-1 "
                              onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,
        }

    }


    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)

}

export default ExcessLineSection;
