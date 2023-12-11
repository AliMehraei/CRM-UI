import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../config/api";
import { updateFormData } from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {ProductLifecylceStatusOptions} from "../../../../components/Options/SelectOptions";
const SupplyChainSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.productForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };


    const fields = {
        'Supply Chain': {


            'Manufacturer Name': (
                <input
                    id="manufacturer_name"

                    name="manufacturer_name"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.manufacturer_name}
                />
            ),


        },
        '': {


            'Lifecylce Status': (
                <Select
                    options={ProductLifecylceStatusOptions}
                    name="lifecycle_status"
                    id="lifecycle_status"
                    onChange={({ value }: any) => {
                        handleChangeField('lifecycle_status', value)
                    }}
                    className="flex-1"
                    defaultValue={ProductLifecylceStatusOptions.find((title) => title.value == formState.lifecycle_status)}

                />
            ),

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

export default SupplyChainSection;
