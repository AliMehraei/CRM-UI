// SearchResultItem.jsx
import SearchResults from "./SearchResults";
import React, {useEffect} from "react";

const SearchResultItem = ({ item, onSelect }:any) => {
    const group = Object.keys(item)[0];

    return (
        <>
        {item[group].map((result:any, index:any) => (
                <div key={index}
                    onClick={() => onSelect(result)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                    <h4 className="text-sm font-semibold">{result.model_label_field}</h4>
                    <div className="grid grid-cols-6 gap-6 mb-6">
                        <div className='col-span-3'>
                    <p className="text-xs text-gray-600">{result.owner?.first_name} {result.owner?.last_name}</p>
                            <p className="text-xs text-gray-600">{result.created_at}</p>
                        </div>
                        <div className="relative col-span-3 ">
                            <h4 className="absolute right-0 text-xs font-semibold ">{group}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
export default SearchResultItem;
