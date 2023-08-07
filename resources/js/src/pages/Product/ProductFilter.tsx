import React, { useState } from 'react';

const ProductFilter = ({ optionsFilter, onApplyFilter }) => {
    const [searchQuery, setSearchQuery] = useState(''); // State for search input
    const [selectedFields, setSelectedFields] = useState([]);

    const optionsConditionFilter = [
        { value: 'is', label: 'is' },
        { value: 'is_not', label: "isn't" },
        // ... (other options)
    ];

    const handleFieldChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedFields((prevSelectedFields) => [...prevSelectedFields, value]);
        } else {
            setSelectedFields((prevSelectedFields) =>
                prevSelectedFields.filter((field) => field !== value)
            );
        }
    };

    let filteredOptions = [];
    if (optionsFilter && optionsFilter.length > 0) {
        filteredOptions = optionsFilter.filter((option) =>
            option.label.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return (
        <div className="panel col-span-1">
            <h2 className="text-xl font-bold mb-4">Filter By Fields</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search fields..."
                    className="border p-2 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block font-semibold">Filter by:</label>
                {filteredOptions.map((option) => (
                    <div key={option.value} className="mb-2">
                        <input
                            type="checkbox"
                            value={option.value}
                            onChange={handleFieldChange}
                            checked={selectedFields.includes(option.value)}
                        />
                        <span className="ml-2">{option.label}</span>
                    </div>
                ))}
            </div>
            {selectedFields.length > 0 && (
                <div>
                    {filteredOptions.map((option) =>
                        selectedFields.includes(option.value) ? (
                            <div key={option.value}>
                                <h3 className="text-lg font-semibold mt-4">Search Options</h3>
                                <div className="mb-4">
                                    <label className="block font-semibold">Search include for {option.value}:</label>
                                    <select className="border p-2 w-full">
                                        {optionsConditionFilter.map((conditionOption) => (
                                            <option key={conditionOption.value} value={conditionOption.value}>
                                                {conditionOption.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label className="block font-semibold">Value:</label>
                                    <input
                                        type="text"
                                        placeholder={`Search value for ${option.value}`}
                                        className="border p-2 w-full"
                                    />
                                </div>
                            </div>
                        ) : null
                    )}
                </div>
            )}
            {selectedFields.length > 0 && (
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={onApplyFilter}
                >
                    Apply Filter
                </button>
            )}
        </div>
    );
};

export default ProductFilter;
