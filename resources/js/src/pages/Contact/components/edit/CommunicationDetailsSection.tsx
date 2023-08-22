import AsyncSelect from "react-select/async";
import {useDispatch} from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile, loadAccounts, loadOrders} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import {updateFormData} from "../../../../store/accountFormSlice";

const AddressInformationSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Communication Details / History': {
            'Description': <textarea id="description" rows={3} name="description"
                                     className="form-textarea flex-1"
                                     placeholder=""
                                     onChange={(e) => handleChangeField(e.target.name, e.target.value)}></textarea>,
            'LinkedIn Communication': <textarea id="linkedIn_communication" rows={3} name="linkedIn_communication"
                                                className="form-textarea flex-1"
                                                placeholder=""
                                                onChange={(e) => handleChangeField(e.target.name, e.target.value)}></textarea>,
        },
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
