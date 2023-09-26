import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../config/api";
import { updateFormData } from "../../../../store/purchaseOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    searchAccounts, searchContacts, searchSalesOrder, Currencies
    , searchLead, searchQuote, searchInvoice, searchOwners, searchRFQ
} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const LinkedSOSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.purchaseOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };



    const SOStatusOption = [
        { value: 'none', label: '-None-' },
        { value: 'draft', label: 'Draft' },
        { value: 'request_for_approval', label: 'Request For Approval' },
        { value: 'approved', label: 'Approved' },
        { value: 'confirmed', label: 'Confirmed' },
        { value: 'packed', label: 'Packed' },
        { value: 'shipped', label: 'Shipped' },

    ];

    const fields = {
        'Linked SO': {


            'Account Name': (
                <AsyncSelect
                    isMulti={false}
                    id="account_id"
                    placeholder="Type at least 2 characters to search..."
                    name="account_id"
                    loadOptions={searchAccounts}
                    onChange={({ value }: any) => {
                        handleChangeField('account_id', value)
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
                                    <div className="text-sm font-bold">{formState.account?.account_name}</div>
                                    <div className="text-xs text-gray-500">{formState.account?.email}</div>
                                </div>
                            </div>
                        ),
                    }}
                />
            ),



            'SO Number': (
                <AsyncSelect
                    isMulti={false}
                    id="sales_order_id"
                    placeholder="Type at least 2 characters to search..."
                    name="sales_order_id"
                    loadOptions={searchSalesOrder}
                    onChange={({ value }: any) => {
                        handleChangeField('sales_order_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.sales_order_id,
                        label: (
                            <div key={formState.sales_order_id}
                                className="flex items-center">
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.sales_order?.subject}</div>
                                </div>
                            </div>
                        )
                    }}
                />
            ),

            'Quantity SO': (
                <input
                    id="quantity_so"
                    type="number"
                    name="quantity_so"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.quantity_so}
                />
            ),
            'Resale': (
                <input
                    id="resale"
                    type="number"
                    name="resale"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.resale}
                />
            ),
            'SO Status': (
                <Select
                    options={SOStatusOption}
                    name="so_status"
                    id="so_status"
                    onChange={({ value }: any) => {
                        handleChangeField('so_status', value)
                    }}
                    className="flex-1"
                    defaultValue={SOStatusOption.find((title) => title.value == formState.so_status)}
                />
            ),


        },
        '': {
            'Requested D.D.': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                        defaultDate: `${formState.so_requested_d_d ? new Date(formState.so_requested_d_d) : ''}`,
                    }}
                    name="so_requested_d_d"
                    value={formState.so_requested_d_d ? new Date(formState.so_requested_d_d) : ''}
                    className="form-input flex-1"
                    onChange={(_, dateString) => handleChangeField('so_requested_d_d', dateString)} // Update the field value on change

                />
            ),
            'Confirmed D.D.': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                        defaultDate: `${formState.so_confirmed_d_d ? new Date(formState.so_confirmed_d_d) : ''}`,
                    }}
                    name="so_confirmed_d_d"
                    value={formState.so_confirmed_d_d ? new Date(formState.so_confirmed_d_d) : ''}
                    className="form-input flex-1"
                    onChange={(_, dateString) => handleChangeField('so_confirmed_d_d', dateString)} // Update the field value on change

                />
            ),
            'D/C': (
                <input
                    id="dc_so"
                    name="dc_so"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.dc_so}
                />
            ),



            'SPQ SO': (
                <input
                    id="spq_so"
                    name="spq_so"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.spq_so}
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

export default LinkedSOSection;
