// SearchResults.jsx
import React, {useEffect, useState} from 'react';
import LoadingSpinner from "../../../components/LoadingSpinner";
import Api from "../../../config/api";
import TableSection from './TableSection';
import { leadColumns } from './ItemInfo/ItemColumns';
import GenerateTableList from './GenerateTableList';
import FullScreenModal from './FullScreenModal';

const SearchResults = ({query, results, page, setPage, loading,resultListRef,activeIndexRef,filters}: any) => {

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




    const isEmptyObject = (obj: any) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    const isSelectedItemEmpty = isEmptyObject(selectedItem);

    const groupedResults: Record<string, any[]> = {};
    results.forEach(result => {
        result.forEach((v: any) => {
        const modelLabelField = Object.keys(v)[0];
        if (!groupedResults[modelLabelField]) {
            groupedResults[modelLabelField] = [];
        }
        groupedResults[modelLabelField].push(v);
        });
    });

    
    



    return (

        <div className="">


            <div id="search-result-list" className="h-full bg-white overflow-auto" ref={resultListRef}>
                {(loading  ? (
                    <LoadingSpinner/>
                ):(
                    <>

                        <GenerateTableList
                        frontRoute="globalSearchFull"
                        query={query}
                        filters={filters}
                        />
                        
              

                    </>
                ))}
            </div>

            

        </div>
    );
};
export default SearchResults;
