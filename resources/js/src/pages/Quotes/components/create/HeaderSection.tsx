import AsyncSelect from "react-select/async";
import Select from "react-select";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/quoteFormSlice";
import {
    Currencies,
    searchAccounts, searchContacts, searchDeals,
    searchOwners,
    searchRFQ
} from "../../../../components/Functions/CommonFunctions";
import Api from "../../../../config/api";
import FileUploadComponent from "../../../../components/FormFields/FileUploadComponent";

const HeaderSection = () => {
    const api_instance = new Api();
    const formState = useSelector((state: any) => state.quoteForm);

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

    const handleChangeAccount = async (value: string) => {
        const accountResponse = await api_instance.fetchSingleAccount(value);
        if (accountResponse.status != 200)
            return;
        const account = accountResponse.data.data.account;
        dispatch(updateFormData({['account']: account}));


        const addressFields = [
            'billing_street',
            'billing_city',
            'billing_state',
            'billing_code',
            'billing_country',
            'shipping_street',
            'shipping_city',
            'shipping_state',
            'shipping_code',
            'shipping_country',
        ];

        const formDataUpdate: any = {};
        addressFields.forEach(field => {
            formDataUpdate[field] = account[field] ?? null;
        });
        dispatch(updateFormData(formDataUpdate));
    }


    const fields = {
        'Header': {
            'Account Name': <AsyncSelect
                defaultOptions={true}
                isMulti={false}
                id="account_id"
                required
                name="account_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchAccounts}
                onChange={({value}: any) => {
                    handleChangeField('account_id', value)
                    handleChangeAccount(value);
                }}
                className="flex-1"/>,
            'Contact Name': <AsyncSelect
                defaultOptions={true} isMulti={false} id="contact_id" name="contact_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchContacts}
                onChange={({value}: any) => {
                    handleChangeField('contact_id', value)
                }}
                className="flex-1"/>,
            'RFQ': <AsyncSelect
                defaultOptions={true} isMulti={false} id="rfq_id" name="rfq_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchRFQ}
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
            'Converted by': <AsyncSelect
                defaultOptions={true} isMulti={false} id="converted_by_id" name="converted_by_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchOwners}
                className="flex-1"
                onChange={({value}: any) => {
                    handleChangeField('converted_by_id', value)
                }}
            />,
            'Quote Chance': <Select name='quote_chance' required options={QuoteChances}
                                    className="flex-1"
                                    onChange={({value}: any) => {
                                        handleChangeField('quote_chance', value)
                                    }}
                                    defaultValue={{value: 'unknown', label: 'Unknown'}}
            />,
            'Currency': <Select name="currency" options={Currencies}
                                className="flex-1"
                                onChange={({value}: any) => {
                                    handleChangeField('currency', value)
                                }}
            />,
        },
        '': {
            'Quote Owner': <AsyncSelect
                defaultOptions={true} isMulti={false} id="owner_id" name="owner_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchOwners}
                onChange={({value}: any) => {
                    handleChangeField('owner_id', value)
                }}
                className="flex-1"/>,
            'PM User': <AsyncSelect
                defaultOptions={true} required isMulti={false} id="pm_user_id" name="pm_user_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchOwners}
                onChange={({value}: any) => {
                    handleChangeField('pm_user_id', value)
                }}
                className="flex-1"/>,

            'Deals Name': <AsyncSelect
                defaultOptions={true} isMulti={false} id="deal_id" name="deal_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchDeals}
                onChange={({value}: any) => {
                    handleChangeField('deal_id', value)
                }}
                className="flex-1"/>,

            'Quote Stage': <Select name="quote_stage" required options={QuoteStages}
                                   className="flex-1"
                                   onChange={({value}: any) => {
                                       handleChangeField('quote_stage', value)
                                   }}
                                   defaultValue={{value: 'draft', label: 'Draft'}}
            />,

            'Quote File(Excel)':
                <FileUploadComponent
                    id={'quote_file'}
                    modelName="quote"
                    formState={formState}
                    formAttribute={'quote_file'}
                    updateFormdata={updateFormData}
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
