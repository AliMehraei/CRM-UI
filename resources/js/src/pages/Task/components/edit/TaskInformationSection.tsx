import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/taskFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {handleUploadFile,searchOwners} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const TaskInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.taskForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };




    const Priority = [
        {value: 'none', label: '-None-'},
        {value: 'account_contact', label: 'Account or Contact exist already'},
        {value: 'wrong_branch', label: 'Wrong Branch'},
        {value: 'wrong_department', label: 'Wrong Department'},
        {value: 'does_not_exist', label: 'Does Not Exist Anymore'},
        {value: 'bankruptcy', label: 'Bankruptcy'},
        {value: 'other', label: 'Other'},

    ];
    const TaskStatus = [
        {value: 'none', label: '-None-'},
        {value: '0_cold_task', label: '0.0 Cold task / unqualified (CLU)'},
        {value: '1_cold_task', label: '1.0 Cold task qualified (CLQ)'},
        {value: '2_first_contract', label: '2.0 First contact made (FCM)'},
        {value: '3_warm_task', label: '3.0 warm task qualified (WLQ)'},
        {value: '4_hot_task', label: '4.0 Hot task (HLQ)'},
        {value: 'close_task', label: 'Close Task / Lost Task'},

    ];



    const fields = {
        'Task Information': {
            'Task Owner': (
                <AsyncSelect
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
                                <img src={formState.owner?.image} alt="avatar"
                                     className="w-8 h-8 mr-2 rounded-full"/>
                                <div>
                                    <div className="text-sm font-bold">{formState.owner?.name}</div>
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
            'Dua Date': (
                <Flatpickr name='due_date' 
                className="form-input flex-1"
                defaultValue={formState.due_date}
                placeholder="MM DD YYYY"
                options={{
                    dateFormat: 'd-m-Y',
                    defaultDate: `${formState.due_date ? new Date(formState.due_date) : ''}`,
                }}
                defaultValue={formState.due_date}
                onChange={(_,dateString) => handleChangeField('due_date', dateString)} />
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
            ),
            'Repeat':(
                <input
                id="repeat"
                type="checkbox"
                name="repeat"
                disabled
                className="form-checkbox"
                onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                defaultChecked={formState.repeat}

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
