import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import Flatpickr from "react-flatpickr";
import Tippy from "@tippyjs/react";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/rfqFormSlice";


export const DevelopmentSection = () => {
    const dispatch = useDispatch();


    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Development': {
            'Processed for VRFQ round 1':
                <Tippy content="Please do not change the value" className="red">
                    <input id="processed_for_vrfq_round_1" type="checkbox" name="processed_for_vrfq_round_1"
                           className="form-checkbox"
                           onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                    />
                </Tippy>,
            'Processed for VRFQ round 2': <label className="flex items-center cursor-pointer">
                <input id="processed_for_vrfq_round_2" type="checkbox" name="processed_for_vrfq_round_2"
                       className="form-checkbox"
                       onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                />
            </label>,
            'Open Status Time': <Flatpickr
                name="open_status_timestamp"
                data-enable-time
                options={{
                    enableTime: true,
                    dateFormat: 'Y-m-d H:i',
                    position: 'auto left',
                }}
                onChange={(_, dateString) => handleChangeField('open_status_timestamp', dateString)}
                className="form-input flex-1"
            />
        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )
}
