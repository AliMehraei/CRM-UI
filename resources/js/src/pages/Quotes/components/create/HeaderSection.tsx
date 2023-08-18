import AsyncSelect from "react-select/async";
import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";

const HeaderSection = () => {
    const loadAccounts = () => {

    };
    const handleLoadAccounts = () => {

    };
    const loadContacts = () => {

    };
    const handleContactChange = () => {

    };
    const handleChangeRFQs = () => {

    };
    const loadRFQs = () => {

    };

    const loadUsers = () => {

    };
    const handleChangeConvertedBy = () => {

    };

    const QuoteChances = [
        {value: 'none', label: '-None-'},
        {value: 'high', label: 'High'},
        {value: 'unknown', label: 'Unknown'},
        {value: 'low', label: 'Low'},

    ];
    const handleQuoteChanceChange = () => {

    };
    const Currencies = [
        'EUR',
        'USD'
    ]
    const handleChangeQuoteOwner = () => {

    };
    const handleLoadDeals = () => {

    };
    const loadDeals = () => {

    };
    const QuoteStages = [
        {value: 'draft', label: 'Draft'},
        {value: 'no_feedback', label: 'No Feedback'},
        {value: 'negotiation_price', label: 'Negotiation Price'},
        {value: 'negotiation_conditions', label: 'Negotiation Conditions'},
        {value: 'open', label: 'Open'},
        {value: 'lost', label: 'Lost'},
        {value: 'won', label: 'Won'},


    ];
    const handleQuoteStageChange = () => {

    };
    const fields = {
        'Header': {
            'Account Name': <AsyncSelect isMulti={false} id="account_id" name="account_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadAccounts} onChange={handleLoadAccounts} className="flex-1"/>,
            'Contact Name': <AsyncSelect isMulti={false} id="contact_id" name="contact_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadContacts} onChange={handleContactChange} className="flex-1"/>,
            'RFQ': <AsyncSelect isMulti={false} id="rfq_id" name="rfq_id"
                                placeholder="Type at least 2 characters to search..."
                                loadOptions={loadRFQs} onChange={handleChangeRFQs} className="flex-1"/>,
            'Customer RFQ No': <input id="portal_bom_id" type="text" name="customer_rfq_no"
                                      className="form-input flex-1 "/>,

            'Subject': <input required id="subject" name="subject" type="text"
                              className="form-input flex-1 "/>,
            'Converted by': <AsyncSelect isMulti={false} id="rfq_id" name="rfq_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadUsers} onChange={handleChangeConvertedBy}
                                         className="flex-1"/>,
            'Quote Chance': <Select required options={QuoteChances}
                                    onChange={handleQuoteChanceChange} className="flex-1"/>,
            'Currency': <Select options={Currencies}
                                className="flex-1"/>,
        },
        '': {
            'Quote Owner': <AsyncSelect isMulti={false} id="rfq_id" name="rfq_id"
                                        placeholder="Type at least 2 characters to search..."
                                        loadOptions={loadUsers} onChange={handleChangeQuoteOwner}
                                        className="flex-1"/>,
            'Deals Name': <AsyncSelect isMulti={false} id="rfq_id" name="rfq_id"
                                       placeholder="Type at least 2 characters to search..."
                                       loadOptions={loadDeals} onChange={handleLoadDeals}
                                       className="flex-1"/>,
            'Quote Stage': <Select required options={QuoteStages}
                                   onChange={handleQuoteStageChange} className="flex-1"/>,
            'Quote File(Excel)': <input
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
            />,
            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                    disabled/>,
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

export default HeaderSection;
