import AsyncSelect from "react-select/async";
import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/quoteFormSlice";
import {
    Currencies, handleUploadFile,
    loadAccounts, loadDeals,
    loadOrders,
    loadOwners,
    loadRFQ
} from "../../../../components/Functions/CommonFunctions";
import {loadContacts} from "../../../RFQ/components/edit/HeaderSection";

const HeaderSection = () => {

    const QuoteChances = [
        {value: 'none', label: '-None-'},
        {value: 'high', label: 'High'},
        {value: 'unknown', label: 'Unknown'},
        {value: 'low', label: 'Low'},

    ];

    const QuoteStages = [
        {value: 'draft', label: 'Draft'},
        {value: 'no_feedback', label: 'No Feedback'},
        {value: 'negotiation_price', label: 'Negotiation Price'},
        {value: 'negotiation_conditions', label: 'Negotiation Conditions'},
        {value: 'open', label: 'Open'},
        {value: 'lost', label: 'Lost'},
        {value: 'won', label: 'Won'},


    ];
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const fields = {
        'Header': {
            'Account Name': <AsyncSelect isMulti={false} id="account_id" name="account_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadAccounts}
                                         onChange={({value}: any) => {
                                             handleChangeField('account_id', value)
                                         }}
                                         className="flex-1"/>,
            'Contact Name': <AsyncSelect isMulti={false} id="contact_id" name="contact_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadContacts}
                                         onChange={({value}: any) => {
                                             handleChangeField('contact_id', value)
                                         }}
                                         className="flex-1"/>,
            'RFQ': <AsyncSelect isMulti={false} id="rfq_id" name="rfq_id"
                                placeholder="Type at least 2 characters to search..."
                                loadOptions={loadRFQ}
                                onChange={({value}: any) => {
                                    handleChangeField('rfq_id', value)
                                }}
                                className="flex-1"/>,

            'Customer RFQ No': <input id="customer_rfq_no" type="text" name="customer_rfq_no"
                                      className="form-input flex-1 "
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Subject': <input required id="subject" name="subject" type="text"
                              className="form-input flex-1 "
                              onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Converted by': <AsyncSelect isMulti={false} id="converted_by_id" name="converted_by_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadOwners}
                                         className="flex-1"
                                         onChange={({value}: any) => {
                                             handleChangeField('converted_by_id', value)
                                         }}
            />,
            'Quote Chance': <Select name='quote_chance' required options={QuoteChances}
                                    className="flex-1"
                                    onChange={({value}: any) => {
                                        handleChangeField('chance', value)
                                    }}
            />,
            'Currency': <Select name="currency" options={Currencies}
                                className="flex-1"
                                onChange={({value}: any) => {
                                    handleChangeField('currency', value)
                                }}
            />,
        },
        '': {
            'Quote Owner': <AsyncSelect isMulti={false} id="owner_id" name="owner_id"
                                        placeholder="Type at least 2 characters to search..."
                                        loadOptions={loadOwners}
                                        onChange={({value}: any) => {
                                            handleChangeField('owner_id', value)
                                        }}
                                        className="flex-1"/>,

            'Deals Name': <AsyncSelect isMulti={false} id="deal_id" name="deal_id"
                                       placeholder="Type at least 2 characters to search..."
                                       loadOptions={loadDeals}
                                       onChange={({value}: any) => {
                                           handleChangeField('deal_id', value)
                                       }}
                                       className="flex-1"/>,

            'Quote Stage': <Select name="quote_stage" required options={QuoteStages}
                                   className="flex-1"
                                   onChange={({value}: any) => {
                                       handleChangeField('quote_stage', value)
                                   }}
            />,

            'Quote File(Excel)': <input
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
                onChange={(e) => handleUploadFile(e, (response: any) => {
                    dispatch(updateFormData({field: 'image', value: `${response?.data.data.file_url}`}));
                })}
            />,
            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                    disabled/>,
        }

    }


    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)

}

export default HeaderSection;
