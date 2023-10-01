import { useDispatch, useSelector } from "react-redux";
import api from "../../../../config/api";
import { updateFormData } from "../../../../store/taskFormSlice";
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
    const [isUnlimitedDaysBefore, setIsUnlimitedDaysBefore] = useState(false);
    const [daysBeforeDue, setDaysBeforeDue] = useState('');
    const [repeatFrequency, setRepeatFrequency] = useState('');
    const [selectedDays, setSelectedDays] = useState({
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
    });

    const reminderType = [
        { value: "email", label: "Email" },
        { value: "popup", label: "PopUp" },
        { value: "both", label: "Both" },
    ];

    const repeatOptions = [
        { value: "none", label: "None" },
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
        { value: "specific", label: "Specific days before due date" },
    ];

    const handleChangeField = (field: any, value: any) => {
        if (field === 'reminder') {
            setIsReminderChecked(value);
        } else if (field === 'unlimitedDaysBefore') {
            setIsUnlimitedDaysBefore(value);
        }
        dispatch(updateFormData({ [field]: value }));
    };

    const handleDayToggle = (day: string) => {
        setSelectedDays(prev => ({ ...prev, [day]: !prev[day] }));
    };

    return (
        <div className="p-6 border rounded-md shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-4">Reminder Settings</h2>

            <div className="flex items-center space-x-4 mb-6">
                <label className="text-lg">Enable Reminder:</label>
                <input
                    id="reminder"
                    type="checkbox"
                    name="reminder"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                />
            </div>

            {isReminderChecked && (
                <div>
                    <div className="flex items-center space-x-4 my-4">
                        <label>On:</label>
                        <Flatpickr 
                            className="p-2 border rounded-md form-input flex-1"
                            data-enable-time={false}
                            placeholder="YYYY-MM-DD"
                            value={selectedDate}   
                            onChange={(_,dateString) => handleChangeField('reminder_on_date', dateString)}
                            options={{ dateFormat: 'Y-m-d ' }}              
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

                    <div className="flex items-center space-x-4 mb-4">
                        <label className="w-24">Repeat:</label>
                        <Select
                            value={repeatOptions.find(option => option.value === repeatFrequency)}
                            options={repeatOptions}
                            className="flex-1"
                            onChange={({ value }: any) => setRepeatFrequency(value)}
                        />
                    </div>

                    {repeatFrequency === 'specific' && (
                        <>
                            <div className="flex items-center space-x-4 mb-4">
                                <label className="w-24">Days before due:</label>
                                <input
                                    type="number"
                                    min="1"
                                    className="p-2 border rounded-md form-input flex-1"
                                    value={daysBeforeDue}
                                    disabled={isUnlimitedDaysBefore}
                                    onChange={(e) => {
                                        setDaysBeforeDue(e.target.value);
                                        handleChangeField('daysBeforeDue', e.target.value);
                                    }}
                                />
                            </div>

                            <div className="flex items-center space-x-4 mb-4">
                                <label className="w-24 text-lg">Unlimited Days:</label>
                                <input
                                    id="unlimitedDaysBefore"
                                    type="checkbox"
                                    name="unlimitedDaysBefore"
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                    checked={isUnlimitedDaysBefore}
                                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                                />
                            </div>
                        </>
                    )}

                    {repeatFrequency === 'weekly' && (
                        <div className="mb-4">
                            <label className="block mb-2 w-24">Select Days:</label>
                            <div className="flex space-x-4">
                                {Object.keys(selectedDays).map(day => (
                                    <div key={day} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id={day}
                                            checked={selectedDays[day]}
                                            onChange={() => handleDayToggle(day)}
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                        />
                                        <label htmlFor={day}>{day}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default ReminderSection;
