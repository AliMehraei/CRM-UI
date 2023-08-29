import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {updateFormData} from "../../../../store/invoiceFormSlice";
import {useDispatch} from "react-redux";

const AddressInformationSection = () => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };
    const fields = {
        'Address Information': {
            'Billing Street': <input id="billing_street" name="billing_street"
                                     onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                     className="form-input flex-1"/>,
            'Billing City': <input id="billing_city" name="billing_city"
                                   onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                   className="form-input flex-1"/>,
            'Billing State': <input id="billing_state" name="billing_state"
                                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                    className="form-input flex-1"/>,
            'Billing Code': <input id="billing_code" name="billing_code"
                                   onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                   className="form-input flex-1"/>,
            'Billing Country': <input id="billing_country" name="billing_country"
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                      className="form-input flex-1"/>,
        },
        '': {
            'Shipping Street': <input id="shipping_street" name="shipping_street"
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                      className="form-input flex-1"/>,
            'Shipping City': <input id="shipping_city" name="shipping_city"
                                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                    className="form-input flex-1"/>,
            'Shipping State': <input id="shipping_state" name="shipping_state"
                                     onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                     className="form-input flex-1"/>,
            'Shipping Code': <input id="shipping_code" name="shipping_code"
                                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                    className="form-input flex-1"/>,
            'Shipping Country': <input id="shipping_country" name="shipping_country"
                                       onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                       className="form-input flex-1"/>,
        }
    }

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>
        </div>
    </>)
}

export default AddressInformationSection;