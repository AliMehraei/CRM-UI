import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import GenerateFields from "../../../../components/FormFields/GenerateFields";

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
            <GenerateFields fields={fields}/>

        </div>
    </>)

}

export default StatusSection
