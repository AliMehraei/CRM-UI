import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/salesOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    searchContacts, Currencies
    , searchOwners, searchVendor, searchAvailability, searchAccounts, searchQuote, searchDeals, displayImage
} from "../../../../components/Functions/CommonFunctions";
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
        {value: 'Draft', label: 'Draft'},
        {value: 'No Feedback', label: 'No Feedback'},
        {value: 'Negotiation Price', label: 'Negotiation Price'},
        {value: 'Negotiation Conditions', label: 'Negotiation Conditions'},
        {value: 'No Feedback', label: 'No Feedback'},
        {value: 'Open', label: 'Open'},
        {value: 'Lost', label: 'Lost'},
        {value: 'Won', label: 'Won'},
        
    ];


    const fields = {
        'Header': {

            'Account Name': (
                <AsyncSelect
                    defaultOptions={true}
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
                    defaultValue={{
                        value: formState.account?.id,
                        label: (
                            <div key={formState.account?.id} className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{formState.account?.account_name}</div>
                                    <div className="text-xs text-gray-500">{formState.account?.email}</div>
                                </div>
                            </div>
                        ),
                    }}
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
                                    <img
                                        src={formState.contact.image ?? '/assets/images/user-profile.jpeg'}
                                        alt="avatar"
                                        className="w-8 h-8 mr-2 rounded-full"
                                    />
                                ) : null}
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.contact?.first_name + ' ' + formState.contact?.last_name}</div>
                                    <div className="text-xs text-gray-500">{formState.contact?.email}</div>
                                </div>
                            </div>
                        ),
                    }}
                />
            ),
            'Quote Name': (
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
                        value: formState.quote?.id,
                        label: (
                            <div key={formState.quote?.id} className="flex items-center">
                                <div className="text-sm font-bold">{formState.quote?.subject}</div>
                            </div>
                        ),
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
            'Deals Name': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="deal_id"
                    placeholder="Type at least 2 characters to search..."
                    name="deal_id"
                    loadOptions={searchDeals}
                    onChange={({value}: any) => {
                        handleChangeField('deal_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.deal?.id,
                        label: (
                            <div key={formState.deal?.id} className="flex items-center">
                                <div className="text-sm font-bold">{formState.deal?.deal_name}</div>
                            </div>
                        ),
                    }}
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
                    defaultValue={DealStageOption.find((title) => title.value == formState.deal_stage)}
                />
            ),
            'SalesOrders Owner': (
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
                            </div>
                        ),
                    }}
                />
            ),
            'Sales Person': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="sales_person_id"
                    placeholder="Type at least 2 characters to search..."
                    name="sales_person_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('sales_person_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.sales_person?.id,
                        label: (
                            <div key={formState.sales_person?.id} className="flex items-center">
                                {formState.sales_person ? (
                                    <img
                                        src={formState.sales_person.image ?? '/assets/images/user-profile.jpeg'}
                                        alt="avatar"
                                        className="w-8 h-8 mr-2 rounded-full"
                                    />
                                ) : null}
                                <div>
                                    <div className="text-sm font-bold">{formState.sales_person?.name}</div>
                                    <div className="text-xs text-gray-500">{formState.sales_person?.email}</div>
                                </div>
                            </div>
                        ),
                    }}
                />
            ),
            'Approved By': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="approved_by_id"
                    placeholder="Type at least 2 characters to search..."
                    name="approved_by_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('approved_by_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.approved_by?.id,
                        label: (
                            <div key={formState.approved_by?.id} className="flex items-center">
                                {formState.approved_by ? (
                                    <img
                                        src={formState.approved_by.image ?? '/assets/images/user-profile.jpeg'}
                                        alt="avatar"
                                        className="w-8 h-8 mr-2 rounded-full"
                                    />
                                ) : null}
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.approved_by?.first_name + " " + formState.approved_by?.last_name}</div>
                                    <div className="text-xs text-gray-500">{formState.approved_by?.email}</div>
                                </div>
                            </div>
                        ),
                    }}
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
