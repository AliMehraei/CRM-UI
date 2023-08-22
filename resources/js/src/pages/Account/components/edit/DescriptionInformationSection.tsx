import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/accountFormSlice";
import Flatpickr from "react-flatpickr";

const DescriptionInformationSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const fields = {
        'Description Information': {
            'Description Information': <textarea id="description" rows={3} name="description"
                                                 className="form-textarea flex-1"
                                                 placeholder=""
                                                 onChange={(e) => handleChangeField(e.target.name, e.target.value)}></textarea>,
            'Last Activity Date': <Flatpickr
                options={{
                    dateFormat: 'Y-m-d ',
                    position: 'auto left',
                }}
                name="last_activity_date"
                value=""
                className="form-input flex-1"
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
