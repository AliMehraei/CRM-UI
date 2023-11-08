// SearchResultItem.jsx
import SearchResults from "./SearchResults";
import React, {useEffect} from "react";

const SearchResultItem = ({ item, onSelect }:any) => {
    const group = Object.keys(item)[0];

    return (
        <>
        {item[group].map((result:any, index:any) => (
                <div
                    onClick={() => onSelect(result)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                    <h4 className="text-sm font-semibold">{result.model_label_field}</h4>
                    <p className="text-xs text-gray-600">{group}</p>
                    {/* Add more item details here */}
                </div>
            ))}
        </>
    );
};
export default SearchResultItem;
