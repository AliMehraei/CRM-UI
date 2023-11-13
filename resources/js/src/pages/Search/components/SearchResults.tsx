// SearchResults.jsx
import React, {useEffect, useState} from 'react';
import SearchResultItem from './SearchResultItem';
import SearchBar from "./SearchBar";
import {isEmptyChildren} from "formik";
import {modelRouteMap} from "../../../components/Functions/CommonFunctions";
import SelectedItemInfo from "./SelectedItemInfo";
import LoadingSpinner from "../../../components/LoadingSpinner";

const SearchResults = ({query, results, page, setPage, loading}: any) => {
    const [selectedItem, setSelectedItem] = useState({});
    const [itemPath, setItemPath] = useState('');
    const handleSelectItem = (groupName: any, val: any) => {
        setSelectedItem({group: groupName, val: val});
        setItemPath(`/${modelRouteMap[groupName]}/preview/${val.id}`)
    };
    const isEmptyObject = (obj: any) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    const isSelectedItemEmpty = isEmptyObject(selectedItem);
    const handleScroll = () => {
        /*const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight =
            document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight =
            document.documentElement.clientHeight || window.innerHeight;
        if (scrollTop + clientHeight >= scrollHeight - 10 && results.length > 0) {
            // User has reached the bottom of the page
            setPage((prevPage: number) => prevPage + 1); // Increment the page
        }*/
        const searchResultList = document.getElementById('search-result-list');
        if (!searchResultList) return;
        const scrollTop = searchResultList.scrollTop;
        const scrollHeight = searchResultList.scrollHeight;
        const clientHeight = searchResultList.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight - 10 && results.length > 0) {
            // User has reached the bottom of the search result list
            setPage((prevPage: any) => prevPage + 1); // Increment the page
        }
    };

    useEffect(() => {

        const searchResultList = document.getElementById('search-result-list');

        if (searchResultList) {
            searchResultList.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (searchResultList) {
                searchResultList.removeEventListener('scroll', handleScroll);
            }
        };
    }, [page, query, loading]); // Re-run the effect when the page changes

    if (loading)
        return <LoadingSpinner/>
    return (
        <div className="flex h-[calc(100vh_-_350px)] ">
            {/* Sidebar for search results */}
            <div id="search-result-list" className="w-1/3 bg-white overflow-auto">
                {results.map((result: any, index: any) => (
                    <SearchResultItem
                        key={index}
                        item={result}
                        onSelect={(val: any) => handleSelectItem(Object.keys(result)[0], val)}
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
                    <div className="flex justify-center items-center min-h-[600px]">
                        <p>Select an item to view details</p>
                    </div>
                )}
            </div>

        </div>
    );
};
export default SearchResults;
