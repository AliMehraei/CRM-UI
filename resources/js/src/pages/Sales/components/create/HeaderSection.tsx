import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/salesOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {searchContacts,Currencies
    ,searchOwners, searchVendor, searchAvailability, searchAccounts, searchQuote, searchDeals} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const HeaderSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.salesOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const DealStageOption = [
        {value: 'none', label: '-None-'},
        {value: 'draft', label: 'Draft'},
        {value: 'no_feedback', label: 'No Feedback'},
        //TODO
        {value: 'open', label: 'open'},
        {value: 'lost', label: 'lost'},
    ];



    const fields = {
        'Header': {

            'Account Name': (
                <AsyncSelect
                isMulti={false}
                required
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
            'Contact Name': (
                <AsyncSelect
                    isMulti={false}
                    required
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
            'Quote Name': (
                <AsyncSelect
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
            'Deals Name': (
                <AsyncSelect
                    isMulti={false}
                    required
                    id="deal_id"
                    placeholder="Type at least 2 characters to search..."
                    name="deal_id"
                    loadOptions={searchDeals}
                    onChange={({value}: any) => {
                        handleChangeField('deal_id', value)
                    }}
                    className="flex-1"

                />
            ),
            'Deal Stage': (
                <Select
                options={DealStageOption}
                name="deal_stage"
                id="deal_stage"
                onChange={({value}: any) => {
                    handleChangeField('deal_stage', value)
                }}
                className="flex-1"
                />
            ),
            'SalesOrders Owner': (
                <AsyncSelect
                    isMulti={false}
                    required
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
            'Sales Person': (
                <AsyncSelect
                    isMulti={false}
                    required
                    id="sales_person_id"
                    placeholder="Type at least 2 characters to search..."
                    name="sales_person_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('sales_person_id', value)
                    }}
                    className="flex-1"

                />
            ),
            'Approved By': (
                <AsyncSelect
                    isMulti={false}
                    required
                    id="approved_by_id"
                    placeholder="Type at least 2 characters to search..."
                    name="approved_by_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('approved_by_id', value)
                    }}
                    className="flex-1"

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

export default HeaderSection;
