import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {updateFormData} from "../../../../store/invoiceFormSlice";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import {
    Currencies,
    loadAccounts,
    loadOrders,
    loadOwners,
    Stages
} from "../../../../components/Functions/CommonFunctions";

const InvoiceInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const Statuses = [
        {value: 'erzeugt', label: 'Erzeugt'},
        {value: 'genehmigt', label: 'Genehmigt'},
        {value: 'geliefert', label: 'Geliefert'},
        {value: 'abgesagt', label: 'Abgesagt'},


    ];

    const loadContacts = () => {

    };
    const fields = {
        'Invoice Information': {
            'Invoice Owner': <AsyncSelect isMulti={false} id="vendor_line_card_id" name="vendor_line_card_id"
                                          placeholder="Type at least 2 characters to search..."
                                          loadOptions={loadOwners}
                                          className="flex-1"
                                          onChange={({value}: any) => {
                                              handleChangeField('vendor_line_card_id', value)
                                          }}
            />,
            'Subject': (
                <input
                    id="name"
                    required
                    name="name"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
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
                onChange={(e) => handleChangeField('invoice_date', e[0])}

            />,
            'Due Date': <Flatpickr
                options={{
                    dateFormat: 'Y-m-d',
                    position: 'auto left',
                }}
                value=""
                name="due_date"
                className="form-input flex-1"
                onChange={(e) => handleChangeField('due_date', e[0])}

            />,
            'Sales Commission': (
                <input
                    id="name"
                    name="name"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Account Name': <AsyncSelect
                isMulti={false}
                id="account_id"
                placeholder="Type at least 2 characters to search..."
                name="account_id"
                loadOptions={loadAccounts}
                onChange={({value}: any) => {
                    handleChangeField('account_id', value)
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
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),

        },
        '': {
            'Sales Order': <AsyncSelect
                isMulti={false}
                id="order_id"
                placeholder="Type at least 2 characters to search..."
                name="order_id"
                loadOptions={loadOrders}
                onChange={({value}: any) => {
                    handleChangeField('order_id', value)
                }}
                className="flex-1"
            />,
            'Purchase Order': <input
                id="purchase_order"
                name="purchase_order"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Deal Stage': <Select
                name="deal_stage"
                id="deal_stage"
                placeholder="Select Product Type..."
                options={Stages}
                onChange={({value}: any) => {
                    handleChangeField('deal_stage', value)
                }}
            />,
            'Excise Duty': (
                <input
                    id="name"
                    name="name"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Status': <Select
                name="status"
                id="status"
                placeholder="Select Product Type..."
                options={Statuses}
                onChange={({value}: any) => {
                    handleChangeField('status', value)
                }}
            />,
            'Contact Name': <AsyncSelect
                isMulti={false}
                id="contact_id"
                placeholder="Type at least 2 characters to search..."
                name="contact_id"
                loadOptions={loadContacts}
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
