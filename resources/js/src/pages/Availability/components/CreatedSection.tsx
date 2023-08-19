import {RequiredComponent} from "../../../components/FormFields/RequiredComponent";
import Tippy from "@tippyjs/react";
import Flatpickr from "react-flatpickr";
import GenerateFields from "../../../components/FormFields/GenerateFields";

const CreatedSection = () => {

    const fields = {
        'Created': {
            'test': <input id="test" type="checkbox"
                           name="test"
                           className="form-checkbox"/>,
            'Send letter owner': <input id="send_letter_owner" type="checkbox"
                                        name="send_letter_owner"
                                        className="form-checkbox"/>,
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
