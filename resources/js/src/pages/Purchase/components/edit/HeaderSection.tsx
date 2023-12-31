import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../config/api";
import { updateFormData } from "../../../../store/purchaseOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    searchContacts, Currencies
    , searchOwners, searchVendor, searchAvailability, displayImage, handleCopySelect
} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";
import React from "react";

const HeaderSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.purchaseOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };




    const fields = {
        'Header': {

            'Vendor Name': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    required
                    id="vendor_id"
                    placeholder="Type at least 2 characters to search..."
                    name="vendor_id"
                    loadOptions={searchVendor}
                    onChange={({ value }: any) => {
                        handleChangeField('vendor_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.vendor?.id,
                        label: (
                            <div key={formState.vendor?.id} className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{formState.vendor?.vendor_name}</div>
                                    <div className="text-xs text-gray-500">{formState.vendor?.email}</div>
                                </div>
                                <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.vendor?.vendor_name}`)}>
                                    Copy & Select
                                </button>
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
                    onChange={({ value }: any) => {
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
                                    <div className="text-sm font-bold">{formState.contact?.first_name + ' ' + formState.account?.last_name}</div>
                                    <div className="text-xs text-gray-500">{formState.contact?.email}</div>
                                </div>
                                     <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.contact?.first_name + ' ' + formState.account?.last_name}`)}>
                                         Copy & Select
                                     </button>
                                 </>
                                    )

                                    : null}


                            </div>
                        ),
                    }}
                />
            ),
            'Availability No': (
                <AsyncSelect
                    defaultOptions={false}
                    isMulti={false}
                    id="availability_id"
                    placeholder="Type at least 2 characters to search..."
                    name="availability_id"
                    loadOptions={searchAvailability}
                    onChange={({ value }: any) => {
                        handleChangeField('availability_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.availability?.id,
                        label: (
                            <div key={formState.availability?.id} className="flex items-center">
                            { formState.availability ?

                                    (
                                            <>
                                                <div className="text-sm font-bold">{formState.availability?.availability_name}</div>
                                                <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.availability?.availability_name}`)}>
                                                    Copy & Select
                                                </button>
                                            </>
                                    ) : null


                            }
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
                    onChange={({ value }: any) => {
                        handleChangeField('currency', value)
                    }}
                    className="flex-1"
                    defaultValue={Currencies.find((title) => title.value == formState.currency)}
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



        },
        '': {
            'PO Date': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                        defaultDate: formState.po_date ? new Date(formState.po_date) : null as any,
                    }}
                    name="po_date"
                    value={formState.po_date ? new Date(formState.po_date) : ''}
                    className="form-input flex-1"
                    onChange={(_, dateString) => handleChangeField('po_date', dateString)} // Update the field value on change

                />
            ),
            'PurchaseOrders Owner': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={searchOwners}
                    onChange={({ value }: any) => {
                        handleChangeField('owner_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.owner?.id,
                        label: (
                            <div key={formState.owner?.id} className="flex items-center">
                                {formState.owner ? (
                                    <>
                                <img
                                    src={displayImage(formState.owner.avatar_data)}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />

                                <div>
                                    <div className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                    <div className="text-xs text-gray-500">{formState.owner?.email}</div>
                                </div>
                                        <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.owner?.first_name + " " + formState.owner?.last_name}`)}>
                                            Copy & Select
                                        </button>
                                </>

                                    ) : null}
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
                    onChange={({ value }: any) => {
                        handleChangeField('approved_by_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.approved_by?.id,
                        label: (
                            <div key={formState.approved_by?.id} className="flex items-center">
                                {formState.approved_by ? (
                                    <>
                                <img
                                    src={formState.approved_by.image ?? '/assets/images/user-profile.jpeg'}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />

                                <div>
                                    <div className="text-sm font-bold">{formState.approved_by?.first_name + " " + formState.approved_by?.last_name}</div>
                                    <div className="text-xs text-gray-500">{formState.approved_by?.email}</div>
                                </div>
                                <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.approved_by?.first_name + " " + formState.approved_by?.last_name}`)}>
                                    Copy & Select
                                </button>
                                </>

                                    ) : null}
                            </div>
                        ),
                    }}
                />
            ),



        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields} />
            </div>
        </>
    )
}

export default HeaderSection;
