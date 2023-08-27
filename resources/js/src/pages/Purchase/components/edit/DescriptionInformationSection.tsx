import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/purchaseOrderFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const DescriptionInformationSection = () => {
    const formState = useSelector((state: any) => state.purchaseOrderForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };




    const fields = {
        'Description Information': {
            'Description': (
                <textarea id="description" rows={3} 
                name="description"
                className="form-textarea flex-1"
                placeholder=""
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.description}
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

export default DescriptionInformationSection;
