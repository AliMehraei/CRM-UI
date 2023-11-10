// SearchResults.jsx
import React, {useEffect, useState} from 'react';
import SearchResultItem from './SearchResultItem';
import SearchBar from "./SearchBar";
import {isEmptyChildren} from "formik";
import {modelRouteMap} from "../../../components/Functions/CommonFunctions";
import SelectedItemInfo from "./SelectedItemInfo";

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
                        key={index}
                        item={result}
                        onSelect={(val:any) => handleSelectItem(Object.keys(result)[0],val)}
                    />
                ))}
            </div>

            {/* Main content area for selected item details */}
            <div className="w-2/3 bg-gray-50 p-5">
                {!isSelectedItemEmpty ? (
                    <SelectedItemInfo

                        selectedItem={selectedItem}
                        itemPath={itemPath}

                    />
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
