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
    const [selectedType, setSelectedType] = useState("App\\Models\\Contact");
    const [selectedModule, setSelectedModule] = useState("App\\Models\\Account");
    const [selectedUserableId, setSelectedUserableId] = useState(null);
    const [selectedModuleableId, setSelectedModuleableId] = useState(null);

    const formState = useSelector((state: any) => state.taskForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };

    const userableType = [
        { value: null, label: "-None-" },
        { value: "App\\Models\\Lead", label: "Lead" },
        { value: "App\\Models\\Contact", label: "Contact" },
    ];

    const moduleableType = [
        { value: null, label: "-None-" },
        { value: "App\\Models\\Account", label: "Account", api: searchAccounts },
        { value: "App\\Models\\Vendor", label: "Vendor", api: searchVendor },
        { value: "App\\Models\\Quote", label: "Quote", api: searchQuote },
        { value: "App\\Models\\Rfq", label: "Rfq", api: searchRFQ },
        { value: "App\\Models\\Excess", label: "Excess", api: searchExcess },
        { value: "App\\Models\\Availability", label: "Availability", api: searchAvailability },
        { value: "App\\Models\\Product", label: "Product", api: searchProducts },
        { value: "App\\Models\\Manufacturer", label: "Manufacturer", api: searchManufacturer },
        { value: "App\\Models\\Deal", label: "Deals", api: searchDeals },
        { value: "App\\Models\\SalesOrder", label: "Sales Order", api: searchSalesOrder },
        { value: "App\\Models\\PurchaseOrder", label: "Purchase Order", api: searchPurchaseOrder },
        { value: "App\\Models\\Invoice", label: "Invoice", api: searchInvoice },
        { value: "App\\Models\\VendorRfq", label: "Vendor Rfq", api: searchVendorRFQ },
    ];
    const searchModule = (e: any) => {
        const module: any = moduleableType.find(m => m.value === selectedModule) ?? {
            value: "App\\Models\\Account",
            label: "Account",
            api: searchAccounts
        }
        console.log('====================================');
        console.log(module.api);
        console.log('====================================');
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
