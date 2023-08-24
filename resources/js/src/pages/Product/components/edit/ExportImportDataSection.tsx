import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {handleUploadFile,Currencies,PortalAccess} from "../../../../components/Functions/CommonFunctions";

const ExportImportDataSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.productForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

 


    const fields = {
        'Export / Import Data': {
            
           
            'Tariff Code': (
                <input
                id="tariff_code"
                name="tariff_code"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.tariff_code}
                />
            ),
          
            
        },
        '': {
            'ECCN': (
                <input
                id="eccn"
                name="eccn"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.eccn}
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

export default ExportImportDataSection;
