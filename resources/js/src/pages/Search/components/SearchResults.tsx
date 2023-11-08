// SearchResults.jsx
import React, {useEffect, useState} from 'react';
import SearchResultItem from './SearchResultItem';
import SearchBar from "./SearchBar";
import {isEmptyChildren} from "formik";
import {modelRouteMap} from "../../../components/Functions/CommonFunctions";

const SearchResults = ({ results }:any) => {
    const [selectedItem, setSelectedItem] = useState({});
    const [itemPath, setItemPath] = useState('');
    const handleSelectItem = (groupName:any,val:any) => {
        setSelectedItem({ group: groupName, val: val });
        setItemPath(`/${modelRouteMap[groupName]}/preview/${val.id}`)
    };
    const isEmptyObject = (obj:any) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    const isSelectedItemEmpty = isEmptyObject(selectedItem);
    return (
        <div className="flex">
            {/* Sidebar for search results */}
            <div className="w-1/3 bg-white overflow-auto">
                {results.map((result:any, index:any) => (
                    <SearchResultItem
                        key={result[Object.keys(result)[0]][0]['id']}
                        item={result}
                        onSelect={(val:any) => handleSelectItem(Object.keys(result)[0],val)}
                    />
                ))}
            </div>

            {/* Main content area for selected item details */}
            <div className="w-2/3 bg-gray-50 p-5">
                {!isSelectedItemEmpty ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            {/* Section for the product name and icon */}
                            <div className="flex items-center mb-4">
                                <h3 className="text-xl font-bold mr-2">{selectedItem.group} : {selectedItem.val.model_label_field}</h3>
                                <a target='_blank' className="text-blue-600 hover:text-blue-800" href={itemPath}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="currentColor" stroke-width="1.5"></path><path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="1.5"></path></svg>
                                </a>
                            </div>

                            {/* Other information sections */}
                            <div className="mb-4">
                                <span className="text-sm font-semibold">Owner:</span>
                                <span className="text-sm ml-2">{selectedItem.val.owner}</span>
                            </div>

                            <div className="mb-4">
                                <span className="text-sm font-semibold">Tariff Code:</span>
                                <span className="text-sm ml-2">{selectedItem.val?.tariffCode}</span>
                            </div>

                            {/* ...more sections */}
                        </div>

                        <div>
                            {/* Section for additional information, potentially right-aligned */}
                            <div className="mb-4">
                                <span className="text-sm font-semibold">Quantity in Demand:</span>
                                <span className="text-sm ml-2">{selectedItem.val?.quantityDemand}</span>
                            </div>

                            <div className="mb-4">
                                <span className="text-sm font-semibold">Quantity Ordered:</span>
                                <span className="text-sm ml-2">{selectedItem.val?.quantityOrdered}</span>
                            </div>

                            {/* ...more sections */}
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-full">
                        <p>Select an item to view details</p>
                    </div>
                )}
            </div>

        </div>
    );
};
export default SearchResults;
