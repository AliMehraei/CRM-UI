import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/availabilityFormSlice";

const DevelopmentSection = () => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const fields = {
        'Development': {
            'From Our Inventory': <input id="from_our_inventory" type="checkbox"
                                         name="from_our_inventory"
                                         className="form-checkbox"
                                         onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}/>,

        }
    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)
}
export default DevelopmentSection
