import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/purchaseOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {searchAccounts,searchContacts,searchSalesOrder,Currencies
    ,searchLead,searchQuote,searchInvoice,searchOwners, searchRFQ, searchPurchaseOrder, StatusOption, handleUploadFile} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const PurchaseOrderInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.purchaseOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };



    const POTypeOption = [
        {value: 'none', label: '-None-'},
        {value: 'single', label: 'Single PO'},
        {value: 'frame', label: 'Frame PO'},
        {value: 'call_off', label: 'Call Off'},
        {value: 'forecast', label: 'Forecast PO'},

    ];

    const CarrierOption = [
        {value: 'vendor_forwarder', label: 'Vendor Forwarder'},
        {value: 'ups', label: 'UPS'},
        {value: 'usps', label: 'USPS'},
        {value: 'dhl', label: 'DHL'},
        {value: 'blue_dart', label: 'BlueDart'},
    ];



    const fields = {
        'PurchaseOrders Information': {
            'PO Type': (
                <Select
                options={POTypeOption}
                name="po_type"
                id="po_type"
                onChange={({value}: any) => {
                    handleChangeField('po_type', value)
                }}
                className="flex-1"
                defaultValue={POTypeOption.find((title) => title.value == formState.po_type)}
                />
            ),
            'Parent PO No.': (
                <AsyncSelect
                    isMulti={false}
                    id="parent_po_id"
                    placeholder="Type at least 2 characters to search..."
                    name="parent_po_id"
                    loadOptions={searchPurchaseOrder}
                    onChange={({value}: any) => {
                        handleChangeField('parent_po_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.parent_po?.id,
                        label: (
                            <div key={formState.parent_po?.id} className="flex items-center">
                                <div className="text-sm font-bold">{formState.parent_po?.subject}</div>

                            </div>
                        ),
                    }}
                />
            ),
            'ZohoBooksID': (
                <input
                id="zoho_books_id"
                name="zoho_books_id"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.zoho_books_id}
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
                    defaultValue={formState.subject}
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
                defaultValue={StatusOption.find((title) => title.value == formState.status)}
                />
            ),
            'Carrier': (
                <Select
                options={CarrierOption}
                name="carrier"
                id="carrier"
                onChange={({value}: any) => {
                    handleChangeField('carrier', value)
                }}
                className="flex-1"
                defaultValue={CarrierOption.find((title) => title.value == formState.carrier)}
                />
            ),
            'AWB':(
                <input
                id="awb"
                name="awb"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.awb}
            />
            ),
            'Confirmation Vendor': (<input
                id="confirmation_vendor"
                key="confirmation_vendor"
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                accept="*"
                onChange={(e) => handleUploadFile(e, (response: any) => {
                    dispatch(updateFormData({field: 'confirmation_vendor', value: `${response?.data.data.file_url}`}));
                })}
                name="confirmation_vendorFile"
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

export default PurchaseOrderInformationSection;
