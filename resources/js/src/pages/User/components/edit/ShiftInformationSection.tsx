import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/userFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Flatpickr from "react-flatpickr";

const ShiftInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.userForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Shift Information ': {
            'Current Shift Id': <input
                id="current_shift_id"
                name="current_shift_id"
                className="form-input flex-1 "
                defaultValue={formState.current_shift_id}

                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Next Shift Id': <input
                id="next_shift_id"
                name="next_shift_id"
                className="form-input flex-1 "
                defaultValue={formState.next_shift_id}

                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,


        },
        '': {

            'Shift Effective From': <Flatpickr
                options={{
                    dateFormat: 'Y-m-d H:i',
                    position: 'auto left',
                    defaultDate: formState.shift_effective_from ? new Date(formState.shift_effective_from) : null as any,

                }}
                defaultValue={formState.shift_effective_from}
                name="shift_effective_from"
                className="form-input flex-1"
                onChange={(_, dateString) => handleChangeField('shift_effective_from', dateString)} // Update the field value on change

            />


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

export default ShiftInformationSection;
