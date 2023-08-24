import AsyncSelect from "react-select/async";
import { useDispatch } from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import { handleUploadFile, searchAccounts, loadOrders } from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import { updateFormData } from "../../../../store/accountFormSlice";

const AddressInformationSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };


    const fields = {
        'Address Information': {
            'Mailing Country': <input
                id="mailing_country"

                name="mailing_country"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Mailing City': <input
                id="mailing_city"

                name="mailing_city"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Mailing Zip': <input
                id="mailing_code"

                name="mailing_code"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />

        },
        '': {
            'Mailing State': <input
                id="mailing_state"
                name="mailing_state"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Mailing Street': <input
                id="mailing_street"
                name="mailing_street"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />


        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields} />
            </div>
        </>
    )
}

export default AddressInformationSection;
