import React, {useEffect, useState} from 'react';
import Select from "react-select";

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: (filters: any) => void;

}

const FilterModal: React.FC<FilterModalProps> = ({
     isOpen, onClose, onApply
    }: any) => {
    const defaultFilters = ['All'];

    const [filters, setFilters] = useState<any>(defaultFilters);

    const handleResetFilters = () => {
        // setFilters([]);
        setSelectedOptions([]);
        // Optionally call onApply if you want the reset to be applied immediately
        onApply([]);
    };
    const ModuleOptions: any = [
        {value: 'All', label: 'All Modules'},
        {value: 'Invoice', label: 'Invoices'},
        {value: 'SalesOrder', label: 'Sales Orders'},
        {value: 'PurchaseOrder', label: 'Purchase order'},
        {value: 'Rfq', label: 'RFQ'},
        {value: 'Quote', label: 'Quote'},
        {value: 'Availability', label: 'Availability'},
        {value: 'Account', label: 'Account'},
        {value: 'Lead', label: 'Lead'},
        {value: 'Contact', label: 'Contact'},

        {value: 'Vendor', label: 'Vendor'},

        {value: 'Call', label: 'Call'},
        {value: 'Product', label: 'Product'},
        {value: 'VendorRfq', label: 'VendorRFQ'},
        {value: 'Tasks', label: 'Tasks'},
        {value: 'Manufacturer', label: 'Manufacturer'},
        {value: 'Excess', label: 'Excess'},
        {value: 'User', label: 'User'},
    ];
    const [selectedOptions, setSelectedOptions] = useState<any>([]);
    const handleChangeFilters = (selection: any, actionMeta: any) => {
        // When "All Modules" is selected, ensure all options are selected
        const isAllModulesSelected = selection.some((option: any) => option.value === 'All');
        if (isAllModulesSelected) {
            setSelectedOptions(ModuleOptions);
            return;
        }

        switch (actionMeta.action) {
            case 'select-option':
                setSelectedOptions(selection);
                break;
            case 'deselect-option':
                setSelectedOptions(selection);
                break;
            case 'remove-value':
                // When removing an option, if "All Modules" is the one being removed,
                // clear the selection, otherwise update the selection normally.
                if (actionMeta.removedValue.value === 'All') {
                    setSelectedOptions([]);
                } else {
                    setSelectedOptions(selection);
                }
                break;
            case 'clear':
                // Handle the action when the user clears all selections
                setSelectedOptions([]);
                break;
            default:
                // It's a good idea to handle the default case, even if just to log unexpected actions
                console.warn(`Unknown action: ${actionMeta.action}`);
                break;
        }
    }

    useEffect(() => {
        setFilters(selectedOptions.map((option: any) => option.value))
    }, [selectedOptions]);

    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Advanced Filters</h3>
                    <div className="mt-2 px-7 py-3">
                        <div className="mb-4">
                            <label htmlFor="modules"
                                   className="block text-gray-700 text-sm font-bold mb-2">Modules</label>

                            <Select
                                isMulti={true}
                                id="modules"
                                placeholder="Type at least 2 characters to search..."
                                name="modules"
                                options={ModuleOptions}
                                value={selectedOptions} // This should be the array of currently selected options
                                onChange={handleChangeFilters}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        {/* Add more filter options here */}
                    </div>
                    <div className="flex justify-between items-center px-4 py-3">
                        <button
                            className="bg-red-500 text-white active:bg-red-60 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleResetFilters}
                        >
                            Reset
                        </button>

                        <div>
                            <button
                                className="bg-gray-300 text-gray-700 active:bg-gray-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={onClose}
                            >
                                Close
                            </button>
                            <button
                                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => onApply(filters)}
                            >
                                Apply
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
