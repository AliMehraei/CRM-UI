import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import api from "../../../../config/api";
import { updateFormData } from "../../../../store/taskFormSlice";

const EditReminderSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.taskForm);

    const [isReminderChecked, setIsReminderChecked] = useState(formState.reminder);
    const [selectedDate, setSelectedDate] = useState(formState.reminder_on_date);
    const [selectedTime, setSelectedTime] = useState(formState.reminder_on_time);
    const [daysBeforeDue, setDaysBeforeDue] = useState(formState.days_before_due);
    const [repeatFrequency, setRepeatFrequency] = useState(formState.repeat_options);
    const initialSelectedDays = {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
    };
    
    const [selectedDays, setSelectedDays] = useState(initialSelectedDays);
       // Convert the selected_days string to an array when formState changes
       useEffect(() => {
        if (formState.selected_days) {
            try {
                const selectedDaysObj = JSON.parse(formState.selected_days);
                const selectedDaysArray = Object.keys(selectedDaysObj).filter(
                    (day) => selectedDaysObj[day]
                );
                setSelectedDays((prev) => ({
                    ...prev,
                    ...selectedDaysArray.reduce((acc, day) => {
                        acc[day] = true;
                        return acc;
                    }, {}),
                }));
            } catch (error) {
                console.error("Error parsing selected_days:", error);
            }
        }
    }, [formState.selected_days]);
    const reminderType = [
        { value: "email", label: "Email" },
        { value: "popup", label: "PopUp" },
        { value: "both", label: "Both" },
    ];

    const repeatOptions = [
        { value: "none", label: "None" },
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
        formState.due_date
            ? { value: "specific", label: "Specific days before due date" }
            : null, // Conditionally add the "Specific" option based on formState.due_date
    ].filter(Boolean);

    const handleChangeField = (field, value) => {
        if (field === "reminder") {
            setIsReminderChecked(value);
        }
        dispatch(updateFormData({ [field]: value }));
    };

    const handleDayToggle = (day) => {
        setSelectedDays((prev) => {
            const updatedDays = { ...prev, [day]: !prev[day] };
            dispatch(updateFormData({ selected_days: updatedDays }));
            return updatedDays;
        });
    };

    // Function to check all days
    const handleCheckAll = () => {
        setSelectedDays((prev) => {
            const updatedDays = {};
            for (const day in prev) {
                updatedDays[day] = true;
            }
            dispatch(updateFormData({ selected_days: updatedDays }));
            return updatedDays;
        });
    };

    // Function to uncheck all days
    const handleUncheckAll = () => {
        setSelectedDays((prev) => {
            const updatedDays = {};
            for (const day in prev) {
                updatedDays[day] = false;
            }
            dispatch(updateFormData({ selected_days: updatedDays }));
            return updatedDays;
        });
    };

    // Calculate the maximum number of days before due date
    const maxDaysBeforeDue = formState.due_date
        ? Math.floor((new Date(formState.due_date) - new Date()) / (1000 * 60 * 60 * 24))
        : 0;

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
                    defaultChecked={formState.reminder}
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
                            onChange={(_, dateString) =>
                                handleChangeField("reminder_on_date", dateString)
                            }
                            options={{ dateFormat: "Y-m-d " }}
                        />

                        <label>At:</label>
                        <Flatpickr
                            className="p-2 border rounded-md form-input flex-1"
                            data-enable-time={true}
                            data-no-calendar={true}
                            value={selectedTime}
                            onChange={(time) => {
                                setSelectedTime(time[0]);
                                handleChangeField("reminder_on_time", time[0]);
                            }}
                        /> //TODO:: fix this 

                        <label>Notify Type:</label>
                        <Select
                            id="reminder_type"
                            name="reminder_type"
                            onChange={({ value }) => {
                                handleChangeField("reminder_type", value);
                            }}
                            className="flex-1"
                            options={reminderType}
                            defaultValue={reminderType.find(
                                (title) => title.value === formState.reminder_type
                            )}
                        />
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                        <label className="w-24">Repeat:</label>
                        <Select
                            value={repeatOptions.find(
                                (option) => option.value === repeatFrequency
                            )}
                            options={repeatOptions}
                            className="flex-1"
                            name="repeat_options"
                            onChange={({ value }) => {
                                handleChangeField("repeat_options", value);
                                setRepeatFrequency(value);
                            }}
                        />
                    </div>

                    {repeatFrequency === "specific" && formState.due_date && (
                        <>
                            <div className="flex items-center space-x-4 mb-4">
                                <label className="w-24">Days before due:</label>
                                <input
                                    type="number"
                                    min="1" // Minimum value allowed is 1
                                    max={maxDaysBeforeDue} // Maximum value allowed is the calculated maxDaysBeforeDue
                                    className="p-2 border rounded-md form-input flex-1"
                                    value={daysBeforeDue}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        // Ensure the input value is within the allowed range
                                        if (inputValue >= 1 && inputValue <= maxDaysBeforeDue) {
                                            setDaysBeforeDue(inputValue);
                                            handleChangeField("days_before_due", inputValue);
                                        }
                                    }}
                                />
                                {formState.due_date && (
                                    <button
                                        type="button"
                                        className="text-blue-500"
                                        onClick={() => {
                                            setDaysBeforeDue(maxDaysBeforeDue.toString());
                                            handleChangeField(
                                                "days_before_due",
                                                maxDaysBeforeDue.toString()
                                            );
                                        }}
                                    >
                                        Max: {maxDaysBeforeDue}
                                    </button>
                                )}
                            </div>
                        </>
                    )}

                    {repeatFrequency === "weekly" && (
                        <div className="mb-4">
                            <label className="block mb-2 w-24">Select Days:</label>
                            <div className="flex space-x-4">
                                <div>
                                    <button
                                        type="button"
                                        onClick={handleCheckAll}
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                                    >
                                        Check All
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleUncheckAll}
                                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                                    >
                                        Uncheck All
                                    </button>
                                </div>
                                {Object.keys(selectedDays).map((day) => (
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
    );
};

export default EditReminderSection;
