import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../config/api";
import { updateFormData } from "../../../../store/taskFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    searchLead,
    searchContacts,
    searchAccounts,
    searchVendor,
    searchQuote,
    searchRFQ,
    searchExcess,
    searchAvailability,
    searchProducts,
    searchManufacturer,
    searchDeals,
    searchSalesOrder,
    searchPurchaseOrder,
    searchInvoice,
    searchVendorRFQ
} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";
import { useEffect, useState } from "react";
import { an } from "@fullcalendar/core/internal-common";

const TypeSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();

    const formState = useSelector((state: any) => state.taskForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };
    const userableType = [
        { value: "App\\Models\\Lead", label: "Lead" },
        { value: "App\\Models\\Contact", label: "Contact" },
    ];

    const moduleableType = [
        { value: "App\\Models\\Account", label: "Account", api: searchAccounts, labelFelid: 'account_name' },
        { value: "App\\Models\\Vendor", label: "Vendor", api: searchVendor, labelFelid: 'vendor_name' },
        { value: "App\\Models\\Quote", label: "Quote", api: searchQuote, labelFelid: 'subject' },
        { value: "App\\Models\\Rfq", label: "Rfq", api: searchRFQ, labelFelid: 'rfq_name' },
        { value: "App\\Models\\Excess", label: "Excess", api: searchExcess, labelFelid: 'excess_name' },
        { value: "App\\Models\\Availability", label: "Availability", api: searchAvailability, labelFelid: 'availability_name' },
        { value: "App\\Models\\Product", label: "Product", api: searchProducts, labelFelid: 'product_name' },
        { value: "App\\Models\\Manufacturer", label: "Manufacturer", api: searchManufacturer, labelFelid: 'name' },
        { value: "App\\Models\\Deal", label: "Deals", api: searchDeals, labelFelid: 'deal_name' },
        { value: "App\\Models\\SalesOrder", label: "Sales Order", api: searchSalesOrder, labelFelid: 'subject' },
        { value: "App\\Models\\PurchaseOrder", label: "Purchase Order", api: searchPurchaseOrder, labelFelid: 'subject' },
        { value: "App\\Models\\Invoice", label: "Invoice", api: searchInvoice, labelFelid: 'subject' },
        { value: "App\\Models\\VendorRfq", label: "Vendor Rfq", api: searchVendorRFQ, labelFelid: 'vendor_rfq_name' },
    ];
    const [selectedType, setSelectedType] = useState(formState.userable_type);
    const [selectedModule, setSelectedModule] = useState(formState.moduleable_type);
    const [selectedUserableId, setSelectedUserableId] = useState(
        {
            value: formState.userable ? formState.userable.id : null,
            label: (
                <div key={formState.userable ? formState.userable.id : 'default-key'} className="flex items-center">
                    {formState.userable ? (
                        <>
                            <img
                                src={formState.userable.image ?? '/assets/images/user-profile.jpeg'}
                                alt="avatar"
                                className="w-8 h-8 mr-2 rounded-full"
                            />
                            <div>
                                <div className="text-sm font-bold">{`${formState.userable.first_name} ${formState.userable.last_name}`}</div>
                                <div className="text-xs text-gray-500">{formState.userable.email}</div>
                            </div>
                        </>
                    ) : (
                        <div className="text-sm font-bold"></div>
                    )}
                </div>
            ),
        }
    );
    
    const labelMField = moduleableType.find(module => module.value === formState.moduleable_type)?.labelFelid || null;
    const [selectedModuleableId, setSelectedModuleableId] = useState(
        {
            value: formState.moduleable ? formState.moduleable.id : null,
            label: (
                <div key={formState.moduleable?.id} className="flex items-center">
                    <div>
                        <div className="text-sm font-bold">
                        {formState.moduleable ? formState.moduleable[labelMField] : null}
                        </div>
                    </div>
                </div>
            ),

        }
    );

    const searchModule = (e: any) => {
        const module: any = moduleableType.find(m => m.value === selectedModule) ?? {
            value: null,
            label: null,
            api: searchAccounts
        }
        return module.api.call(null, e);
    }

    return (
        <>
            <div className="p-6 border rounded-md">
                <div className="flex items-center space-x-4 mb-5">
                    <label className="font-semibold">Lead | Contact:</label>
                    <Select
                        id="userable_type"
                        name="userable_type"
                        defaultValue={userableType.find((data) => data.value == formState.userable_type)}

                        onChange={({ value }: any) => {
                            setSelectedType(value);
                            handleChangeField('userable_type', value);
                            setSelectedUserableId(null);
                        }}
                        className="flex-1"
                        options={userableType}
                    />
                    <AsyncSelect
                        key={selectedType}
                        isMulti={false}
                        id="userable_id"
                        placeholder="Type at least 2 characters to search..."
                        name="userable_id"
                        value={selectedUserableId}
                        menuPortalTarget={document.body}
                        menuPlacement={"top"}
                        loadOptions={selectedType === "App\\Models\\Lead" ? searchLead : searchContacts}
                        onChange={({ value, label }: any) => {
                            setSelectedUserableId({ value, label });
                            handleChangeField('userable_id', value);
                        }}
                        className="flex-1"
                        required
                    />

                </div>
                <div className="flex items-center space-x-4">
                    <label className="font-semibold">Select Module :</label>
                    <Select
                        id="moduleable_type"
                        name="moduleable_type"
                        menuPortalTarget={document.body}
                        menuPlacement={"top"}
                        defaultValue={moduleableType.find((data) => data.value == formState.moduleable_type)}
                        onChange={({ value }: any) => {
                            setSelectedModule(value);
                            handleChangeField('moduleable_type', value);
                            setSelectedModuleableId(null);
                        }}
                        className="flex-1"
                        options={moduleableType}
                    />
                    <AsyncSelect
                        key={selectedModule}
                        isMulti={false}
                        id="moduleable_id"
                        menuPortalTarget={document.body}
                        menuPlacement={"top"}
                        placeholder="Type at least 2 characters to search..."
                        name="moduleable_id"
                        value={selectedModuleableId}
                        loadOptions={(e) => searchModule(e)}
                        onChange={({ value, label }: any) => {
                            setSelectedModuleableId({ value, label });
                            handleChangeField('moduleable_id', value);
                        }}
                        className="flex-1"
                        required
                    />

                </div>
            </div>
        </>
    )
}

export default TypeSection;
