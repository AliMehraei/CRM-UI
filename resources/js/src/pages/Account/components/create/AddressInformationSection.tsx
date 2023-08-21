import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {updateFormData} from "../../../../store/accountFormSlice";
import {useDispatch} from "react-redux";


const AddressInformationSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const fields = {
        'Address Information': {
            'Billing Street': <input required id="billing_street" name="billing_street" className="form-input flex-1"
                                     onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Billing City': <input required id="billing_city" name="billing_city" className="form-input flex-1"
                                   onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Billing State': <input id="billing_state" name="billing_state" className="form-input flex-1"
                                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Billing Code': <input required id="billing_code" name="billing_code" className="form-input flex-1"
                                   onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Billing Country': <input required id="billing_country" name="billing_country"
                                      className="form-input flex-1"
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
        },
        '': {
            'Shipping Street': <input id="shipping_street" name="shipping_street" className="form-input flex-1"
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Shipping City': <input id="shipping_city" name="shipping_city" className="form-input flex-1"
                                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Shipping State': <input id="shipping_state" name="shipping_state" className="form-input flex-1"
                                     onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Shipping Code': <input id="shipping_code" name="shipping_code" className="form-input flex-1"
                                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Shipping Country': <input id="shipping_country" name="shipping_country" className="form-input flex-1"
                                       onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
        }
    }

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>
        </div>
    </>)
}

export default AddressInformationSection;
