import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/callFormSlice";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import {CallPurposes} from "../../../../components/Options/SelectOptions";

const PurposeOfOutGoingCall = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.callForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Purpose Of Outgoing Call': {
            'Call Purpose': <Select id="call_purpose" name="call_purpose"
                                    options={CallPurposes}
                                    menuPortalTarget={document.body}
                                    defaultValue={CallPurposes.find((data: any) => data.value == formState.call_purpose)}
                                    onChange={({value}: any) => {
                                        handleChangeField('call_purpose', value)
                                    }} className="flex-1"/>,
            'Call Agenda': <input id="call_agenda" name="call_agenda"
                                  className="form-input flex-1 "
                                  onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                  defaultValue={formState.call_agenda}
            />,


        }
    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>
        </div>
    </>)
}
export default PurposeOfOutGoingCall;
