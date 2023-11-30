import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {updateFormData} from "../../../../store/quoteFormSlice";
import {useDispatch, useSelector} from "react-redux";

const StatusSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.quoteForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
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
                                   onChange={({value}: any) => {
                                       handleChangeField('converted_by_id', value)
                                   }}
                                   defaultValue={QuoteValid.find((title) => title.value == formState.quote_valid)}
                                   className="flex-1"/>,
            'Proactive Offer': <input id="proactive_offer" type="checkbox" name="proactive_offer"
                                      className="form-checkbox"
                                      onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                                      checked={formState.proactive_offer}
            />,
        },
        '': {
            'Rating': <input id="rating" name="rating" className="form-input flex-1 "
                             onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                             defaultValue={formState.rating}
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
