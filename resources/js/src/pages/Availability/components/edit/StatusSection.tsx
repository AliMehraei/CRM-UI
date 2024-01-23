import Select from "react-select";
import Flatpickr from "react-flatpickr";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/availabilityFormSlice";
import {AvailabilityTypes} from "../../../../components/Options/SelectOptions";


const StatusSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.availabilityForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Status': {
            'Availability Type': <Select options={AvailabilityTypes} name="availability_type" id="availability_type"
                                         className="flex-1"
                                         onChange={({value}: any) => {
                                             handleChangeField('availability_type', value)
                                         }}
                                         defaultValue={AvailabilityTypes.find((data) => data.value == formState.availability_source)}

            />,

            'Valid': <Flatpickr name="valid" id="valid"
                                options={{
                                    dateFormat: 'Y-m-d ',
                                    defaultDate: formState.valid ? new Date(formState.valid) : null as any,
                                }}
                                defaultValue={formState.valid}
                                className="form-input flex-1"
                                placeholder="MM DD YYYY"
                                onChange={(_, dateString) => handleChangeField('valid', dateString)}
            />,

        },
        '': {
            'Availability Name': <input required id="availability_name" name="availability_name"
                                        className="form-input flex-1 "
                                        defaultValue={formState.availability_name}
                                        onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Availability Number': <input required id="availability_no" name="availability_no"
                                        className="form-input flex-1 "
                                        defaultValue={formState.availability_no}
                                        onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Rating': <input id="rating" name="rating" className="form-input flex-1 "
                             defaultValue={formState.rating}
                             onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

        }

    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)

}

export default StatusSection
