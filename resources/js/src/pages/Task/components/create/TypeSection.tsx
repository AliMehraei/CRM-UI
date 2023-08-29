import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/taskFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {searchLead,searchContacts, searchAccounts} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";
import { useEffect, useState } from "react";

const TypeSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const [selectedType, setSelectedType] = useState("App\Models\Contact");
    const [selectedModule, setSelectedModule] = useState("App\Models\Account");
    const [selectedUserableId, setSelectedUserableId] = useState(null);
    const [selectedModuleableId, setSelectedModuleableId] = useState(null);

    const formState = useSelector((state: any) => state.taskForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    
    const userableType = [
        { value: "App\Models\Lead", label: "Lead" },
        { value: "App\Models\Contact", label: "Contact" },
    ];
        
    const moduleableType = [
        { value: "App\Models\Account", label: "Account" },
        { value: "App\Models\Vendor", label: "Vendor" },
        { value: "App\Models\Quote", label: "Quote" },
        { value: "App\Models\Rfq", label: "Rfq" },
        { value: "App\Models\Excess", label: "Excess" },
        { value: "App\Models\Availability", label: "Availability" },
        { value: "App\Models\Product", label: "Product" },
        { value: "App\Models\Manufacture", label: "Manufacture" },
        { value: "App\Models\Deal", label: "Deals" },
        { value: "App\Models\SalesOrder", label: "Sales Order" },
        { value: "App\Models\PurchaseOrder", label: "Purchase Order" },
        { value: "App\Models\Invoice", label: "Invoice" },
        { value: "App\Models\VendorRfq", label: "Vendor Rfq" },
    ];
    const defaultOption = userableType.find(option => option.value === selectedType);
    const defaultOptionModule = moduleableType.find(option => option.value === selectedModule );

    useEffect(() => {
        if (selectedType === "App\Models\Contact") {
            searchContacts('').then(results => {
                if (results && results.length > 0) {
                    setSelectedUserableId(results[0]); 
                }
            });
        }
        if (selectedModule === "App\Models\Account") {
            searchAccounts('').then(results => {
                if (results && results.length > 0) {
                    selectedModuleableId(results[0]); 
                }
            });
        }
        dispatch(updateFormData({}))
    }, []); 
   
    return (
        <>
        <div className="p-6 border rounded-md">
            <div className="flex items-center space-x-4 mb-5">
                <label className="font-semibold">Lead | Contact:</label>
                <Select 
                    id="userable_type"
                    name="userable_type"
                    defaultValue={
                        formState.userable_type} 
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
                loadOptions={selectedType === "App\Models\Lead" ? searchLead : searchContacts}
                onChange={({value, label}: any) => {
                    setSelectedUserableId({ value, label });
                    handleChangeField('userable_id', value);
                }}
                className="flex-1"
            />

            </div>
            <div className="flex items-center space-x-4">
                <label className="font-semibold">Select Module :</label>
                <Select 
                    id="moduleable_type"
                    name="moduleable_type"
                    defaultValue={defaultOptionModule} 
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
                placeholder="Type at least 2 characters to search..."
                name="moduleable_id"
                value={selectedModuleableId}
                loadOptions={selectedModule === "App\Models\Account" ? searchAccounts : ''}
                onChange={({value, label}: any) => {
                    setSelectedModuleableId({ value, label });
                    handleChangeField('moduleable_id', value);
                }}
                className="flex-1"
            />

            </div>
        </div>
        </>
    )
}

export default TypeSection;
