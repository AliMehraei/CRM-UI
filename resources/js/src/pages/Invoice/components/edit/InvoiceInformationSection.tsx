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
    searchContacts, searchSalesOrder, displayImage, handleCopySelect
} from "../../../../components/Functions/CommonFunctions";
import api from "../../../../config/api";
import {InvoiceDealStages, InvoiceStatuses} from "../../../../components/Options/SelectOptions";
import React from "react";

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


    const fields = {
        'Invoice Information': {
            'Invoice Owner': <AsyncSelect
                    defaultOptions={true} isMulti={false} id="owner_id" name="owner_id"
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
                                                              src={displayImage(formState.owner.avatar_data)}
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
                                                      <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.owner?.first_name + " " + formState.owner?.last_name}`)}>
                                                          Copy & Select
                                                      </button>
                                                  </div>
                                              ),
                                          }}/>,
            'Subject': (
                <input
                    id="subject"
                    required
                    name="subject"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
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
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Account Name': <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    required
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
                                    src={displayImage(formState.account.image)}
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
                            <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.account?.account_name}`)}>
                                Copy & Select
                            </button>
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
                defaultValue={{
                    value: formState.sales_order?.id,
                    label: (
                        <div key={formState.sales_order?.id} className="flex items-center">
                            <div
                                className="text-sm font-bold">{formState.sales_order?.subject}</div>
                            {formState.sales_order ?
                                (<button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.sales_order?.subject}`)}>
                                    Copy & Select
                                </button>)
                                : null
                            }

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
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Deal Stage': <Select
                name="deal_stage"
                id="deal_stage"
                placeholder=""
                options={InvoiceDealStages}
                defaultValue={InvoiceDealStages.find((data) => data.value == formState.deal_stage)}

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
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Status': <Select
                name="status"
                id="status"
                placeholder=""
                options={InvoiceStatuses}
                onChange={({value}: any) => {
                    handleChangeField('status', value)
                }}
                defaultValue={InvoiceStatuses.find((data) => data.value == formState.status)}
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
                defaultValue={{
                    value: formState.contact?.id,
                    label: (
                        <div key={formState.contact?.id} className="flex items-center">
                            <div className="text-sm font-bold">{formState.contact?.first_name} {formState.contact?.last_name}</div>
                            {formState.contact ?
                                (<button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.contact?.first_name + formState.contact?.last_name}`)}>
                                    Copy & Select
                                </button>)
                                : null
                            }
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
