import {RequiredComponent} from "../../../components/FormFields/RequiredComponent";
import Tippy from "@tippyjs/react";
import Flatpickr from "react-flatpickr";

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
                {Object.entries(fields).map(([sectionTitle, sectionContent], index) => (
                    <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                        <div key={sectionTitle} className="">
                            <div className="text-lg">{sectionTitle ? `${sectionTitle}:` :
                                <div className="mt-10"></div>}</div>
                            {Object.entries(sectionContent).map(([label, inputComponent], index) => (
                                <div key={label} className="mt-4 flex items-center">
                                    <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        {label}
                                        {inputComponent.props.required && <RequiredComponent/>}
                                    </label>
                                    {inputComponent}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CreatedSection;
