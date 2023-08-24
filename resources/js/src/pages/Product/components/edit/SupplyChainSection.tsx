import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {handleUploadFile,Currencies,PortalAccess} from "../../../../components/Functions/CommonFunctions";

const SupplyChainSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.productForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

   
    const  LifecylceStatusOptions = [
        { label: '-None-', value: 'none' },
        { label: 'Production', value: 'production' },
        { label: 'Phase out', value: 'phase_out' },
        { label: 'EOL', value: 'eol' },
        { label: 'Unknown', value: 'unknown' },
    ];
  

    const fields = {
        'Supply Chain': {
         
           
            'Manufacture Name': (
                <input
                id="manufacture_name"
                
                name="manufacture_name"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.manufacture_name}
                />
            ),
            
            
        },
        '': {
           
           
            'Lifecylce Status': (
                <Select 
                options={LifecylceStatusOptions} 
                name="lifecycle_status" 
                id="lifecycle_status"       
                onChange={({value}: any) => {
                    handleChangeField('lifecycle_status', value)
                }} 
                className="flex-1"
                defaultValue={LifecylceStatusOptions.find((title) => title.value == formState.lifecycle_status)}

                />
            ),
            
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

export default SupplyChainSection;
