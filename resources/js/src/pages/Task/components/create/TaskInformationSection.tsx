import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/taskFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {handleUploadFile,searchOwners} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";
import {TaskStatus, TaskPriority} from "../../../../components/Options/SelectOptions";

const TaskInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.taskForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

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
                />
            ),
            'Subject': (
                <input
                id="subject"
                name="subject"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                required
                />
            ),
            'Due Date': (
                <Flatpickr name='due_date' options={{ dateFormat: 'Y-m-d ' }}
                className="form-input flex-1"
                placeholder="YYYY-MM-DD"
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
                />
            ),
            'Priority': (
                <Select
                options={TaskPriority}
                name="priority"
                id="priority"
                onChange={({value}: any) => {
                    handleChangeField('priority', value)
                }}
                className="flex-1"
                />
            ),

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
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}></textarea>

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
