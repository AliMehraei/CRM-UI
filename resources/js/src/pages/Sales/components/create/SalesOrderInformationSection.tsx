import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/salesOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    searchAccounts, searchContacts, Currencies
    , searchLead, searchQuote, searchInvoice, searchOwners, searchRFQ, searchSalesOrder, StatusOption, handleUploadFile
} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const SalesOrderInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.salesOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const SOTypeOption = [
        {value: 'none', label: '-None-'},
        {value: 'single_order', label: 'Single Order'},
        {value: 'frame_contract', label: 'Frame Contract'},
        {value: 'call_off', label: 'Call Off'},
        {value: 'forecast', label: 'Forecast'},

    ];


    const fields = {
        'Sales Orders Information': {
            'Purchase Order': (
                <input
                    id="purchase_order"
                    name="purchase_order"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Customer PO Date': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                    }}
                    name="customer_po_date"
                    value=''
                    className="form-input flex-1"
                    onChange={(_, dateString) => handleChangeField('customer_po_date', dateString)} // Update the field value on change

                />
            ),
            'PO Upload': (<input
                    id="po_upload"
                    key="po_upload"
                    type="file"
                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                    accept="*"
                    onChange={(e) => handleUploadFile(e, (response: any) => {
                        dispatch(updateFormData({'po_upload': `${response?.data.data.file_url}`}));
                    })}
                    name="po_upload"
                />
            ),
            'SO Type': (
                <Select
                    options={SOTypeOption}
                    name="so_type"
                    id="so_type"
                    onChange={({value}: any) => {
                        handleChangeField('so_type', value)
                    }}
                    className="flex-1"
                />
            ),
            'Parent SO Nr.': (
                <input
                    id="parent_so_nr"
                    name="parent_so_nr"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),


        },
        '': {
            'Subject': (
                <input
                    id="subject"
                    required
                    name="subject"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Pending': (
                <input
                    id="pending"
                    name="pending"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Status': (
                <Select
                    options={StatusOption}
                    name="status"
                    id="status"
                    onChange={({value}: any) => {
                        handleChangeField('status', value)
                    }}
                    className="flex-1"
                />
            ),


            'ZohoBooksID': (
                <input
                    id="zoho_books_id"
                    name="zoho_books_id"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
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

export default SalesOrderInformationSection;
