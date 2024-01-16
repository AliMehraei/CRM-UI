import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/callFormSlice";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import {CallResult} from "../../../../components/Options/SelectOptions";

const OutcomeOfOutGoingCall = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.callForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Outcome Of Outgoing Call': {
            'Call Result': <Select id="call_result" name="call_result"
                                   options={CallResult}
                                   defaultValue={CallResult.find((data: any) => data.value == formState.call_result)}
                                   onChange={({value}: any) => {
                                       handleChangeField('call_result', value)
                                   }} className="flex-1"/>,
            'Description': <input id="description" name="description"
                                  className="form-input flex-1 "
                                  defaultValue={formState.description}
                                  onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,


        }
    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>
        </div>
    </>)
}
export default OutcomeOfOutGoingCall;
