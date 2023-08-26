import AsyncSelect from "react-select/async";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    Currencies,
    handleUploadFile,
    searchContacts,
    searchVendor
} from "../../../../components/Functions/CommonFunctions";
import {searchOwners} from "../../../../components/Functions/CommonFunctions";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/rfqFormSlice";


const HeaderSection = () => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const RFQSources = [
        {value: 'none', label: '-None-'},
        {value: 'email', label: 'Email'},
        {value: 'telephone', label: 'Telephone'},
        {value: 'web_portal', label: 'Web portal'},
        {value: 'history', label: 'History'}
    ];


    const RFQTypes = [
        {value: 'none', label: '-None-'},
        {value: 'cost_saving', label: 'Cost Saving'},
        {value: 'shortage', label: 'Shortage'},
        {value: 'eol', label: 'EOL'},
        {value: 'proactive', label: 'Proactive'},
        {value: 'calculation', label: 'Calculation'},
    ];


    const Statuses = [
        {value: 'none', label: '-None-'},
        {value: 'open', label: 'Open'},
        {value: 'open_without_routing', label: 'Open without routing'},
        {value: 'quoted', label: 'Quoted'},
        {value: 'closed', label: 'Closed'},
        {value: 'in_review', label: 'In review'},
    ];


    const DealStages = [
        {value: 'none', label: '-None-'},
        {value: 'draft', label: 'Draft'},
        {value: 'no_feedback', label: 'No Feedback'},
        {value: 'negotiation_price', label: 'Negotiation Price'},
        {value: 'negotiation_conditions', label: 'Negotiation Conditions'},
        {value: 'Open', label: 'open'},
        {value: 'Open', label: 'open'},
    ]


    const fields = {

        'Header': {
            'Account Name': <input id="account-name" type="text" name="account_id"
                                   className="form-input flex-1 "/>,
            'Contact': <AsyncSelect isMulti={false} id="contact" name="contact_id"
                                    placeholder="Type at least 2 characters to search..."
                                    loadOptions={searchContacts}
                                    onChange={({value}: any) => {
                                        handleChangeField('contact_id', value)
                                    }}
                                    className="flex-1"/>,
            'Customer RFQ No': <input id="customer_rfq_no" name="customer_rfq_no"
                                      className="form-input flex-1 "
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

            'Project Name / Application': <input id="project_name" name="project_name"
                                                 className="form-input flex-1 "
                                                 onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

            'RFQ Source': <Select name="rfq_source" required options={RFQSources}
                                  onChange={({value}: any) => {
                                      handleChangeField('rfq_source', value)
                                  }}
                                  className="flex-1"/>,

            'RFQ Type': <Select name="rfq_type" required options={RFQTypes}
                                onChange={({value}: any) => {
                                    handleChangeField('rfq_type', value)
                                }}
                                className="flex-1"/>,

            'Status': <Select name='status' required options={Statuses}
                              onChange={({value}: any) => {
                                  handleChangeField('rfq_type', value)
                              }} className="flex-1"/>,

            'Date History': <Flatpickr name='date_history' options={{dateFormat: 'd-m-Y'}} className="form-input flex-1"
                                       placeholder="MM DD YYYY"
                                       onChange={(_, dateString) => handleChangeField('date_history', dateString)}
            />,
            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                    disabled/>,
            'Portal BOM id': <input id="portal_bom_id" name="portal_bom_id"
                                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                    className="form-input flex-1 "/>,
        },
        '': {
            'RFQ Owner': <AsyncSelect isMulti={false} id="owner_id"
                                      placeholder="Type at least 2 characters to search..."
                                      loadOptions={searchOwners}
                                      onChange={({value}: any) => {
                                          handleChangeField('owner_id', value)
                                      }}
                                      className="flex-1"/>,
            'Deal Stage': <Select name="deal_stage" options={DealStages}
                                  onChange={({value}: any) => {
                                      handleChangeField('deal_stage', value)
                                  }}
                                  className="flex-1"/>,

            'PM User': <AsyncSelect isMulti={false} id="pm_user_id"
                                    placeholder="Type at least 2 characters to search..."
                                    loadOptions={searchOwners}
                                    onChange={({value}: any) => {
                                        handleChangeField('pm_user_id', value)
                                    }}
                                    className="flex-1"/>,
            'Customer RFQ File': <input
                name="customer_rfq_file"
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
                onChange={(e) => handleUploadFile(e, (response: any) => {
                    dispatch(updateFormData({'customer_rfq_file': `${response?.data.data.file_url}`}));
                })}
            />,
            'RFQ Dead Line': <Flatpickr name="rfq_dead_line" options={{dateFormat: 'd-m-Y'}}
                                        className="form-input flex-1"
                                        placeholder="MM DD YYYY"
                                        onChange={(_, dateString) => handleChangeField('rfq_dead_line', dateString)}
            />,

            'Currency': <Select name="currency" id="currency" options={Currencies}
                                className="flex-1"
                                onChange={({value}: any) => {
                                    handleChangeField('currency', value)
                                }}
            />,

            'Vendor RFQs Line': <AsyncSelect id="vendor_rfq_lines"
                                             name="vendor_rfq_lines"
                                             placeholder="Type at least 2 characters to search..."
                                             loadOptions={searchVendor}
                                             onChange={({value}: any) => {
                                                 handleChangeField('vendor_rfq_lines', value)
                                             }}
                                             className="flex-1"/>,
        }

    }

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)
}

export default HeaderSection;
