import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/purchaseOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    searchPurchaseOrder,
    StatusOption,
} from "../../../../components/Functions/CommonFunctions";
import FileUploadComponent from "../../../../components/FormFields/FileUploadComponent";

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
                />
            ),
            'Parent PO No.': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="parent_po_id"
                    placeholder="Type at least 2 characters to search..."
                    name="parent_po_id"
                    loadOptions={searchPurchaseOrder}
                    onChange={({value}: any) => {
                        handleChangeField('parent_po_id', value)
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
            'Carrier': (
                <Select
                    options={CarrierOption}
                    name="carrier"
                    id="carrier"
                    onChange={({value}: any) => {
                        handleChangeField('carrier', value)
                    }}
                    className="flex-1"
                />
            ),
            'AWB': (
                <input
                    id="awb"
                    name="awb"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Confirmation Vendor': (
                <FileUploadComponent
                    id={'confirmation_vendor'}
                    modelName="purchaseOrder"
                    formState={formState}
                    formAttribute={'confirmation_vendor'}
                    updateFormdata={updateFormData}
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
