import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/accountFormSlice";
import Flatpickr from "react-flatpickr";

const DescriptionInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.accountForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const fields = {
        'Description Information': {
            'Description Information': <textarea id="description" rows={3} name="description"
                                                 className="form-textarea flex-1"
                                                 placeholder=""
                                                 onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                                 defaultValue={formState.description}
            ></textarea>,
            'Last Activity Date': <Flatpickr
                options={{
                    dateFormat: 'Y-m-d ',
                    position: 'auto left',
                    defaultDate: `${formState.last_activity_date ? new Date(formState.last_activity_date) : ''}`,
                }}
                name="last_activity_date"
                value={formState.last_activity_date ? new Date(formState.last_activity_date) : ''}
                className="form-input flex-1"
                onChange={(dates) => handleChangeField('last_activity_date', dates[0])} // Update the field value on change

            />
        },
    }

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>
        </div>
    </>)
}
export default DescriptionInformationSection
