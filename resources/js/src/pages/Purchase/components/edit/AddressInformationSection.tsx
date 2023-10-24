import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/purchaseOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";


const AddressInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.purchaseOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Address Information': {
            'Billing Street': <input id="billing_street" name="billing_street"
                                     required
                                     onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                     value={formState.billing_street || formState.sales_order?.account?.billing_street || ''}
                                     defaultValue={formState.billing_street}
                                     className="form-input flex-1"/>,
            'Billing City': <input id="billing_city" name="billing_city"
                                   required
                                   value={formState.billing_city || formState.sales_order?.account?.billing_city || ''}
                                   defaultValue={formState.billing_city}
                                   onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                   className="form-input flex-1"/>,
            'Billing State': <input id="billing_state" name="billing_state"
                                    value={formState.billing_state || formState.sales_order?.account?.billing_state || ''}
                                    defaultValue={formState.billing_state}
                                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                    className="form-input flex-1"/>,
            'Billing Code': <input id="billing_code" name="billing_code"
                                   required
                                   value={formState.billing_code || formState.sales_order?.account?.billing_code || ''}
                                   defaultValue={formState.billing_code}
                                   onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                   className="form-input flex-1"/>,
            'Billing Country': <input id="billing_country" name="billing_country"
                                      required
                                      value={formState.billing_country || formState.sales_order?.account?.billing_country || ''}
                                      defaultValue={formState.billing_country}
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                      className="form-input flex-1"/>,
        },
        '': {
            'Shipping Street': <input id="shipping_street" name="shipping_street"
                                      defaultValue={formState.shipping_street}
                                      value={formState.shipping_street || formState.sales_order?.account?.shipping_street || ''}
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                      className="form-input flex-1"/>,
            'Shipping City': <input id="shipping_city" name="shipping_city"
                                    defaultValue={formState.shipping_city}
                                    value={formState.shipping_city || formState.sales_order?.account?.shipping_city || ''}
                                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                    className="form-input flex-1"/>,
            'Shipping State': <input id="shipping_state" name="shipping_state"
                                     value={formState.shipping_state || formState.sales_order?.account?.shipping_state || ''}
                                     defaultValue={formState.shipping_state}
                                     onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                     className="form-input flex-1"/>,
            'Shipping Code': <input id="shipping_code" name="shipping_code"
                                    value={formState.shipping_code || formState.sales_order?.account?.shipping_code || ''}
                                    defaultValue={formState.shipping_code}
                                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                    className="form-input flex-1"/>,
            'Shipping Country': <input id="shipping_country" name="shipping_country"
                                       value={formState.shipping_country || formState.sales_order?.account?.shipping_country || ''}
                                       defaultValue={formState.shipping_country}
                                       onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                       className="form-input flex-1"/>,
        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>
            </div>
        </>
    )
}

export default AddressInformationSection;
