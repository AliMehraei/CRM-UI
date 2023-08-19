import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import Flatpickr from "react-flatpickr";
import Tippy from "@tippyjs/react";
import GenerateFields from "../../../../components/FormFields/GenerateFields";

const fields = {
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
                <GenerateFields fields={fields}/>

            </div>
        </>
    )
}
