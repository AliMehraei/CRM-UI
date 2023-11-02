import React, {useState} from 'react';
import AsyncSelect from "react-select/async";
import Api from "../../../config/api";
import Select from "react-select";
import {modelRouteMap} from "../../Functions/CommonFunctions";
import {useNavigate} from "react-router-dom";

const SearchSection = () => {
    const [search, setSearch] = useState(false);
    const [timer, setTimer] = useState<any>(null)
    const navigate = useNavigate();

    const api_instance = new Api();
    const CustomDropDownIndicator = () => <>
        <button type="button"
                className="absolute w-9 h-9 inset-0 ltr:left-auto rtl:left-auto appearance-none peer-focus:text-primary">
            <svg className="mx-auto" width="16" height="16" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" strokeWidth="1.5"
                        opacity="0.5"/>
                <path d="M18.5 18.5L22 22" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round"/>
            </svg>
        </button>
        <button type="button"
                className="hover:opacity-80 sm:hidden block absolute top-1/2 -translate-y-1/2 ltr:left-2 rtl:left-2"
                onClick={() => setSearch(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor"
                        strokeWidth="1.5"/>
                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor"
                      strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        </button>
    </>

    const loadOptions = (inputValue: any, callback: any) => {
        clearTimeout(timer);
        const fetchData = async () => {
            try {
                const response = await api_instance.globalSearch(inputValue);
                let data = Object.values(response.data);
                data = data.flatMap((item: any) => {
                    const group = Object.keys(item)[0]; // Assuming each item has only one key
                    const options = item[group].map((entry: any) => {
                        entry.group = group;
                        const entryPath = `/${modelRouteMap[group]}/preview/${entry.id}`;
                        return ({
                            value: entry,
                            label: (
                                <a href={entryPath}>
                                    {entry.model_label_field}
                                </a>
                            ),
                        })
                    });
                    return {label: (<a href={`/${modelRouteMap[group]}/list`}>{group}</a>), options};
                })
                callback(data);
            } catch (error) {
                console.error('Error fetching options:', error);
                callback([]);
            }
        };

        const newTimer = setTimeout(() => {
            fetchData()
        }, 500)

        setTimer(newTimer)

    };


    return (
        <>
            <form
                className={`${search && '!block'} sm:relative absolute inset-x-0 sm:top-0 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:mx-0 mx-4 z-10 sm:block hidden`}
                onSubmit={() => setSearch(false)}
            >
                <div className="relative">
                    <AsyncSelect
                        components={{
                            DropdownIndicator: CustomDropDownIndicator,
                        }}
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                width: '250px',
                                height: '40px',
                            }),
                        }}
                        loadOptions={loadOptions}
                        isMulti={false}
                        placeholder="Search..."
                        name="global_search"
                        className="flex-1"
                        menuPlacement="auto" // or "bottom" based on your preference
                        onChange={(e: any) => {
                            if (e.value == null)
                                return;
                            const model = e.value.group;
                            const id = e.value.id;
                            const entryPath = `/${modelRouteMap[model]}/preview/${id}`;
                            navigate(entryPath);

                        }}
                    />

                </div>
            </form>
        </>
    );
};

export default SearchSection;
