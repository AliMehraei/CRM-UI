import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {handleUploadFile,Currencies,PortalAccess} from "../../../../components/Functions/CommonFunctions";

const ComplienceSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.productForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };




    const fields = {
        'Complience': {



            'RoHs':(
                <input
                id="rohs"
                type="checkbox"
                name="rohs"
                className="form-checkbox"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                defaultChecked={formState.rohs}
                />
            ),
            'Reach':(
                <input
                id="reach"
                type="checkbox"
                name="reach"
                className="form-checkbox"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                defaultChecked={formState.reach}
                />
            ),


        },
        '': {

            'RoHs Status': (
                <input
                    id="rohs_status"
                    name="rohs_status"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.rohs_status}
                />
            ),
            'REACH SVHC': (
                <input
                    id="reach_svhc"
                    name="reach_svhc"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.reach_svhc}
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

export default ComplienceSection;
