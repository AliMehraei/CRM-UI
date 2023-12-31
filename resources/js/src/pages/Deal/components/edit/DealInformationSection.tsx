import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/dealFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    searchAccounts, searchContacts, searchSalesOrder, Currencies
    , searchLead, searchQuote, searchInvoice, searchOwners, searchRFQ, displayImage, handleCopySelect
} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";
import React, {useState} from "react";
import {
    DealLeadSourceOption,
    DealPipelineOption,
    DealStageExcessOption, DealStageOption,
    DealTypeOption
} from "../../../../components/Options/SelectOptions";

const DealInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.dealForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const [stageOption, setStageOption] = useState<any>(formState.deal_pipeline == 'Deal' ? DealStageOption : DealStageExcessOption)


    const fields = {
        'Deals Information': {
            'Deals Owner': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.owner?.id,
                        label: (
                            <div key={formState.owner?.id} className="flex items-center">
                                {formState.owner ? (
                                    <img
                                        src={displayImage(formState.owner.avatar_data)}
                                        alt="avatar"
                                        className="w-8 h-8 mr-2 rounded-full"
                                    />
                                ) : null}
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                    <div className="text-xs text-gray-500">{formState.owner?.email}</div>
                                </div>
                                <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.owner?.first_name + " " + formState.owner?.last_name}`)}>
                                    Copy & Select
                                </button>
                            </div>
                        ),
                    }}
                />
            ),
            'Deals Name': (
                <input
                    id="deal_name"
                    name="deal_name"
                    className="form-input flex-1 "
                    onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.deal_name}
                />
            ),
            'Account Name': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="account_id"
                    placeholder="Type at least 2 characters to search..."
                    name="account_id"
                    loadOptions={searchAccounts}
                    onChange={({value}: any) => {
                        handleChangeField('account_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.account?.id,
                        label: (
                            <div key={formState.account?.id} className="flex items-center">
                                {formState.account ? (
                                    <>
                                    <img
                                        src={displayImage(formState.account.image)}
                                        alt="avatar"
                                        className="w-8 h-8 mr-2 rounded-full"
                                    />

                                <div>
                                    <div className="text-sm font-bold">{formState.account?.account_name}</div>
                                    <div className="text-xs text-gray-500">{formState.account?.email}</div>
                                </div>
                                        <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.account?.account_name}`)}>
                                            Copy & Select
                                        </button>
                                </>
                                    ) : null}
                            </div>
                        ),
                    }}
                />
            ),
            'Type': (
                <Select
                    options={DealTypeOption}
                    name="deal_type"
                    id="deal_type"
                    onChange={({value}: any) => {
                        handleChangeField('deal_type', value)
                    }}
                    className="flex-1"
                    defaultValue={DealTypeOption.find((title) => title.value == formState.deal_type)}
                />
            ),
            'Expected Revenue': (
                <input id="expected_revenue"
                       name="expected_revenue" type="text"
                       className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                       disabled
                       defaultValue={formState.expected_revenue ?? 1}
                />
            ),
            'Lead Source': (
                <Select
                    options={DealLeadSourceOption}
                    name="lead_source"
                    id="lead_source"
                    onChange={({value}: any) => {
                        handleChangeField('lead_source', value)
                    }}
                    className="flex-1"
                    defaultValue={DealLeadSourceOption.find((title) => title.value == formState.lead_source)}
                />
            ),
            'Contact Name': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="contact_id"
                    placeholder="Type at least 2 characters to search..."
                    name="contact_id"
                    loadOptions={searchContacts}
                    onChange={({value}: any) => {
                        handleChangeField('contact_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.contact?.id,
                        label: (
                            <div key={formState.contact?.id} className="flex items-center">
                                {formState.contact ? (
                                    <>
                                    <img
                                        src={formState.contact.image ?? '/assets/images/user-profile.jpeg'}
                                        alt="avatar"
                                        className="w-8 h-8 mr-2 rounded-full"
                                    />

                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.contact?.first_name + ' ' + formState.contact?.last_name}</div>
                                    <div className="text-xs text-gray-500">{formState.contact?.email}</div>
                                </div>
                                        <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.contact?.first_name + ' ' + formState.contact?.last_name}`)}>
                                            Copy & Select
                                        </button>
                                </>
                                    ) : null}
                            </div>
                        ),
                    }}
                />
            ),
            'Lead': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="lead_id"
                    placeholder="Type at least 2 characters to search..."
                    name="lead_id"
                    loadOptions={searchLead}
                    onChange={({value}: any) => {
                        handleChangeField('lead_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.lead_id,
                        label: (
                            <div key={formState.lead_id} className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{formState.lead?.company}</div>
                                    {
                                        formState.lead ?
                                        (
                                            <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.lead?.company}`)}>
                                                Copy & Select
                                            </button>
                                        ) : null
                                    }
                                </div>
                            </div>
                        )
                    }}
                />
            ),
            'RFQ': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="rfq_id"
                    placeholder="Type at least 2 characters to search..."
                    name="rfq_id"
                    loadOptions={searchRFQ}
                    onChange={({value}: any) => {
                        handleChangeField('rfq_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.rfq_id,
                        label: (
                            <div key={formState.rfq_id}
                                 className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{formState.rfq?.rfq_name}</div>
                                    {
                                        formState.rfq ?
                                            (
                                                <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.rfq?.rfq_name}`)}>
                                                    Copy & Select
                                                </button>
                                            ) : null
                                    }
                                </div>
                            </div>
                        )
                    }}
                />
            ),
            'Quote': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="quote_id"
                    placeholder="Type at least 2 characters to search..."
                    name="quote_id"
                    loadOptions={searchQuote}
                    onChange={({value}: any) => {
                        handleChangeField('quote_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.quote_id,
                        label: (
                            <div key={formState.quote_id}
                                 className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{formState.quote?.subject}</div>
                                    {
                                        formState.quote ?
                                            (
                                                <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.quote?.subject}`)}>
                                                    Copy & Select
                                                </button>
                                            ) : null
                                    }
                                </div>
                            </div>
                        )
                    }}
                />
            ),
            'Sales Order': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="sales_order_id"
                    placeholder="Type at least 2 characters to search..."
                    name="sales_order_id"
                    loadOptions={searchSalesOrder}
                    onChange={({value}: any) => {
                        handleChangeField('sales_order_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.sales_order_id,
                        label: (
                            <div key={formState.sales_order_id}
                                 className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{formState.sales_order?.subject}</div>
                                    {
                                        formState.sales_order ?
                                            (
                                                <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.sales_order?.subject}`)}>
                                                    Copy & Select
                                                </button>
                                            ) : null
                                    }
                                </div>
                            </div>
                        )
                    }}
                />
            ),
            'Invoice': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="invoice_id"
                    placeholder="Type at least 2 characters to search..."
                    name="invoice_id"
                    loadOptions={searchInvoice}
                    onChange={({value}: any) => {
                        handleChangeField('invoice_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.invoice_id,
                        label: (
                            <div key={formState.invoice_id}
                                 className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{formState.invoice?.subject}</div>
                                    {
                                        formState.invoice ?
                                            (
                                                <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.invoice?.subject}`)}>
                                                    Copy & Select
                                                </button>
                                            ) : null
                                    }
                                </div>
                            </div>
                        )
                    }}
                />
            ),

            'Currency': (
                <Select
                    options={Currencies}
                    name="currency"
                    id="currency"
                    onChange={({value}: any) => {
                        handleChangeField('currency', value)
                    }}
                    className="flex-1"
                    defaultValue={Currencies.find((title) => title.value == formState.currency)}
                />
            ),


        },
        '': {
            'Amount': (
                <input
                    id="amount"
                    type="number"
                    name="amount"
                    className="form-input flex-1 "
                    onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.amount}
                />
            ),
            'Closing Date': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                        defaultDate: formState.closing_date ? new Date(formState.closing_date) : null as any,
                    }}
                    name="closing_date"
                    value={formState.closing_date ? new Date(formState.closing_date) : ''}
                    className="form-input flex-1"
                    onChange={(_, dateString) => handleChangeField('closing_date', dateString)} // Update the field value on change

                />
            ),
            'Pipeline': (
                <Select
                    options={DealPipelineOption}
                    name="deal_pipeline"
                    id="deal_pipeline"
                    onChange={({value}: any) => {
                        handleChangeField('deal_pipeline', value)
                        setStageOption(value == 'Deal' ? DealStageOption : DealStageExcessOption)
                    }}
                    className="flex-1"
                    defaultValue={DealPipelineOption.find((title) => title.value == formState.deal_pipeline)}

                />
            ),
            'Stage': (
                <Select
                    options={stageOption}
                    name="deal_stage"
                    id="deal_stage"
                    onChange={({value}: any) => {
                        handleChangeField('deal_stage', value)
                    }}
                    className="flex-1"
                    defaultValue={formState.deal_pipeline == 'Deal' ?
                        DealStageOption.find((title) => title.value == formState.deal_stage) :
                        DealStageOption.find((title) => title.value == formState.deal_stage)
                    }
                />
            ),
            'Probability (%)': (
                <input
                    id="probability"
                    name="probability"
                    className="form-input flex-1 "
                    onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.probability}
                />
            ),
            'Next Step': (
                <input
                    id="next_step"
                    name="next_step"
                    className="form-input flex-1 "
                    onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.next_step}
                />
            ),
            'Exchange Rate': (
                <input id="exchange_rate"
                       name="exchange_rate" type="text"
                       className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                       disabled
                       defaultValue={formState.exchange_rate ?? 1}
                />
            ),

            'Lead Reference': (
                <input
                    id="lead_reference"
                    name="lead_reference"
                    className="form-input flex-1 "
                    onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.lead_reference}
                />
            ),

        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>
            </div>
        </>
    )
}

export default DealInformationSection;
