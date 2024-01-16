import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/quoteFormSlice";

const AddressInformationSection = () => {
    const formState = useSelector((state: any) => state.quoteForm);
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Address Information': {
            'Billing Street': <input id="billing_street" name="billing_street"
                                     onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                     value={formState.billing_street || formState.account?.billing_street || ''}
                                     className="form-input flex-1"/>,
            'Billing City': <input id="billing_city" name="billing_city"
                                   value={formState.billing_city || formState.account?.billing_city || ''}
                                   onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                   className="form-input flex-1"/>,
            'Billing State': <input id="billing_state" name="billing_state"
                                    value={formState.billing_state || formState.account?.billing_state || ''}
                                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                    className="form-input flex-1"/>,
            'Billing Code': <input id="billing_code" name="billing_code"
                                   value={formState.billing_code || formState.account?.billing_code || ''}
                                   onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                   className="form-input flex-1"/>,
            'Billing Country': <input id="billing_country" name="billing_country"
                                      value={formState.billing_country || formState.account?.billing_country || ''}
                                      onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                      className="form-input flex-1"/>,
        },
        '': {
            'Shipping Street': <input id="shipping_street" name="shipping_street"
                                      value={formState.shipping_street || formState.account?.shipping_street || ''}
                                      onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                      className="form-input flex-1"/>,
            'Shipping City': <input id="shipping_city" name="shipping_city"
                                    value={formState.shipping_city || formState.account?.shipping_city || ''}
                                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                    className="form-input flex-1"/>,
            'Shipping State': <input id="shipping_state" name="shipping_state"
                                     value={formState.shipping_state || formState.account?.shipping_state || ''}
                                     onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                     className="form-input flex-1"/>,
            'Shipping Code': <input id="shipping_code" name="shipping_code"
                                    value={formState.shipping_code || formState.account?.shipping_code || ''}
                                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                    className="form-input flex-1"/>,
            'Shipping Country': <input id="shipping_country" name="shipping_country"
                                       value={formState.shipping_country || formState.account?.shipping_country || ''}
                                       onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
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
