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
                />
            ),
            'Subject': (
                <input
                id="subject"
                name="subject"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Dua Date': (
                <Flatpickr name='dua_date' options={{ dateFormat: 'd-m-Y' }}
                className="form-input flex-1"
                placeholder="MM DD YYYY"
                onChange={(_,dateString) => handleChangeField('dua_date', dateString)} />
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
