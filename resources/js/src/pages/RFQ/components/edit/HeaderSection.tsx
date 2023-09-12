import AsyncSelect from "react-select/async";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    Currencies,
    handleUploadFile, searchAccounts,
    searchContacts,
    searchVendor
} from "../../../../components/Functions/CommonFunctions";
import { searchOwners } from "../../../../components/Functions/CommonFunctions";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../store/rfqFormSlice";


const HeaderSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.rfqFormSlice);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };


    const RFQSources = [
        { value: 'none', label: '-None-' },
        { value: 'email', label: 'Email' },
        { value: 'telephone', label: 'Telephone' },
        { value: 'web_portal', label: 'Web portal' },
        { value: 'history', label: 'History' }
    ];


    const RFQTypes = [
        { value: 'none', label: '-None-' },
        { value: 'cost_saving', label: 'Cost Saving' },
        { value: 'shortage', label: 'Shortage' },
        { value: 'eol', label: 'EOL' },
        { value: 'proactive', label: 'Proactive' },
        { value: 'calculation', label: 'Calculation' },
    ];


    const Statuses = [
        { value: 'none', label: '-None-' },
        { value: 'open', label: 'Open' },
        { value: 'open_without_routing', label: 'Open without routing' },
        { value: 'quoted', label: 'Quoted' },
        { value: 'closed', label: 'Closed' },
        { value: 'in_review', label: 'In review' },
    ];


    const DealStages = [
        { value: 'none', label: '-None-' },
        { value: 'draft', label: 'Draft' },
        { value: 'no_feedback', label: 'No Feedback' },
        { value: 'negotiation_price', label: 'Negotiation Price' },
        { value: 'negotiation_conditions', label: 'Negotiation Conditions' },
        { value: 'open', label: 'Open' },
        { value: 'lost', label: 'Lost' },
        { value: 'won', label: 'Won' },
    ]


    const fields = {

        'Header': {
            'Account Name': <AsyncSelect isMulti={false} id="account_id" name="account_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchAccounts}
                onChange={({ value }: any) => {
                    handleChangeField('account_id', value)
                }}
                defaultValue={{
                    value: formState.account?.id,
                    label: (
                        <div key={formState.account?.id} className="flex items-center">
                            {formState.account ? (
                                <img
                                    src={formState.account.image ?? '/assets/images/user-profile.jpeg'}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />
                                ) : null}
                            <div>
                                <div
                                    className="text-sm font-bold">{formState.account?.name}</div>
                                <div
                                    className="text-xs text-gray-500">{formState.account?.email}</div>
                            </div>
                        </div>
                    ),
                }}
                className="flex-1" />,

            'Contact': <AsyncSelect isMulti={false} id="contact" name="contact_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchContacts}
                onChange={({ value }: any) => {
                    handleChangeField('contact_id', value)
                }}
                defaultValue={{
                    value: formState.contact?.id,
                    label: (
                        <div key={formState.contact?.id} className="flex items-center">
                            {formState.contact ? (
                                <img
                                    src={formState.contact.image ?? '/assets/images/user-profile.jpeg'}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />
                                ) : null}
                            <div>
                                <div className="text-sm font-bold">{formState.contact?.name}</div>
                                <div
                                    className="text-xs text-gray-500">{formState.contact?.email}</div>
                            </div>
                        </div>
                    ),
                }}
                className="flex-1" />,
            'Customer RFQ No': <input id="customer_rfq_no" name="customer_rfq_no"
                className="form-input flex-1 "
                defaultValue={formState.customer_rfq_no}
                onChange={(e) => handleChangeField(e.target.name, e.target.value)} />,

            'Project Name / Application': <input id="project_name" name="project_name"
                className="form-input flex-1 "
                defaultValue={formState.project_name}

                onChange={(e) => handleChangeField(e.target.name, e.target.value)} />,

            'RFQ Source': <Select name="rfq_source" required options={RFQSources}
                onChange={({ value }: any) => {
                    handleChangeField('rfq_source', value)
                }}
                defaultValue={RFQSources.find((data) => data.value == formState.rfq_source)}

                className="flex-1" />,

            'RFQ Type': <Select name="rfq_type" required options={RFQTypes}
                onChange={({ value }: any) => {
                    handleChangeField('rfq_type', value)
                }}
                defaultValue={RFQTypes.find((data) => data.value == formState.rfq_type)}

                className="flex-1" />,

            'Status': <Select name='status' required options={Statuses}
                onChange={({ value }: any) => {
                    handleChangeField('status', value)
                }}
                defaultValue={Statuses.find((data) => data.value == formState.status)}
                className="flex-1" />,

            'Date History': <Flatpickr name='date_history'
                options={{
                    dateFormat: 'd-m-Y',
                    defaultDate: `${formState.date_history ? new Date(formState.date_history) : ''}`,
                }}
                defaultValue={formState.date_history}
                className="form-input flex-1"
                placeholder="MM DD YYYY"
                onChange={(_, dateString) => handleChangeField('date_history', dateString)}
            />,
            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                disabled />,

            'Portal BOM id': <input id="portal_bom_id" name="portal_bom_id"
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.portal_bom_id}
                className="form-input flex-1 " />,
        },
        '': {
            'RFQ Owner': <AsyncSelect isMulti={false} id="owner_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchOwners}
                onChange={({ value }: any) => {
                    handleChangeField('owner_id', value)
                }}
                defaultValue={{
                    value: formState.owner?.id,
                    label: (
                        <div key={formState.owner?.id} className="flex items-center">
                            {formState.owner ? (
                                <img
                                    src={formState.owner.image ?? '/assets/images/user-profile.jpeg'}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />
                                ) : null}
                            <div>
                                <div className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                <div
                                    className="text-xs text-gray-500">{formState.owner?.email}</div>
                            </div>
                        </div>
                    ),
                }}
                className="flex-1" />,
            'Deal Stage': <Select name="deal_stage" options={DealStages}
                onChange={({ value }: any) => {
                    handleChangeField('deal_stage', value)
                }}
                defaultValue={DealStages.find((data) => data.value == formState.deal_stage)}
                className="flex-1" />,

            'Customer RFQ File': <div className="flex"><input
                name="customer_rfq_file"
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
                onChange={(e) => handleUploadFile(e, (response: any) => {
                    dispatch(updateFormData({ 'customer_rfq_file': `${response?.data.data.file_url}` }));
                })}
            />
                <a className="btn ml-1 btn-outline-primary" href={formState.customer_rfq_file} target="_blank">Download</a>
            </div>,
            'RFQ Dead Line': <Flatpickr name="rfq_dead_line"
                options={{
                    dateFormat: 'd-m-Y',
                    defaultDate: `${formState.rfq_dead_line ? new Date(formState.rfq_dead_line) : ''}`,
                }}
                defaultValue={formState.rfq_dead_line}
                className="form-input flex-1"
                placeholder="MM DD YYYY"
                onChange={(_, dateString) => handleChangeField('rfq_dead_line', dateString)}
            />,

            'Currency': <Select name="currency" id="currency" options={Currencies}
                className="flex-1"
                onChange={({ value }: any) => {
                    handleChangeField('currency', value)
                }}
                defaultValue={Currencies.find((data) => data.value == formState.currency)}

            />,

            'Vendor RFQs Line': <AsyncSelect id="vendor_rfqs_line"
                name="vendor_rfqs_line"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchVendor}
                onChange={(values: any) => {
                    handleChangeField('vendor_rfqs_lines', values.map((v: any) => v.value))
                }}
                defaultValue={formState.vendor_rfqs_line
                    ? formState.vendor_rfqs_line.map((data: any) => ({
                        value: data.id,
                        label: (
                            <div key={data.id} className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{data.vendor_name}</div>
                                </div>
                            </div>
                        ),
                    }))
                    : []
                }
                isMulti={true}
                className="flex-1" />,
        }

    }

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields} />

        </div>
    </>)
}

export default HeaderSection;
