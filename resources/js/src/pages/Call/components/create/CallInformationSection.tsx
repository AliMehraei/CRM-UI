import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/callFormSlice";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import AsyncSelect from "react-select/async";
import {
    searchAccounts,
    searchAvailability,
    searchContacts,
    searchDeals,
    searchExcess,
    searchInvoice,
    searchLead,
    searchManufacturer,
    searchProducts,
    searchPurchaseOrder,
    searchQuote,
    searchRFQ,
    searchSalesOrder,
    searchVendor,
    searchVendorRFQ
} from "../../../../components/Functions/CommonFunctions";
import {useState} from "react";

const CallInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.callForm);
    const [selectedCallable, setSelectedCallable] = useState("App\\Models\\Contact");
    const [selectedRelated, setSelectedRelated] = useState("App\\Models\\Account");
    const [selectedCallableTo, setSelectedCallableTo] = useState<any>(null);
    const [selectedRelatedTo, setSelectedRelatedTo] = useState<any>(null);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const CallableList = [
        {value: "App\\Models\\Lead", label: "Lead"},
        {value: "App\\Models\\Contact", label: "Contact"},
    ];

    const RelatableList = [
        {value: "App\\Models\\Account", label: "Account", api: searchAccounts},
        {value: "App\\Models\\Vendor", label: "Vendor", api: searchVendor},
        {value: "App\\Models\\Quote", label: "Quote", api: searchQuote},
        {value: "App\\Models\\Rfq", label: "Rfq", api: searchRFQ},
        {value: "App\\Models\\Excess", label: "Excess", api: searchExcess},
        {value: "App\\Models\\Availability", label: "Availability", api: searchAvailability},
        {value: "App\\Models\\Product", label: "Product", api: searchProducts},
        {value: "App\\Models\\Manufacturer", label: "Manufacturer", api: searchManufacturer},
        {value: "App\\Models\\Deal", label: "Deals", api: searchDeals},
        {value: "App\\Models\\SalesOrder", label: "Sales Order", api: searchSalesOrder},
        {value: "App\\Models\\PurchaseOrder", label: "Purchase Order", api: searchPurchaseOrder},
        {value: "App\\Models\\Invoice", label: "Invoice", api: searchInvoice},
        {value: "App\\Models\\VendorRfq", label: "Vendor Rfq", api: searchVendorRFQ},
    ];
    /*  const CallableList: any = [
          {value: 'lead', label: 'Lead'},
          {value: 'contact', label: 'Contact'},
      ];

      const RelatableList: any = [
          {value: 'account', label: 'Account'},
          {value: 'vendor', label: 'Vendor'},
          {value: 'rfq', label: 'RFQ'},
          {value: 'quote', label: 'Quote'},
          {value: 'excess', label: 'Excess'},
          {value: 'availability', label: 'Availability'},
          {value: 'product', label: 'Product'},
          {value: 'history_po_so', label: 'History PO/SO'},
          {value: 'manufacture', label: 'Manufacture'},
          {value: 'availability_x_rfq', label: 'Availability_X_Rfq'},
          {value: 'availability_x_quote', label: 'Availability_X_Quote'},
          {value: 'vendor_x_manufacture', label: 'Vendor_X_Manufacture'},
          {value: 'vendor_x_manufacture_2', label: 'Vendor_X_Manufacture2'},
          {value: 'product_api', label: 'Product Api'},
          {value: 'alternative_products_in_rfq', label: 'Alternatives Products in RFQ'},
          {value: 'deals', label: 'Deals'},
          {value: 'forecast_custom', label: 'Forecast Custom'},
          {value: 'sales_order', label: 'Sales Order'},
          {value: 'purchase_order', label: 'Purchase Order'},
          {value: 'invoice', label: 'Invoice'},
          {value: 'so_x_po', label: 'SO_X_PO'},
          {value: 'vendor_rfq', label: 'Vendor Rfq'},
          {value: 'vendor_rfq_related_rfq', label: "Vendor RFQ's related RFQ"},
        ];*/

    const CallTypes: any = [
        {value: 'ausgehend', label: 'Ausgehend'},
        {value: 'eingehend', label: 'Eingehend'},
        {value: 'verpasst', label: 'Verpasst'},
    ];
    const searchModule = (e: any) => {
        const module: any = RelatableList.find(m => m.value === selectedRelated) ?? {
            value: null,
            label: null,
            api: searchAccounts
        }
        return module.api.call(null, e);
    }

    const fields = {
        'Call Information': {
            'Call To': <div className="flex">
                <Select id="callable"
                        name="callable"
                        onChange={({value}: any) => {
                            setSelectedCallable(value);
                            setSelectedCallableTo(null);
                            handleChangeField('callable', value)
                            handleChangeField('callable_to', null);

                        }}
                        defaultValue={CallableList.find((data) => data.value == formState.callable)}
                        className="flex-none w-64 mr-2"
                        options={CallableList}
                />
                <AsyncSelect
                    isMulti={false}
                    id="callable_to"
                    placeholder="Type at least 2 characters to search..."
                    name="callable_to"
                    value={selectedCallableTo}
                    menuPortalTarget={document.body}
                    loadOptions={selectedCallable === "App\\Models\\Lead" ? searchLead : searchContacts}
                    onChange={({value, label}: any) => {
                        setSelectedCallableTo({value, label})
                        handleChangeField('callable_to', value);
                    }}
                    className="flex-1"
                    required
                />
            </div>,
            'Related To': <div className="flex">
                <Select id="relatable"
                        name="relatable"
                        onChange={({value}: any) => {
                            setSelectedRelated(value);
                            setSelectedRelatedTo(null);
                            handleChangeField('relatable_to', null);
                            handleChangeField('relatable', value)
                        }}
                        className="flex-none w-64 mr-2"
                        options={RelatableList}
                        defaultValue={RelatableList.find((data) => data.value == formState.relatable)}
                />
                <AsyncSelect
                    isMulti={false}
                    id="relatable_to"
                    menuPortalTarget={document.body}
                    placeholder="Type at least 2 characters to search..."
                    name="relatable_to"
                    loadOptions={(e) => searchModule(e)}
                    onChange={({value, label}: any) => {
                        setSelectedRelatedTo({value, label});
                        handleChangeField('relatable_to', value);
                    }}
                    value={selectedRelatedTo}
                    className="flex-1"
                    required
                />

            </div>,
            'Call Type': <Select id="type" name="type" required
                                 options={CallTypes}
                                 defaultValue={{value: 'ausgehend', label: 'Ausgehend'}}
                                 onChange={({value}: any) => {
                                     handleChangeField('type', value)
                                 }} className="flex-1"/>,
            'Outgoing Call Status': <input id="outgoing_call_status" name="outgoing_call_status" type="text"
                                           placeholder="Readonly input here…"
                                           className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                           defaultValue="Abgeschlossen"
                                           disabled/>,
            'Call Start Time': <Flatpickr
                required
                name="call_start_time"
                data-enable-time
                options={{
                    enableTime: true,
                    dateFormat: 'Y-m-d H:i',
                    position: 'auto left',
                }}
                onChange={(_, dateString) => handleChangeField('call_start_time', dateString)}
                className="form-input flex-1"
            />,
            'Call Duration': <div className="flex">
                <input
                    id="call_duration_minutes"
                    required
                    name="call_duration_minutes"
                    className="form-input mr-2 flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    placeholder="Minutes"
                />
                <input
                    id="call_duration_seconds"
                    required
                    name="call_duration_seconds"
                    className="form-input ml-2 flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    placeholder="Seconds"

                />
            </div>,
            'Subject': <input required id="subject" name="subject"
                              className="form-input flex-1 "
                              defaultValue="Outgoing call to Unknown"
                              onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Voice Recording': <input id="voice_recording" name="voice_recording"
                                      className="form-input flex-1 "
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,


        }
    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>
        </div>
    </>)
}
export default CallInformationSection;
