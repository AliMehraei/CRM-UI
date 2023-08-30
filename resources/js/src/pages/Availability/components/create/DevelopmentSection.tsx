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
                                         onChange={(e) => handleChangeField(e.target.name, e.target.checked)}/>,

        },
        '': {
            'Portal Availability Id': <input id="portal_availability_id" name="portal_availability_id"
                                             onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                             className="form-input flex-1 "/>,
        }
    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)
}
export default DevelopmentSection
