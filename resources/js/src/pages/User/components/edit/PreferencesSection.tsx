import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/userFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";

const HeaderSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.userForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Preference': {
            'Language': <input
                id="language"
                name="language"
                defaultValue={formState.language}
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Locale': <input
                id="country_locale"
                name="country_locale"
                defaultValue={formState.country_locale}
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Time Zone': <input
                id="time_zone"
                name="time_zone"
                defaultValue={formState.time_zone}
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Time Format': <input
                id="time_format"
                name="time_format"
                defaultValue={formState.time_format}
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Date Format': <input
                id="date_format"
                name="date_format"
                className="form-input flex-1 "
                defaultValue={formState.date_format}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

        },
        '': {
            'Decimal': <input
                id="decimal"
                name="decimal"
                className="form-input flex-1 "
                defaultValue={formState.decimal}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Sort Order Preference': <input
                id="sort_order_preference"
                name="sort_order_preference"
                className="form-input flex-1 "
                defaultValue={formState.sort_order_preference}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Name Format': <input
                id="name_format"
                name="name_format"
                className="form-input flex-1 "
                defaultValue={formState.name_format}
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

export default HeaderSection;
