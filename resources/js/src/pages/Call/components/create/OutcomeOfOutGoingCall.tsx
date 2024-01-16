import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/callFormSlice";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import {CallResult} from "../../../../components/Options/SelectOptions";

const OutcomeOfOutGoingCall = () => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Outcome Of Outgoing Call': {
            'Call Result': <Select id="call_result" name="call_result"
                                   options={CallResult}
                                   defaultValue={{value: 'none', label: 'None'}}
                                   onChange={({value}: any) => {
                                       handleChangeField('call_result', value)
                                   }} className="flex-1"/>,
            'Description': <input id="description" name="description"
                                  className="form-input flex-1 "
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
