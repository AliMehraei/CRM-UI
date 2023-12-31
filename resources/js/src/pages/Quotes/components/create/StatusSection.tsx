import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {updateFormData} from "../../../../store/quoteFormSlice";
import {useDispatch} from "react-redux";
import {QuoteValid} from "../../../../components/Options/SelectOptions";
const StatusSection = () => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Status': {
            'Quote valid': <Select options={QuoteValid} name="quote_valid" id="quote_valid"
                                   onChange={({value}: any) => {
                                       handleChangeField('quote_valid', value)
                                   }}
                                   className="flex-1"/>,
            'Proactive Offer': <input id="proactive_offer" type="checkbox" name="proactive_offer"
                                      className="form-checkbox"
                                      onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
            />,
        },
        '': {
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
