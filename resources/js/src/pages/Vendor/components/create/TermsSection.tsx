import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/vendorFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile} from "../../../../components/Functions/CommonFunctions";

const TermsSection = () => {
    const formState = useSelector((state: any) => state.vendorForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };



    const searchVendor = async (query: string) => {
        const valField = 'id';
        const nameField = 'vendor_name';

        const result = await api_instance.searchVendor({query: query});

        if (result.status) {
            return result.data.data.map((data: any) => ({
                value: data[valField],
                label: (
                    <div key={data[valField]} className="flex items-center">
                        <div>
                            <div className="text-sm font-bold">{data[nameField]}</div>
                        </div>
                    </div>
                ),
            }));
        }
    };

    const fields = {
        'Terms and Shipping': {
            'Payment Terms': (<input
                id="payment_terms"
                name="payment_terms"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />),

            'Incoterms ': (
                <input
                    id="incoterms"
                    
                    name="incoterms"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            
            

        },
        '': {
            'Vat NO': (<input
                id="vat_no"
                required
                name="vat_no"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />),
            'Forwarder': (<input
                id="forwarder"
                name="forwarder"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />),
            'Forwarder Account no.':
            <input
                id="forwarder_account_no"
                name="forwarder_account_no"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,

        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )
    
}

export default TermsSection;
