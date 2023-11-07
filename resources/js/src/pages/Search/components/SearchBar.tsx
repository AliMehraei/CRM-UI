import React, {useState} from 'react';
import FilterModal from './FilterModal';

const SearchBar = () => {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filters, setFilters] = useState<any>();

    const handleFilterClick = () => {
        setIsFilterModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsFilterModalOpen(false);
    };

    const handleApplyFilters = (filters: any) => {
        setFilters(filters)
        setIsFilterModalOpen(false);
    };

    const handleSearch = () => {

    }

    return (
        <div className="flex justify-between items-center p-4 bg-white shadow">
            <input type="text" placeholder="Search across apps"
                   className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"/>
            <button type="button" onClick={handleSearch}
                    className="ml-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                <span>Search</span>

            </button>
            <button
                type="button"
                onClick={handleFilterClick}
                className="ml-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
                Filter
            </button>
            <FilterModal isOpen={isFilterModalOpen} onClose={handleCloseModal} onApply={handleApplyFilters}/>
        </div>
    );
};

export default SearchBar;
