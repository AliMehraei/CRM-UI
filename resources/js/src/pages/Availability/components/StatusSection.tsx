import Select from "react-select";
import {RequiredComponent} from "../../../components/FormFields/RequiredComponent";
import Flatpickr from "react-flatpickr";

const StatusSection = () => {

    const handleQuoteValidChange = () => {

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
                                         onChange={handleQuoteValidChange} className="flex-1"/>,

            'Valid': <Flatpickr name="valid" id="valid" options={{dateFormat: 'd-m-Y'}} className="form-input flex-1"
                                placeholder="MM DD YYYY"/>,

        },
        '': {
            'Availability Name': <input required id="availability_name" name="availability_name"
                                        className="form-input flex-1 "/>,
            'Rating': <input id="rating" name="rating" className="form-input flex-1 "/>,

        }

    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            {Object.entries(fields).map(([sectionTitle, sectionContent], index) => (
                <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                    <div key={sectionTitle} className="">
                        <div className="text-lg">{sectionTitle ? `${sectionTitle}:` :
                            <div className="mt-10"></div>}</div>
                        {Object.entries(sectionContent).map(([label, inputComponent], index) => (
                            <div key={label} className="mt-4 flex items-center">
                                <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    {label}
                                    {inputComponent.props.required && <RequiredComponent/>}
                                </label>
                                {inputComponent}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </>)

}

export default StatusSection
