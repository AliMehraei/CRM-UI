import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import Flatpickr from "react-flatpickr";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/availabilityFormSlice";

const StatusSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const AvailabilityTypes = [
        {value: 'none', label: '-None-'},
        {value: 'web_downloaded', label: 'Web Downloaded'},
        {value: 'cost_saving', label: 'Cost Saving'},
        {value: 'shortage', label: 'Shortage'},
        {value: 'proactive', label: 'Proactive'},
        {value: 'excess', label: 'Excess'},
        {value: 'not_valid', label: 'Not_valid'},

    ];
    const fields = {
        'Status': {
            'Availability Type': <Select options={AvailabilityTypes} name="availability_type" id="availability_type"
                                         className="flex-1"
                                         onChange={({value}: any) => {
                                             handleChangeField('availability_type', value)
                                         }}
            />,

            'Valid': <Flatpickr name="valid" id="valid" options={{dateFormat: 'd-m-Y'}} className="form-input flex-1"
                                placeholder="MM DD YYYY"
                                onChange={(_,dateString) => handleChangeField('valid', dateString)}
            />,

        },
        '': {
            'Availability Name': <input required id="availability_name" name="availability_name"
                                        className="form-input flex-1 "
                                        onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Rating': <input id="rating" name="rating" className="form-input flex-1 "
                             onChange={(e) => handleChangeField(e.target.name, e.target.value)}
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