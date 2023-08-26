import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/availabilityFormSlice";

const CreatedSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.availibilityForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Created': {
            'test': <input id="test" type="checkbox"
                           name="test"
                           checked={formState.test}
                           className="form-checkbox"
                           onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Send letter owner': <input id="send_letter_owner" type="checkbox"
                                        name="send_letter_owner"
                                        className="form-checkbox"
                                        checked={formState.send_letter_owner}
                                        onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )
}

export default CreatedSection;
