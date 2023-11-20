import React, {useEffect} from "react";
import {formatDate} from "../../../components/Functions/CommonFunctions";
// const groupIcons: any = {
//     "Rfq": "/assets/images/sascrm.svg",
//     "Account": "/assets/images/sascrm.svg",
//
// };
const SearchResultItem = ({ item, onSelect }:any) => {
    const group = Object.keys(item)[0];
    // const iconPath = groupIcons[group]; // Get the icon for this group
    const groupFirstLetter = group.charAt(0).toUpperCase(); // Get the first letter and make it uppercase

    return (
        <>
        {item[group].map((result:any, index:any) => (
                <div key={index}
                    onClick={() => onSelect(result)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                    <div className="flex items-center">
                        <h4 className="text-sm font-semibold flex-grow">{result.model_label_field}</h4>
                        <h4 className="text-xs font-semibold mr-3">{group}</h4>
                        {/*<span className="w-12 h-12 mr-2"> {iconPath && (*/}
                        {/*    <img src={iconPath} alt={`${group} icon`} className="w-12 h-12 mr-2" />*/}
                        {/*)}</span>*/}
                        <span className="w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-xl">
                        {groupFirstLetter}
                      </span>

                    </div>
                    <div className="grid grid-cols-6 gap-6 mb-6">
                        <div className='col-span-3'>
                            <p className="text-xs text-gray-600">{result.owner?.first_name} {result.owner?.last_name}</p>
                            <p className="text-xs text-gray-600">{formatDate(result.created_at)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
export default SearchResultItem;
