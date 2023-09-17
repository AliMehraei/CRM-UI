import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/userFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Flatpickr from "react-flatpickr";

const HeaderSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.userForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Header': {
            'First Name': <input
                id="first_name"
                name="first_name"
                className="form-input flex-1 "
                defaultValue={formState.first_name}
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Last Name': <input
                id="last_name"
                name="last_name"
                className="form-input flex-1 "
                defaultValue={formState.last_name}
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Alias': <input
                id="alias"
                name="alias"
                className="form-input flex-1 "
                defaultValue={formState.alias}
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Date of birth': <Flatpickr
                options={{
                    dateFormat: 'Y-m-d ',
                    position: 'auto left',
                    defaultDate: `${formState.date_history ? new Date(formState.date_history) : ''}`,
                }}
                defaultValue={formState.last_activity_date}
                name="date_of_birth"
                className="form-input flex-1"

                onChange={(_, dateString) => handleChangeField('date_of_birth', dateString)} // Update the field value on change

            />

        },
        '': {
            'Email': <input
                id="email"
                name="email"
                defaultValue={formState.email}
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Phone': <input
                id="phone"
                name="phone"
                defaultValue={formState.phone}
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Mobile': <input
                id="mobile"
                name="mobile"
                defaultValue={formState.mobile}
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,

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

export default HeaderSection;
