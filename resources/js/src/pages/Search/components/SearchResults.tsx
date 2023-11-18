// SearchResults.jsx
import React, {useEffect, useState} from 'react';
import SearchResultItem from './SearchResultItem';
import {modelRouteMap} from "../../../components/Functions/CommonFunctions";
import SelectedItemInfo from "./SelectedItemInfo";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Api from "../../../config/api";

const SearchResults = ({query, results, page, setPage, loading,resultListRef}: any) => {

    const [selectedItem, setSelectedItem] = useState({});
    const [itemPath, setItemPath] = useState('');
    const [loadingItem, setLoadingItem] = useState(false);
    const api_instance = new Api();
    const [data, setData] = useState<any>([]);


    const handleSelectItem = (groupName: any, val: any) => {

        CallGetRelationModel(groupName,val.id);
        // setSelectedItem({group: groupName, val: val});
        // setItemPath(`/${modelRouteMap[groupName]}/preview/${val.id}`)
    };

    const CallGetRelationModel = async (groupName: any,id:any) => {

        try {
            setLoadingItem(true);

            const results = await api_instance.getRelationModel(groupName,id);

            setData([groupName,results.data]);

            // Concatenate the new data with the existing results
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            // Scroll to the first new item
            setLoadingItem(false);

        }
    };

    useEffect(() => {
        if(data.length>0){
            setSelectedItem({group: data[0], val: data[1]});
            setItemPath(`/${modelRouteMap[data[0]]}/preview/${data[1].id}`)
        }

    }, [data]);


    const isEmptyObject = (obj: any) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    const isSelectedItemEmpty = isEmptyObject(selectedItem);



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
                                loadingItem={loadingItem}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>

            {/* Main content area for selected item details */}
            <div className="w-2/3 bg-gray-50 p-5">
                {!isSelectedItemEmpty ? (
                    <SelectedItemInfo
                        loadingItem={loadingItem}
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
