import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/userFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Flatpickr from "react-flatpickr";

const ContactInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.userForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Contact Information': {
            'Street': <input
                id="street"
                name="street"
                className="form-input flex-1 "
                defaultValue={formState.street}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'City': <input
                id="city"
                name="city"
                className="form-input flex-1 "
                defaultValue={formState.city}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'State': <input
                id="state"
                name="state"
                className="form-input flex-1 "
                defaultValue={formState.state}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Country': <input
                id="country"
                name="country"
                className="form-input flex-1 "
                defaultValue={formState.country}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,


        },
        '': {
            'Zip Code': <input
                id="zip_code"
                name="zip_code"
                className="form-input flex-1 "
                defaultValue={formState.zip_code}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Fax': <input
                id="fax"
                name="fax"
                className="form-input flex-1 "
                defaultValue={formState.fax}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Website': <input
                id="website"
                name="website"
                className="form-input flex-1 "
                defaultValue={formState.website}
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

export default ContactInformationSection;
