import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/taskFormSlice";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import { useState } from "react";

const ReminderSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.taskForm);
    const [isReminderChecked, setIsReminderChecked] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const reminderType = [
        { value: "email", label: "Email" },
        { value: "popup", label: "PopUp" },
        { value: "both", label: "Both" },
    ];
    const handleChangeField = (field: any, value: any) => {
        if(field === 'reminder') {
            setIsReminderChecked(value);
        }
        dispatch(updateFormData({[field]: value}));
    };
  

   
    return (
        <>
        <div className="p-6 border rounded-md">
            <div className="flex items-center space-x-4">
                <label className="text-lg font-semibold">Reminder:</label>
                <input
                    id="reminder"
                    type="checkbox"
                    name="reminder"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                />
            </div>
            
            {isReminderChecked && (
                <div className="my-4 flex items-center space-x-4">
                    <label>On:</label>
                    <Flatpickr 
                        className="p-2 border rounded-md form-input flex-1"
                        data-enable-time={false}
                        placeholder="MM DD YYYY"
                        value={selectedDate}
                        // onChange={date => {
                        //     setSelectedDate(date[0]);
                        //     handleChangeField('reminder_on_date', date[0]);
                        // }}     
                        onChange={(_,dateString) => handleChangeField('reminder_on_date', dateString)}

                        options={{ dateFormat: 'd-m-Y' }}              
                         />
                    
                    <label>At:</label>
                    <Flatpickr 
                        className="p-2 border rounded-md form-input flex-1"
                        data-enable-time={true}
                        data-no-calendar={true}   
                        value={selectedTime}
                        onChange={time => {
                            setSelectedTime(time[0]);
                            handleChangeField('reminder_on_time', time[0]);
                        }}
                    />

                    <label>Notify Type:</label> 
                    <Select id="reminder_type"
                        name="reminder_type"
                        onChange={({ value }: any) => {
                            handleChangeField('reminder_type', value)
                        }}
                        className="flex-1"
                        options={reminderType}
                    />
                </div>
            )}
        </div>
        </>
    )
}

export default ReminderSection;
