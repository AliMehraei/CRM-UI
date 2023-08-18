import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";

const StatusSection = () => {

    const handleQuoteValidChange = () => {

    };
    const QuoteValid = [
        {value: 'none', label: '-None-'},
        {value: '1_day', label: '1 Day'},
        {value: '3_day', label: '3 Days'},
        {value: '1_week', label: '1 Week'},

    ];
    const fields = {
        'Status': {
            'Quote valid': <Select options={QuoteValid} name="quote_valid" id="quote_valid"
                                   onChange={handleQuoteValidChange} className="flex-1"/>,
            'Proactive Offer': <label className="flex items-center cursor-pointer">
                <input id="proactive_offer" type="checkbox" name="proactive_offer"
                       className="form-checkbox"/>
            </label>,
        },
        '': {
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
