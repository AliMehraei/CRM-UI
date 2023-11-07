// FilterModal.tsx
import React, { useState } from 'react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: any) => void; // Modify this type based on what your filters are
}

export const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, onApply }) => {
  // Define your default filter state here
  const defaultFilters = {
    modules: 'All Modules',
    // ... other filter states
  };

  const [filters, setFilters] = useState(defaultFilters);

  const handleResetFilters = () => {
    setFilters(defaultFilters);
    // Optionally call onApply if you want the reset to be applied immediately
    // onApply(defaultFilters);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Advanced Filters</h3>
          <div className="mt-2 px-7 py-3">
            <div className="mb-4">
              <label htmlFor="modules" className="block text-gray-700 text-sm font-bold mb-2">Modules</label>
              <select 
                id="modules" 
                name="modules" 
                value={filters.modules}
                onChange={(e) => setFilters({ ...filters, modules: e.target.value })}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>All Modules</option>
                <option>Invoices</option>
                <option>Estimates</option>
                <option>Sales Orders</option>
                <option>Tasks</option>
              </select>
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
