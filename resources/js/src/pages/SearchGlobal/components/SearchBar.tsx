import React, {useEffect, useState} from 'react';
import FilterModal from './FilterModal';
import { Navigate } from 'react-router-dom';

const SearchBar = ({setFilters, filters, setQuery, query, handleSearch}: any) => {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState(); // Added state to keep track of input value

    const handleFilterClick = () => {
        setIsFilterModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsFilterModalOpen(false);
    };

    const handleApplyFilters = (val: any) => {
        setFilters(val);
        setIsFilterModalOpen(false);
    };
    const handleSearchClick = () => {
        setQuery(inputValue);
        handleSearch();

    };


    // Function to update the inputValue state as the user types in the search field
    const handleInputChange = (e: any) => {
        setQuery(e.target.value);
        setInputValue(e.target.value);

    };

    useEffect(() => {
        setInputValue(query);
    }, [query]);

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            handleSearchClick()
        }
    };
    const handlePreviousPage = () => {
        window.history.back(); //TODO:fix
    }
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow">
            <button
                type="button"
                onClick={handleFilterClick}
                className="ml-4 px-4 py-2 bg-gray-800 text-gray-700 flex items-center"
            >
                <svg className="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
                
            </button>
            <input
                type="text"
                placeholder={"Search everything"}
                className="flex-grow  p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-200"
                defaultValue={query}
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
            />
            <button
                type="button"
                onClick={handlePreviousPage}
                className="ml-4 px-4 py-2 bg-gray-100 text-gray-700  hover:bg-gray-400 flex items-center"
            >
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg> */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <FilterModal isOpen={isFilterModalOpen} onClose={handleCloseModal} onApply={handleApplyFilters}/>

        </div>

            
    );
};

export default SearchBar;
