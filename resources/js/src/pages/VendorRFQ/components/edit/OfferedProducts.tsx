import AsyncSelect from "react-select/async";
import Select from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/vendorRfqFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {Currencies, handleUploadFile, searchOwners, searchRFQ, searchVendor} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const OfferedProducts = () => {
    const formState = useSelector((state: any) => state.vendorRfqForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };


    const fields = {
        'Offered Products': {
       
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

export default OfferedProducts;
