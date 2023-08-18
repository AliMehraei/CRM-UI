import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import Flatpickr from "react-flatpickr";
import Tippy from "@tippyjs/react";

const Development = {
    'Development': {
        'Processed for VRFQ round 1':
            <Tippy content="Please do not change the value" className="red">
                <input id="processed_for_vrfq_round_1" type="checkbox" name="processed_for_vrfq_round_1"
                       className="form-checkbox"/>
            </Tippy>,
        'Processed for VRFQ round 2': <label className="flex items-center cursor-pointer">
            <input id="processed_for_vrfq_round_2" type="checkbox" name="processed_for_vrfq_round_2"
                   className="form-checkbox"/>
        </label>,
        'Open Status Time': <Flatpickr
            data-enable-time
            options={{
                enableTime: true,
                dateFormat: 'Y-m-d H:i',
                position: 'auto left',
            }}
            value=""
            className="form-input flex-1"
        />
    }
}


export const DevelopmentSection = () => {
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                {Object.entries(Development).map(([sectionTitle, sectionContent], index) => (
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
