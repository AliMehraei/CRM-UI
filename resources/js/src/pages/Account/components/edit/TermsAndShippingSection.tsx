import {useDispatch, useSelector} from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {updateFormData} from "../../../../store/accountFormSlice";

const TermsAndShippingSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.accountForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Terms and Shipping': {
            'Incoterms': (<input
                id="incoterm"
                name="incoterm"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.incoterm}
            />),

            'Payment Terms': (<input
                id="payment_term"
                name="payment_term"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.payment_term}

            />),
            'Credit Line': (<input
                id="credit_line"
                name="credit_line"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.credit_line}

            />),

        },
        '': {
            'VAT No': (<input
                id="vat_no"
                name="vat_no"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.vat_no}
            />),

            'Forwarder': (<input
                id="forwarder"
                name="forwarder"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.forwarder}

            />),
            'forwarder_account_no': (<input
                id="forwarder_account_no"
                name="forwarder_account_no"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.forwarder_account_no}

            />),
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

export default TermsAndShippingSection;
