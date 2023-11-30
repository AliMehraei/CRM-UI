import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {handleUploadFile,Currencies,PortalAccess} from "../../../../components/Functions/CommonFunctions";

const DimensionsSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.productForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };



    const fields = {
        'Dimensions': {


            'Length': (
                <input
                id="length"
                name="length"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.length}
                />
            ),
            'Depth': (
                <input
               id="depth"
                name="depth"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.depth}
                />
            ),
            'Thickness': (
                <input
               id="thickness"
                name="thickness"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.thickness}
                />
            ),
        },
        '': {
            'Width': (
                <input
               id="width"
                name="width"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.width}
                />
            ),
            'Height': (
                <input
               id="height"
                name="height"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.height}
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

export default DimensionsSection;
