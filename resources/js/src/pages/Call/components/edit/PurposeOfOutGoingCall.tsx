import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/callFormSlice";
import Select from "react-select";
import Flatpickr from "react-flatpickr";

const PurposeOfOutGoingCall = () => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const CallPurposes: any = [
        {value: 'none', label: 'None'},
        {value: 'möglicher_kunde', label: 'Möglicher Kunde'},
        {value: 'administrative', label: 'Administrativ'},
        {value: 'negotiation', label: 'Verhandlung'},
        {value: 'demo', label: 'Demo'},
        {value: 'project', label: 'Projekt'},
    ];
    const fields = {
        'Purpose Of Outgoing Call': {
            'Call Purpose': <Select id="call_purpose" name="call_purpose"
                                    options={CallPurposes}
                                    menuPortalTarget={document.body}
                                    defaultValue={{value: 'none', label: 'None'}}
                                    onChange={({value}: any) => {
                                        handleChangeField('call_purpose', value)
                                    }} className="flex-1"/>,
            'Call Agenda': <input id="call_agenda" name="call_agenda"
                                  className="form-input flex-1 "
                                  onChange={(e) => handleChangeField(e.target.name, e.target.value)}
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
