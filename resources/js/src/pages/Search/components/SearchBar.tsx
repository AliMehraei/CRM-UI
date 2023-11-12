import React, {useEffect, useState} from 'react';
import FilterModal from './FilterModal';

const SearchBar = ({setFilters, filters, setQuery, query}: any) => {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState(); // Added state to keep track of input value

    const handleFilterClick = () => {
        setIsFilterModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsFilterModalOpen(false);
    };

    const handleApplyFilters = () => {
        setFilters(filters);
        setIsFilterModalOpen(false);
    };
    const handleSearchClick = () => {
        setQuery(inputValue);
    };


    // Function to update the inputValue state as the user types in the search field
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        setInputValue(query);
    }, [query]);


    return (
        <div>
            <div className="flex justify-between items-center p-4 bg-white shadow">
                <input
                    type="text"
                    placeholder={"Search everything"}
                    className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                    defaultValue={query}
                    onChange={handleInputChange} // Set the onChange event to handleInputChange
                />
                <button
                    type="button"
                    onClick={handleSearchClick}
                    className="ml-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    <span>Search</span>
                </button>
                <button
                    type="button"
                    onClick={handleFilterClick}
                    className="ml-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                    Filter
                </button>
            </div>
            <FilterModal isOpen={isFilterModalOpen} onClose={handleCloseModal} onApply={handleApplyFilters}/>

        </div>
    );
};

export default SearchBar;
