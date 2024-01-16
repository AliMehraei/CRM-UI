import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import Flatpickr from "react-flatpickr";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/availabilityFormSlice";
import {AvailabilityTypes} from "../../../../components/Options/SelectOptions";

const StatusSection = () => {
    const dispatch = useDispatch();
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
            />,

            'Valid': <Flatpickr name="valid" id="valid" options={{dateFormat: 'Y-m-d '}} className="form-input flex-1"
                                placeholder="YYYY-MM-DD"
                                onChange={(_,dateString) => handleChangeField('valid', dateString)}
            />,

        },
        '': {
            'Availability Name': <input required id="availability_name" name="availability_name"
                                        className="form-input flex-1 "
                                        onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Rating': <input id="rating" name="rating" className="form-input flex-1 "
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
