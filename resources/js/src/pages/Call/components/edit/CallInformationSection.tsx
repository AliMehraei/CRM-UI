import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/callFormSlice";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import AsyncSelect from "react-select/async";
import {
    displayImage,
    searchAccounts, searchAvailability,
    searchContacts, searchDeals, searchExcess, searchInvoice,
    searchLead, searchManufacturer, searchProducts, searchPurchaseOrder, searchQuote, searchRFQ, searchSalesOrder,
    searchVendor, searchVendorRFQ
} from "../../../../components/Functions/CommonFunctions";
import {useState} from "react";

const CallableList = [
    {value: "App\\Models\\Lead", label: "Lead"},
    {value: "App\\Models\\Contact", label: "Contact"},
];

const RelatableList = [
    {value: "App\\Models\\Account", label: "Account", api: searchAccounts, labelField: 'account_name'},
    {value: "App\\Models\\Vendor", label: "Vendor", api: searchVendor, labelField: 'vendor_name'},
    {value: "App\\Models\\Quote", label: "Quote", api: searchQuote, labelField: 'subject'},
    {value: "App\\Models\\Rfq", label: "Rfq", api: searchRFQ, labelField: 'rfq_name'},
    {value: "App\\Models\\Excess", label: "Excess", api: searchExcess, labelField: 'excess_name'},
    {
        value: "App\\Models\\Availability",
        label: "Availability",
        api: searchAvailability,
        labelField: 'availability_name'
    },
    {value: "App\\Models\\Product", label: "Product", api: searchProducts, labelField: 'product_name'},
    {value: "App\\Models\\Manufacturer", label: "Manufacturer", api: searchManufacturer, labelField: 'name'},
    {value: "App\\Models\\Deal", label: "Deals", api: searchDeals, labelField: 'deal_name'},
    {value: "App\\Models\\SalesOrder", label: "Sales Order", api: searchSalesOrder, labelField: 'subject'},
    {value: "App\\Models\\PurchaseOrder", label: "Purchase Order", api: searchPurchaseOrder, labelField: 'subject'},
    {value: "App\\Models\\Invoice", label: "Invoice", api: searchInvoice, labelField: 'subject'},
    {value: "App\\Models\\VendorRfq", label: "Vendor Rfq", api: searchVendorRFQ, labelField: 'vendor_rfq_name'},
];


const CallTypes: any = [
    {value: 'ausgehend', label: 'Ausgehend'},
    {value: 'eingehend', label: 'Eingehend'},
    {value: 'verpasst', label: 'Verpasst'},
];
const CallInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.callForm);
    const [callableType, setCallableType] = useState(formState.callable_type);
    const [relatableType, setRelatable] = useState(formState.relatable_type);
    const [callableValue, setCallableValue] = useState<any>({
        value: formState.callable ? formState.callable.id : null,
        label: (
            <div key={formState.callable ? formState.callable.id : 'default-key'} className="flex items-center">
                {formState.callable ? (
                    <>
                        <img
                            src={displayImage(formState?.callable?.image_data)}
                            alt="avatar"
                            className="w-8 h-8 mr-2 rounded-full"
                        />
                        <div>
                            <div
                                className="text-sm font-bold">{`${formState.callable.first_name} ${formState.callable.last_name}`}</div>
                            <div className="text-xs text-gray-500">{formState.callable.email}</div>
                        </div>
                    </>
                ) : (
                    <div className="text-sm font-bold"></div>
                )}
            </div>
        ),
    });
    const labelMField: any = RelatableList.find(module => module.value === formState.relatable_type)?.labelField;
    const [relatableValue, setRelatableValue] = useState<any>({
        value: formState.relatable ? formState.relatable.id : null,
        label: (
            <div key={formState.relatable?.id} className="flex items-center">
                <div>
                    <div className="text-sm font-bold">
                        {formState.relatable ? formState.relatable[labelMField] : null}
                    </div>
                </div>
            </div>
        ),

    });

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const searchModule = (e: any) => {
        const module: any = RelatableList.find(m => m.value === relatableType) ?? {
            value: null,
            label: null,
            api: searchAccounts
        }
        return module.api.call(null, e);
    }


    const fields = {
        'Call Information': {
            'Call To': <div className="flex">
                <Select id="callable_type"
                        name="callable_type"
                        onChange={({value}: any) => {
                            setCallableType(value);
                            setCallableValue(null);
                            handleChangeField('callable_type', value)
                            handleChangeField('callable_id', null);
                        }}
                        defaultValue={CallableList.find((data) => data.value == formState.callable_type)}
                        className="flex-none w-64 mr-2"
                        options={CallableList}
                />
                <AsyncSelect
                    isMulti={false}
                    id="callable_id"
                    placeholder="Type at least 2 characters to search..."
                    name="callable_id"
                    value={callableValue}
                    menuPortalTarget={document.body}
                    loadOptions={callableType === "App\\Models\\Lead" ? searchLead : searchContacts}
                    onChange={({value, label}: any) => {
                        setCallableValue({value, label})
                        handleChangeField('callable_id', value);
                    }}
                    className="flex-1"
                    required
                />
            </div>,
            'Related To': <div className="flex">
                <Select id="relatable_type"
                        name="relatable_type"
                        onChange={({value}: any) => {
                            setRelatable(value);
                            setRelatableValue(null);
                            handleChangeField('relatable_type', value)
                            handleChangeField('relatable_id', null);
                        }}
                        className="flex-none w-64 mr-2"
                        options={RelatableList}
                        defaultValue={RelatableList.find((data) => data.value == formState.relatable_type)}
                />
                <AsyncSelect
                    isMulti={false}
                    id="relatable_id"
                    menuPortalTarget={document.body}
                    placeholder="Type at least 2 characters to search..."
                    name="relatable_id"
                    loadOptions={(e) => searchModule(e)}
                    onChange={({value, label}: any) => {
                        setRelatableValue({value, label});
                        handleChangeField('relatable_id', value);
                    }}
                    value={relatableValue}
                    className="flex-1"
                    required
                />

            </div>,
            'Call Type': <Select id="type" name="type" required
                                 options={CallTypes}
                                 defaultValue={CallTypes.find((data: any) => data.value == formState.type)}
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
                    defaultDate: formState.call_start_time ? new Date(formState.call_start_time) : null as any,
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
                    defaultValue={formState.call_duration_minutes}
                />
                <input
                    id="call_duration_seconds"
                    required
                    name="call_duration_seconds"
                    className="form-input ml-2 flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    placeholder="Seconds"
                    defaultValue={formState.call_duration_seconds}

                />
            </div>,
            'Subject': <input required id="subject" name="subject"
                              className="form-input flex-1 "
                              defaultValue={formState.subject}
                              onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Voice Recording': <input id="voice_recording" name="voice_recording"
                                      className="form-input flex-1 "
                                      defaultValue={formState.voice_recording}
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
