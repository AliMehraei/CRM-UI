import AsyncSelect from "react-select/async";
import Select from "react-select";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../store/quoteFormSlice";
import {
    Currencies, handleUploadFile,
    searchAccounts, searchContacts, searchDeals,
    searchOwners,
    searchRFQ
} from "../../../../components/Functions/CommonFunctions";

const HeaderSection = () => {
    const formState = useSelector((state: any) => state.quoteForm);
    const dispatch = useDispatch();

    const QuoteChances = [
        { value: 'none', label: '-None-' },
        { value: 'high', label: 'High' },
        { value: 'unknown', label: 'Unknown' },
        { value: 'low', label: 'Low' },

    ];

    const QuoteStages = [
        { value: 'draft', label: 'Draft' },
        { value: 'no_feedback', label: 'No Feedback' },
        { value: 'negotiation_price', label: 'Negotiation Price' },
        { value: 'negotiation_conditions', label: 'Negotiation Conditions' },
        { value: 'open', label: 'Open' },
        { value: 'lost', label: 'Lost' },
        { value: 'won', label: 'Won' },


    ];
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };
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
                            <img src={formState.account?.image} alt="avatar"
                                className="w-8 h-8 mr-2 rounded-full" />
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
            'Contact Name': <AsyncSelect isMulti={false} id="contact_id" name="contact_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchContacts}
                onChange={({ value }: any) => {
                    handleChangeField('contact_id', value)
                }}
                defaultValue={{
                    value: formState.contact?.id,
                    label: (
                        <div key={formState.contact?.id} className="flex items-center">
                            <img src={formState.contact?.avatar} alt="avatar"
                                className="w-8 h-8 mr-2 rounded-full" />
                            <div>
                                <div
                                    className="text-sm font-bold">{formState.contact?.name}</div>
                                <div
                                    className="text-xs text-gray-500">{formState.contact?.email}</div>
                            </div>
                        </div>
                    ),
                }}

                className="flex-1" />,
            'RFQ': <AsyncSelect isMulti={false} id="rfq_id" name="rfq_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchRFQ}
                onChange={({ value }: any) => {
                    handleChangeField('rfq_id', value)
                }}
                defaultValue={{
                    value: formState.rfq?.id,
                    label: (
                        <div key={formState.rfq?.id} className="flex items-center">
                            <div>
                                <div className="text-sm font-bold">{formState.rfq?.rfq_name}</div>
                            </div>
                        </div>
                    ),
                }}
                className="flex-1" />,

            'Customer RFQ No': <input id="customer_rfq_no" type="text" name="customer_rfq_no"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.customer_rfq_no}
            />,

            'Subject': <input required id="subject" name="subject" type="text"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.subject}
            />,
            'Converted by': <AsyncSelect isMulti={false} id="converted_by_id" name="converted_by_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={searchOwners}
                                         className="flex-1"
                                         onChange={({value}: any) => {
                                             handleChangeField('converted_by_id', value)
                                         }}
                                         defaultValue={{
                                             value: formState.converted_by?.id,
                                             label: (
                                                 <div key={formState.converted_by?.id} className="flex items-center">
                                                     <div
                                                         className="text-sm font-bold">{formState.converted_by?.first_name + " " + formState.converted_by?.last_name}</div>
                                                 </div>
                                             ),
                                         }}
            />,
            'Quote Chance': <Select name='quote_chance' required options={QuoteChances}
                                    className="flex-1"
                                    onChange={({value}: any) => {
                                        handleChangeField('quote_chance', value)
                                    }}
                                    defaultValue={QuoteChances.find((title) => title.value == formState.quote_chance)}
            />,
            'Currency': <Select name="currency" options={Currencies}
                className="flex-1"
                onChange={({ value }: any) => {
                    handleChangeField('currency', value)
                }}
                defaultValue={Currencies.find((title) => title.value == formState.currency)}
            />,
        },
        '': {
            'Quote Owner': <AsyncSelect isMulti={false} id="owner_id" name="owner_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchOwners}
                onChange={({ value }: any) => {
                    handleChangeField('owner_id', value)
                }}
                defaultValue={{
                    value: formState.owner?.id,
                    label: (
                        <div key={formState.owner?.id} className="flex items-center">
                            <img src={formState.owner?.avatar} alt="avatar"
                                className="w-8 h-8 mr-2 rounded-full" />
                            <div>
                                <div
                                    className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                <div
                                    className="text-xs text-gray-500">{formState.owner?.email}</div>
                            </div>
                        </div>
                    ),
                }}
                className="flex-1" />,

            'PM User': <AsyncSelect required isMulti={false} id="pm_user_id" name="pm_user_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchOwners}
                onChange={({ value }: any) => {
                    handleChangeField('pm_user_id', value)
                }}
                defaultValue={{
                    value: formState.pm?.id,
                    label: (
                        <div key={formState.pm?.id} className="flex items-center">
                            <img src={formState.pm?.avatar} alt="avatar"
                                className="w-8 h-8 mr-2 rounded-full" />
                            <div>
                                <div
                                    className="text-sm font-bold">{formState.pm?.first_name + " " + formState.pm?.last_name}</div>
                                <div
                                    className="text-xs text-gray-500">{formState.pm?.email}</div>
                            </div>
                        </div>
                    ),
                }}
                className="flex-1" />,

            'Deals Name': <AsyncSelect isMulti={false} id="deal_id" name="deal_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchDeals}
                onChange={({ value }: any) => {
                    handleChangeField('deal_id', value)
                }}
                defaultValue={{
                    value: formState.deal?.id,
                    label: (
                        <div key={formState.deal?.id} className="flex items-center">
                            <div
                                className="text-sm font-bold">{formState.deal?.deal_name}</div>

                        </div>
                    ),
                }}
                className="flex-1" />,

            'Quote Stage': <Select name="quote_stage" required options={QuoteStages}
                className="flex-1"
                onChange={({ value }: any) => {
                    handleChangeField('quote_stage', value)
                }}
                defaultValue={QuoteStages.find((title) => title.value == formState.quote_stage)}

            />,

            'Quote File(Excel)':
                <div className="flex">
                    <input
                        name="quote_file"
                        type="file"
                        className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                        accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
                        onChange={(e) => handleUploadFile(e, (response: any) => {
                            dispatch(updateFormData({ field: 'quote_file', value: `${response?.data.data.file_url}` }));
                        })}
                    />
                    <a className="ml-1 cursor-pointer btn btn-outline-primary" href={formState.quote_file} target="_blank">Download</a>
                </div>
            ,
            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                disabled />,
        }

    }


    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields} />

        </div>
    </>)

}

export default HeaderSection;
