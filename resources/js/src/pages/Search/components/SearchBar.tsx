import React from 'react';

export const SearchBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <input type="text" placeholder="Search" className="flex-grow p-2 border border-gray-200 rounded" />
      <button type="button" className="ml-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        <span>Search</span>
        {/* Assuming you are using heroicons for example */}
        <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 4a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
          <path d="M3 9a1 1 0 011-1h2a1 1 0 110 2H4a1 1 0 01-1-1zm13 0h1a1 1 0 010 2h-1a1 1 0 010-2zm-5 0h1a1 1 0 010 2h-1a1 1 0 010-2z"/>
        </svg>
      </button>
    </div>
  );
};