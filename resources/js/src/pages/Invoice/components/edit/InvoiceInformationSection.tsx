import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
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
import api from "../../../../config/api";

const InvoiceInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.invoiceForm);
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
    }


    const Statuses = [
        {value: 'erzeugt', label: 'Erzeugt'},
        {value: 'genehmigt', label: 'Genehmigt'},
        {value: 'geliefert', label: 'Geliefert'},
        {value: 'abgesagt', label: 'Abgesagt'},


    ];


    const fields = {
        'Invoice Information': {
            'Invoice Owner': <AsyncSelect isMulti={false} id="owner_id" name="owner_id"
                                          placeholder="Type at least 2 characters to search..."
                                          loadOptions={searchOwners}
                                          className="flex-1"
                                          onChange={({value}: any) => {
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
                                                          <div
                                                              className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                                          <div
                                                              className="text-xs text-gray-500">{formState.owner?.email}</div>
                                                      </div>
                                                  </div>
                                              ),
                                          }}/>,
            'Subject': (
                <input
                    id="subject"
                    required
                    name="subject"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.subject}
                />
            ),
            'Invoice Date': <Flatpickr
                options={{
                    dateFormat: 'Y-m-d',
                    position: 'auto left',
                    defaultDate: formState.invoice_date ? new Date(formState.invoice_date) : null as any,
                }}
                value={formState.invoice_date}
                className="form-input flex-1"
                name="invoice_date"
                onChange={(_, dateString) => handleChangeField('invoice_date', dateString)}


            />,
            'Due Date': <Flatpickr
                options={{
                    dateFormat: 'Y-m-d',
                    position: 'auto left',
                    defaultDate: formState.due_date ? new Date(formState.due_date) : null as any,
                }}
                value={formState.invoice_date}
                name="due_date"
                className="form-input flex-1"
                onChange={(_, dateString) => handleChangeField('due_date', dateString)}


            />,
            'Sales Commission': (
                <input
                    id="sales_commission"
                    name="sales_commission"
                    defaultValue={formState.sales_commission}
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Account Name': <AsyncSelect
                isMulti={false}
                id="account_id"
                placeholder="Type at least 2 characters to search..."
                name="account_id"
                loadOptions={searchAccounts}
                onChange={({value}: any) => {
                    handleChangeField('account_id', value)
                    handleChangeAccount(value);

                }}
                className="flex-1"
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
                                    className="text-sm font-bold">{formState.account?.account_name}</div>
                                <div
                                    className="text-xs text-gray-500">{formState.account?.email}</div>
                            </div>
                        </div>
                    ),
                }}
            />,
            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                    disabled/>,
            'ZohoBooksID': (
                <input
                    id="zoho_books_id"
                    name="zoho_books_id"
                    defaultValue={formState.zoho_books_id}
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),

        },
        '': {
            'Sales Order': <AsyncSelect
                isMulti={false}
                id="sales_order_id"
                placeholder="Type at least 2 characters to search..."
                name="sales_order_id"
                loadOptions={searchSalesOrder}
                onChange={({value}: any) => {
                    handleChangeField('sales_order_id', value)
                }}
                defaultValue={{
                    value: formState.sales_order?.id,
                    label: (
                        <div key={formState.sales_order?.id} className="flex items-center">
                            <div
                                className="text-sm font-bold">{formState.sales_order?.subject}</div>
                        </div>
                    ),
                }}
                className="flex-1"
            />,
            'Purchase Order': <input
                id="purchase_order"
                name="purchase_order"
                className="form-input flex-1 "
                defaultValue={formState.purchase_order}
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Deal Stage': <Select
                name="deal_stage"
                id="deal_stage"
                placeholder=""
                options={Stages}
                defaultValue={Stages.find((data) => data.value == formState.deal_stage)}

                onChange={({value}: any) => {
                    handleChangeField('deal_stage', value)
                }}
            />,
            'Excise Duty': (
                <input
                    id="excise_duty"
                    name="excise_duty"
                    className="form-input flex-1 "
                    defaultValue={formState.excise_duty}
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
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
                defaultValue={Statuses.find((data) => data.value == formState.status)}
            />,
            'Contact Name': <AsyncSelect
                isMulti={false}
                id="contact_id"
                placeholder="Type at least 2 characters to search..."
                name="contact_id"
                loadOptions={searchContacts}
                onChange={({value}: any) => {
                    handleChangeField('contact_id', value)
                }}
                defaultValue={{
                    value: formState.contact?.id,
                    label: (
                        <div key={formState.contact?.id} className="flex items-center">
                            <div
                                className="text-sm font-bold">{formState.contact?.first_name} {formState.contact?.last_name}</div>
                        </div>
                    ),
                }}
                className="flex-1"
            />,
            'Currency': <Select id="currency" name="currency" options={Currencies}
                                defaultValue={Currencies.find((data) => data.value == formState.currency)}
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
