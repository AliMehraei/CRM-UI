import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {updateFormData} from "../../../../store/invoiceFormSlice";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import {
    Currencies,
    searchAccounts,
    searchOwners,
    Stages,
    searchContacts, searchSalesOrder
} from "../../../../components/Functions/CommonFunctions";

const InvoiceInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

     const handleChangeAccount = async (value: string) => {
        const accountResponse = await api_instance.fetchSingleAccount(value);
        if (accountResponse.status != 200)
            return;
        const account = accountResponse.data.data.account;
        dispatch(updateFormData({['account']: account}));


        const addressFields = [
            'billing_street',
            'billing_city',
            'billing_state',
            'billing_code',
            'billing_country',
            'shipping_street',
            'shipping_city',
            'shipping_state',
            'shipping_code',
            'shipping_country',
        ];

        const formDataUpdate: any = {};
        addressFields.forEach(field => {
            formDataUpdate[field] = account[field] ?? null;
        });
        dispatch(updateFormData(formDataUpdate));
    }


    const Statuses = [
        {value: 'erzeugt', label: 'Erzeugt'},
        {value: 'genehmigt', label: 'Genehmigt'},
        {value: 'geliefert', label: 'Geliefert'},
        {value: 'abgesagt', label: 'Abgesagt'},


    ];


    const fields = {
        'Invoice Information': {
            'Invoice Owner': <AsyncSelect
                    defaultOptions={true} isMulti={false}
                                          id="owner_id" name="owner_id"
                                          placeholder="Type at least 2 characters to search..."
                                          loadOptions={searchOwners}
                                          className="flex-1"
                                          onChange={({value}: any) => {
                                              handleChangeField('owner_id', value)
                                          }}
            />,
            'Subject': (
                <input
                    id="subject"
                    required
                    name="subject"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Invoice Date': <Flatpickr
                options={{
                    dateFormat: 'Y-m-d',
                    position: 'auto left',
                }}
                value=""
                className="form-input flex-1"
                name="invoice_date"
                onChange={(_, dateString) => handleChangeField('invoice_date', dateString)}

            />,
            'Due Date': <Flatpickr
                options={{
                    dateFormat: 'Y-m-d',
                    position: 'auto left',
                }}
                value=""
                name="due_date"
                className="form-input flex-1"
                onChange={(_, dateString) => handleChangeField('due_date', dateString)}


            />,
            'Sales Commission': (
                <input
                    id="sales_commission"
                    name="sales_commission"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Account Name': <AsyncSelect
                    defaultOptions={true}
                isMulti={false}
                id="account_id"
                placeholder="Type at least 2 characters to search..."
                name="account_id"
                loadOptions={searchAccounts}
                onChange={({value}: any) => {
                    handleChangeField('account_id', value);
                    handleChangeAccount(value);
                }}
                className="flex-1"
            />,
            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                    disabled/>,
            'ZohoBooksID': (
                <input
                    id="zoho_books_id"
                    name="zoho_books_id"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),

        },
        '': {
            'Sales Order': <AsyncSelect
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
            />,
            'Purchase Order': <input
                id="purchase_order"
                name="purchase_order"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Deal Stage': <Select
                name="deal_stage"
                id="deal_stage"
                placeholder=""
                options={Stages}
                onChange={({value}: any) => {
                    handleChangeField('deal_stage', value)
                }}
            />,
            'Excise Duty': (
                <input
                    id="excise_duty"
                    name="excise_duty"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Status': <Select
                name="status"
                id="status"
                placeholder=""
                options={Statuses}
                onChange={({value}: any) => {
                    handleChangeField('status', value)
                }}
            />,
            'Contact Name': <AsyncSelect
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
            />,
            'Currency': <Select id="currency" name="currency" options={Currencies}
                                className="flex-1"/>,


        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )
}

export default InvoiceInformationSection;
