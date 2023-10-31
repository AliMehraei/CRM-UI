import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/taskFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {displayImage, handleUploadFile, searchOwners} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const TaskInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.taskForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const Priority = [
        {value: '-None-', label: '-None-'},
        {value: 'Account or Contact exist already', label: 'Account or Contact exist already'},
        {value: 'Wrong Branch', label: 'Wrong Branch'},
        {value: 'Wrong Department', label: 'Wrong Department'},
        {value: 'Does Not Exist Anymore', label: 'Does Not Exist Anymore'},
        {value: 'Bankruptcy', label: 'Bankruptcy'},
        {value: 'Hoch', label: 'Hoch'},
        {value: 'Other', label: 'Other'},
    ];

    const TaskStatus = [
        {value: '-None-', label: '-None-'},
        {value: 'Abgeschlossen', label: 'Abgeschlossen'},
        {value: '0.0 Cold task / unqualified (CLU)', label: '0.0 Cold task / unqualified (CLU)'},
        {value: '1.0 Cold task qualified (CLQ)', label: '1.0 Cold task qualified (CLQ)'},
        {value: '2.0 First contact made (FCM)', label: '2.0 First contact made (FCM)'},
        {value: '3.0 warm task qualified (WLQ)', label: '3.0 warm task qualified (WLQ)'},
        {value: '4.0 Hot task (HLQ)', label: '4.0 Hot task (HLQ)'},
        {value: 'Close Task / Lost Task', label: 'Close Task / Lost Task'},
    ];


    const fields = {
        'Task Information': {
            'Task Owner': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }}
                    className="flex-1"
                    required
                    defaultValue={{
                        value: formState.owner?.id,
                        label: (
                            <div key={formState.owner?.id} className="flex items-center">
                                {formState.owner ? (
                                    <img
                                        src={displayImage(formState.owner.avatar_data)}
                                        alt="avatar"
                                        className="w-8 h-8 mr-2 rounded-full"
                                    />
                                ) : null}
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                    <div
                                        className="text-xs text-gray-500">{formState.owner?.email}</div>
                                </div>
                            </div>
                        ),
                    }}
                />
            ),
            'Subject': (
                <input
                    id="subject"
                    name="subject"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    required
                    defaultValue={formState.subject}

                />
            ),
            'Due Date': (
                <Flatpickr
                    name='due_date'
                    className="form-input flex-1"
                    defaultValue={formState.due_date}
                    placeholder="YYYY-MM-DD"
                    options={{
                        dateFormat: 'Y-m-d',
                        defaultDate: formState.due_date ? new Date(formState.due_date) : null as any, // Simplified defaultDate
                    }}
                    onChange={(_, dateString) => handleChangeField('due_date', dateString)}
                />
            ),

            'Status': (
                <Select
                    options={TaskStatus}
                    name="status"
                    id="status"
                    onChange={({value}: any) => {
                        handleChangeField('status', value)
                    }}
                    className="flex-1"
                    defaultValue={TaskStatus.find((title) => title.value == formState.status)}
                />
            ),
            'Priority': (
                <Select
                    options={Priority}
                    name="priority"
                    id="priority"
                    onChange={({value}: any) => {
                        handleChangeField('priority', value)
                    }}
                    defaultValue={Priority.find((title) => title.value == formState.priority)}
                    className="flex-1"
                />
            )
        },
        'Description Information': {
            'Description': (
                <textarea
                    id="description"
                    rows={6}
                    name="description"
                    className="form-textarea flex-1"
                    placeholder=""
                    defaultValue={formState.description}
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}></textarea>

            ),

        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>
            </div>
        </>
    )
}

export default TaskInformationSection;
