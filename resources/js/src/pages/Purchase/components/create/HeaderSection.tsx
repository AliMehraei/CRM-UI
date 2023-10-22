import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/purchaseOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {searchContacts,Currencies
    ,searchOwners, searchVendor, searchAvailability} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const HeaderSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.purchaseOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
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
                onChange={({value}: any) => {
                    handleChangeField('vendor_id', value)
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
            'Availability No': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="availability_id"
                    placeholder="Type at least 2 characters to search..."
                    name="availability_id"
                    loadOptions={searchAvailability}
                    onChange={({value}: any) => {
                        handleChangeField('availability_id', value)
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
            'Exchange Rate': (
                <input id="exchange_rate"
                    name="exchange_rate" type="text"
                    value="1"
                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                    disabled
                />
            ),



        },
        '': {
            'PO Date': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                    }}
                    name="po_date"
                    value=''
                    className="form-input flex-1"
                    onChange={(_,dateString) => handleChangeField('po_date', dateString)} // Update the field value on change

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
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }}
                    className="flex-1"

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
