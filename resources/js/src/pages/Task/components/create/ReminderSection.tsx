import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/taskFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {handleUploadFile,searchOwners} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const ReminderSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.taskForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    return (
        <>
             <div key='Reminder' className="">
                    <div key='Reminderx' className="">
                        <div className="text-lg">Reminder :
                            <div className="mt-2"></div></div>
                            <div className="mt-1 items-center">
                                <div className="flex">
                                    <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0 mt-2">
                                    Reminder
                                    </label>
                                    <div className="w-full">
                                    <input
                                        id="reminder"
                                        type="checkbox"
                                        name="reminder"
                                        className="form-checkbox"
                                        onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                                        />
                                    </div>
                                </div>


                            </div>
                        
                    </div>
                </div>
        </>
    )
}

export default ReminderSection;
