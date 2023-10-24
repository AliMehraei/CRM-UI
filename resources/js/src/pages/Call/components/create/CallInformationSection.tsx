import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/callFormSlice";
import Select from "react-select";
import Flatpickr from "react-flatpickr";

const CallInformationSection = () => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const CallableList: any = [];

    const RelatableList: any = [];

    const CallTypes: any = [];

    const fields = {
        'Call Information': {
            'Call To': <div className="flex">
                <Select id="callable"
                        name="callable"
                        onChange={({value}: any) => {
                            handleChangeField('callable', value)
                        }}
                        className="flex-none w-32 mr-2"
                        options={CallableList}
                />
                <input
                    id="callable_to"
                    required
                    name="callable_to"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            </div>,
            'Related To': <div className="flex">
                <Select id="relatable"
                        name="relatable"
                        onChange={({value}: any) => {
                            handleChangeField('relatable', value)
                        }}
                        className="flex-none w-32 mr-2"
                        options={RelatableList}
                />
                <input
                    id="relatable_to"
                    required
                    name="relatable_to"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            </div>,
            'Call Type': <Select id="call_type" name="call_type" required
                                 options={CallTypes}
                                 onChange={({value}: any) => {
                                     handleChangeField('call_type', value)
                                 }} className="flex-1"/>,
            'Outgoing Call Status': <input id="outgoing_call_status" name="outgoing_call_status" type="text"
                                           placeholder="Readonly input here…"
                                           className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                           defaultValue="Abgeschlossen"
                                           disabled/>,
            'Call Start Time': <Flatpickr
                name="call_start_time"
                data-enable-time
                options={{
                    enableTime: true,
                    dateFormat: 'Y-m-d H:i',
                    position: 'auto left',
                }}
                onChange={(_, dateString) => handleChangeField('call_start_time', dateString)}
                className="form-input flex-1"
            />,
            'Call Duration': <div className="flex">
                <input
                    id="call_duration_minutes"
                    required
                    name="call_duration_minutes"
                    className="form-input mx-2 flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    placeholder="Minutes"
                />
                <input
                    id="call_duration_second"
                    required
                    name="call_duration"
                    className="form-input mx-2 flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    placeholder="Seconds"

                />
            </div>,
            'Subject': <input required id="subject" name="subject"
                              className="form-input flex-1 "
                              defaultValue="Outgoing call to Unknown"
                              onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Voice Recording': <input required id="voice_recording" name="voice_recording"
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
export default CallInformationSection;
