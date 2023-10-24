import React from "react";
import Select from "react-select";
import FilterValueField from "./FilterValueField";

const SearchOptionComponent = ({option, handleConditionChange, filters, filterState, setFilters, filterOptionRef}: any) => {
    const selectedFilterOption = filterOptionRef?.current?.filters[option.value]?.condition || null;

    return (
        <div>
            <h3 className="text-lg font-semibold mt-4">Search Options</h3>
            <div className="mb-4">
                <div className="mb-2">
                    <label className="block font-semibold">Search include for {option.label}:</label>
                    <Select
                        onChange={(e) => handleConditionChange(option.value, e)}
                        placeholder="Select an include"
                        options={option.conditions}
                        defaultValue={option.conditions.find((item: any) => item.value == selectedFilterOption)}
                    />
                </div>
                {filters[option.value] && (
                    <div className="mb-2">
                        <FilterValueField
                            filterOptionRef={filterOptionRef}
                            filterSelect={filters[option.value]}
                            option={option}
                            setFilters={setFilters}
                            filters={filters}
                            filterState={filterState}
                        />
                    </div>
                )}
            </div>
        </div>
    )
};

export default SearchOptionComponent;
