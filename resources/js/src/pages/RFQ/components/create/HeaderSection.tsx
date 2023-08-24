import AsyncSelect from "react-select/async";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import { RequiredComponent } from "../../../../components/FormFields/RequiredComponent";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import { searchContacts } from "../../../../components/Functions/CommonFunctions";
import { handleUploadFile,searchOwners } from "../../../../components/Functions/CommonFunctions";






const HeaderSection = () => {


    const handleContactChange = () => {

    }

    const RFQSources = [
        { value: 'none', label: '-None-' },
        { value: 'email', label: 'Email' },
        { value: 'telephone', label: 'Telephone' },
        { value: 'web_portal', label: 'Web portal' },
        { value: 'history', label: 'History' }
    ];


    const handleRFQSourceChange = () => {

    }

    const RFQTypes = [
        { value: 'none', label: '-None-' },
        { value: 'cost_saving', label: 'Cost Saving' },
        { value: 'shortage', label: 'Shortage' },
        { value: 'eol', label: 'EOL' },
        { value: 'proactive', label: 'Proactive' },
        { value: 'calculation', label: 'Calculation' },
    ];

    const handleRFQTypeChange = () => {

    }
    const Statuses = [
        { value: 'none', label: '-None-' },
        { value: 'open', label: 'Open' },
        { value: 'open_without_routing', label: 'Open without routing' },
        { value: 'quoted', label: 'Quoted' },
        { value: 'closed', label: 'Closed' },
        { value: 'in_review', label: 'In review' },
    ];
    const handleStatusChange = () => {
    }

   
    const handleOwnerChange = () => {

    }

    const DealStages = [
        { value: 'none', label: '-None-' },
        { value: 'draft', label: 'Draft' },
        { value: 'no_feedback', label: 'No Feedback' },
        { value: 'negotiation_price', label: 'Negotiation Price' },
        { value: 'negotiation_conditions', label: 'Negotiation Conditions' },
        { value: 'Open', label: 'open' },
        { value: 'Open', label: 'open' },
    ]

    const loadUsers = () => {

    }
    const handleUpload = () => {
    }

    const Currencies = [
        'EUR',
        'USD'
    ]

    const fields = {

        'Header': {
            'Account Name': <input id="account-name" type="text" name="account_id" className="form-input flex-1 " />,
            'Contact': <AsyncSelect isMulti={false} id="contact" placeholder="Type at least 2 characters to search..."
                loadOptions={searchContacts} onChange={handleContactChange} className="flex-1" />,
            'Customer RFQ No': <input id="customer_rfq_no" name="customer_rfq_no" className="form-input flex-1 " />,
            'Project Name / Application': <input id="project_name" name="project_name" className="form-input flex-1 " />,
            'RFQ Source': <Select required options={RFQSources}
                onChange={handleRFQSourceChange} className="flex-1" />,
            'RFQ Type': <Select required options={RFQTypes}
                onChange={handleRFQTypeChange} className="flex-1" />,
            'Status': <Select required options={Statuses}
                onChange={handleStatusChange} className="flex-1" />,
            'Date History': <Flatpickr options={{ dateFormat: 'd-m-Y' }} className="form-input flex-1"
                placeholder="MM DD YYYY" />,
            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                disabled />,
            'Portal BOM id': <input id="portal_bom_id" name="portal_bom_id" className="form-input flex-1 " />,
        },
        '': {
            'RFQ Owner': <AsyncSelect isMulti={false} id="owner_id" placeholder="Type at least 2 characters to search..."
                loadOptions={searchOwners} onChange={handleOwnerChange} className="flex-1" />,
            'Deal Stage': <Select options={DealStages}
                onChange={handleStatusChange} className="flex-1" />,

            'PM User': <AsyncSelect isMulti={false} id="owner_id" placeholder="Type at least 2 characters to search..."
                loadOptions={loadUsers} onChange={handleOwnerChange} className="flex-1" />,
            'Customer RFQ File': <input
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
            />,
            'RFQ Dead Line': <Flatpickr options={{ dateFormat: 'd-m-Y' }} className="form-input flex-1"
                placeholder="MM DD YYYY" />,
            'Currency': <Select options={Currencies}
                className="flex-1" />,
            'Vendor RFQs Line': <AsyncSelect isMulti={false} id="owner_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={loadUsers} onChange={handleOwnerChange} className="flex-1" />,
        }

    }

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields} />

        </div>
    </>)
}

export default HeaderSection;
