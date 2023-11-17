// SearchResults.jsx
import React, {useEffect, useState} from 'react';
import SearchResultItem from './SearchResultItem';
import {modelRouteMap} from "../../../components/Functions/CommonFunctions";
import SelectedItemInfo from "./SelectedItemInfo";
import LoadingSpinner from "../../../components/LoadingSpinner";

const SearchResults = ({query, results, page, setPage, loading,resultListRef}: any) => {

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


    // useEffect(() => {
    //     console.log("useEffect started");
    //
    //     const searchResultList = document.getElementById('search-result-list');
    //     console.log("searchResultList", searchResultList);
    //     console.log("length", results.length);
    //     console.log("results", results.length);
    //
    //     if(searchResultList && results.length > 0){
    //         console.log("pagee", page);
    //         console.log("rrrrr", searchResultList.style.height);
    //
    //         searchResultList.style.maxHeight = '300px';
    //     }
    // }, [page,loading]);

    if (loading)
        return <LoadingSpinner/>
    return (
        <div className="flex h-[calc(100vh_-_350px)] ">
            {/* Sidebar for search results */}
            <div id="search-result-list" className="w-1/3 bg-white overflow-auto" ref={resultListRef}>
                {results.map((result: any, index: any) => (
                    <React.Fragment key={index}>
                        {result.map((v: any, i: any) => (
                            <SearchResultItem
                                key={`${index}-${i}`}  // Using a combination of index and i to create a unique key
                                item={v}
                                onSelect={(val: any) => handleSelectItem(Object.keys(v)[0], val)}
                            />
                        ))}
                    </React.Fragment>
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
