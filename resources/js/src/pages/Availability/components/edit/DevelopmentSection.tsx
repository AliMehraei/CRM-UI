import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/availabilityFormSlice";

const DevelopmentSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.availabilityForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Development': {
            'From Our Inventory': <input id="from_our_inventory" type="checkbox"
                                         name="from_our_inventory"
                                         className="form-checkbox"
                                         checked={formState.from_our_inventory}
                                         onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}/>,

        },
        '': {
            'Portal Availability Id': <input id="portal_availability_id" name="portal_availability_id"
                                             onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                             defaultValue={formState.portal_availability_id}
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
