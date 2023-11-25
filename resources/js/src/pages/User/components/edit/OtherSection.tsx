import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/userFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Flatpickr from "react-flatpickr";

const OtherSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.userForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Other': {
            'Grouping': <input
                id="grouping"
                name="grouping"
                className="form-input flex-1 "
                defaultValue={formState.grouping}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Status Reason': <input
                id="status_reason"
                name="status_reason"
                className="form-input flex-1 "
                defaultValue={formState.status_reason}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,


        },
        '': {

            'Type': <input
                id="type"
                name="type"
                className="form-input flex-1 "
                defaultValue={formState.type}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Zuid': <input
                id="zuid"
                name="zuid"
                className="form-input flex-1 "
                defaultValue={formState.zuid}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
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

export default OtherSection;
