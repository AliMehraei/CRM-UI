import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/dealFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    searchAccounts, searchContacts, searchSalesOrder, Currencies
    , searchLead, searchQuote, searchInvoice, searchOwners, searchRFQ
} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";
import {useState} from "react";
import DealsByStage from "../../../Dashboard/components/admin/DealsByStage";

const DealInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.dealForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const LeadSourceOption = [
        {value: 'none', label: '-None-'},
        {value: 'unangemeldeter', label: 'Unangemeldeter Anruf/Besuch'},
        {value: 'mitarbeitervermittlung', label: 'Mitarbeitervermittlung'},
        {value: 'kunden', label: 'Kunden Vermittlung'},
        {value: 'teilnehmer', label: 'Teilnehmer'},
        {value: 'mess', label: 'Mess'},

    ];
    const TypeOption = [
        {value: 'none', label: '-None-'},
        {value: 'existierendes', label: 'Existierendes Geschäft'},
        {value: 'neues', label: 'Neues Geschäft'},


    ];
    const PipelineOption = [
        {value: 'deal', label: 'Deal'},
        {value: 'excess', label: 'Excess'},


    ];
    const StageExcessOption = [
        {value: 'Qualifikation', label: 'Qualifikation'},
    ];
    const StageDealOption = [
        {value: '0.0 Cold lead unqualified (CLU)', label: '0.0 Cold lead / unqualified (CLU)'},
        {value: '1.0 Cold lead qualified (CLQ)', label: '1.0 Cold lead qualified (CLQ)'},
        {value: '2.0 First contact made (FCM)', label: '2.0 First contact made (FCM)'},
        {value: '3.0 warm lead qualified (WLQ)', label: '3.0 warm lead qualified (WLQ)'},
        {value: '4.0 Hot lead (HLQ)', label: '4.0 Hot lead (HLQ)'},
        {value: 'Lost Lead', label: 'Close Lead / Lost Lead'},
    ];


    const [stageOption, setStageOption] = useState<any>(StageExcessOption)

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

                />
            ),
            'Deals Name': (
                <input
                    id="deal_name"
                    name="deal_name"
                    className="form-input flex-1 "
                    onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
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

                />
            ),
            'Type': (
                <Select
                    options={TypeOption}
                    name="deal_type"
                    id="deal_type"
                    onChange={({value}: any) => {
                        handleChangeField('deal_type', value)
                    }}
                    className="flex-1"
                />
            ),
            'Expected Revenue': (
                <input id="expected_revenue"
                       name="expected_revenue" type="text"
                       value="1"
                       className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                       disabled
                />
            ),
            'Lead Source': (
                <Select
                    options={LeadSourceOption}
                    name="lead_source"
                    id="lead_source"
                    onChange={({value}: any) => {
                        handleChangeField('lead_source', value)
                    }}
                    className="flex-1"
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
                />
            ),
            'Closing Date': (
                <Flatpickr

                    name="closing_date"
                    options={{dateFormat: 'Y-m-d '}}
                    className="form-input flex-1"
                    placeholder="YYYY-MM-DD"
                    onChange={(_, dateString) => handleChangeField('closing_date', dateString)}

                />
            ),
            'Pipeline': (
                <Select
                    options={PipelineOption}
                    name="deal_pipeline"
                    id="deal_pipeline"
                    onChange={({value}: any) => {
                        handleChangeField('deal_pipeline', value)
                        setStageOption(value == 'deal' ? StageDealOption : StageExcessOption)

                    }}
                    className="flex-1"

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
                />
            ),
            'Probability (%)': (
                <input
                    id="probability"
                    name="probability"
                    className="form-input flex-1 "
                    onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Next Step': (
                <input
                    id="next_step"
                    name="next_step"
                    className="form-input flex-1 "
                    onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Exchange Rate': (
                <input id="exchange_rate"
                       name="exchange_rate" type="text"
                       value="1"
                       className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                       disabled
                />
            ),

            'Lead Reference': (
                <input
                    id="lead_reference"
                    name="lead_reference"
                    className="form-input flex-1 "
                    onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
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
