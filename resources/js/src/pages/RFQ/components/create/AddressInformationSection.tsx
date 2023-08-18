import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";

const AddressInformationSection = () => {
    const fields = {
        'Address Information': {
            'Billing Street': <input id="billing_street" name="billing_street" className="form-input flex-1"/>,
            'Billing City': <input id="billing_city" name="billing_city" className="form-input flex-1"/>,
            'Billing State': <input id="billing_state" name="billing_state" className="form-input flex-1"/>,
            'Billing Code': <input id="billing_code" name="billing_code" className="form-input flex-1"/>,
            'Billing Country': <input id="billing_country" name="billing_country" className="form-input flex-1"/>,
        },
        '': {
            'Shipping Street': <input id="shipping_street" name="shipping_street" className="form-input flex-1"/>,
            'Shipping City': <input id="shipping_city" name="shipping_city" className="form-input flex-1"/>,
            'Shipping State': <input id="shipping_state" name="shipping_state" className="form-input flex-1"/>,
            'Shipping Code': <input id="shipping_code" name="shipping_code" className="form-input flex-1"/>,
            'Shipping Country': <input id="shipping_country" name="shipping_country" className="form-input flex-1"/>,
        }
    }

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            {Object.entries(fields).map(([sectionTitle, sectionContent], index) => (
                <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                    <div key={sectionTitle} className="">
                        <div className="text-lg">{sectionTitle ? `${sectionTitle}:` :
                            <div className="mt-10"></div>}</div>
                        {Object.entries(sectionContent).map(([label, inputComponent], index) => (
                            <div key={label} className="mt-4 flex items-center">
                                <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    {label}
                                    {inputComponent.props.required && <RequiredComponent/>}
                                </label>
                                {inputComponent}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </>)
}

export default AddressInformationSection;
