import AsyncSelect from "react-select/async";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";






const HeaderSection = () => {
    const loadContacts = async (inputValue: any) => {
        const fetchedContacts = [
            {key: 1, value: 'contact1', label: 'Contact 1'},
            {key: 2, value: 'contact2', label: 'Contact 2'},
            // ... other contacts ...
        ];
        return fetchedContacts;
    }

    const handleContactChange = () => {

    }

    const RFQSources = [
        {value: 'none', label: '-None-'},
        {value: 'email', label: 'Email'},
        {value: 'telephone', label: 'Telephone'},
        {value: 'web_portal', label: 'Web portal'},
        {value: 'history', label: 'History'}
    ];


    const handleRFQSourceChange = () => {

    }

    const RFQTypes = [
        {value: 'none', label: '-None-'},
        {value: 'cost_saving', label: 'Cost Saving'},
        {value: 'shortage', label: 'Shortage'},
        {value: 'eol', label: 'EOL'},
        {value: 'proactive', label: 'Proactive'},
        {value: 'calculation', label: 'Calculation'},
    ];

    const handleRFQTypeChange = () => {

    }
    const Statuses = [
        {value: 'none', label: '-None-'},
        {value: 'open', label: 'Open'},
        {value: 'open_without_routing', label: 'Open without routing'},
        {value: 'quoted', label: 'Quoted'},
        {value: 'closed', label: 'Closed'},
        {value: 'in_review', label: 'In review'},
    ];
    const handleStatusChange = () => {
    }

    const loadOwners = () => {

    }
    const handleOwnerChange = () => {

    }

    const DealStages = [
        {value: 'none', label: '-None-'},
        {value: 'draft', label: 'Draft'},
        {value: 'no_feedback', label: 'No Feedback'},
        {value: 'negotiation_price', label: 'Negotiation Price'},
        {value: 'negotiation_conditions', label: 'Negotiation Conditions'},
        {value: 'Open', label: 'open'},
        {value: 'Open', label: 'open'},
    ]

    const loadUsers = () => {

    }
    const handleUpload = () => {
    }

    const Currencies = [
        'EUR',
        'USD'
    ]

    const Header = {

        'Header': {
            'Account Name': <input id="account-name" type="text" name="account_id" className="form-input flex-1 "/>,
            'Contact': <AsyncSelect isMulti={false} id="contact" placeholder="Type at least 2 characters to search..."
                                    loadOptions={loadContacts} onChange={handleContactChange} className="flex-1"/>,
            'Customer RFQ No': <input id="customer_rfq_no" name="customer_rfq_no" className="form-input flex-1 "/>,
            'Project Name / Application': <input id="project_name" name="project_name" className="form-input flex-1 "/>,
            'RFQ Source': <Select required options={RFQSources}
                                  onChange={handleRFQSourceChange} className="flex-1"/>,
            'RFQ Type': <Select required options={RFQTypes}
                                onChange={handleRFQTypeChange} className="flex-1"/>,
            'Status': <Select required options={Statuses}
                              onChange={handleStatusChange} className="flex-1"/>,
            'Date History': <Flatpickr options={{dateFormat: 'd-m-Y'}} className="form-input flex-1"
                                       placeholder="MM DD YYYY"/>,
            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                    disabled/>,
            'Portal BOM id': <input id="portal_bom_id" name="portal_bom_id" className="form-input flex-1 "/>,
        },
        '': {
            'RFQ Owner': <AsyncSelect isMulti={false} id="owner_id" placeholder="Type at least 2 characters to search..."
                                      loadOptions={loadOwners} onChange={handleOwnerChange} className="flex-1"/>,
            'Deal Stage': <Select options={DealStages}
                                  onChange={handleStatusChange} className="flex-1"/>,

            'PM User': <AsyncSelect isMulti={false} id="owner_id" placeholder="Type at least 2 characters to search..."
                                    loadOptions={loadUsers} onChange={handleOwnerChange} className="flex-1"/>,
            'Customer RFQ File': <input
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
            />,
            'RFQ Dead Line': <Flatpickr options={{dateFormat: 'd-m-Y'}} className="form-input flex-1"
                                        placeholder="MM DD YYYY"/>,
            'Currency': <Select options={Currencies}
                                className="flex-1"/>,
            'Vendor RFQs Line': <AsyncSelect isMulti={false} id="owner_id"
                                             placeholder="Type at least 2 characters to search..."
                                             loadOptions={loadUsers} onChange={handleOwnerChange} className="flex-1"/>,
        }

    }

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            {Object.entries(Header).map(([sectionTitle, sectionContent], index) => (
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
