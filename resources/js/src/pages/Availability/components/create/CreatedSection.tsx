import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import Tippy from "@tippyjs/react";
import Flatpickr from "react-flatpickr";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/accountFormSlice";

const CreatedSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Created': {
            'test': <input id="test" type="checkbox"
                           name="test"
                           className="form-checkbox" onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Send letter owner': <input id="send_letter_owner" type="checkbox"
                                        name="send_letter_owner"
                                        className="form-checkbox"
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
