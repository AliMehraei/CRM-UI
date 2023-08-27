import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/salesOrderFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const TermsConditionsSection = () => {
    const formState = useSelector((state: any) => state.salesOrderForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };




    const fields = {
        'Terms and Conditions': {
            'Terms and Conditions': (
                <textarea id="terms_conditions" rows={3} 
                name="terms_conditions"
                className="form-textarea flex-1"
                placeholder=""
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.terms_conditions}
                ></textarea>
           
            ),

        },
        '': {
            

        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )
    
}

export default TermsConditionsSection;
