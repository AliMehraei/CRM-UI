import React, { useEffect, useState } from 'react';
import AsyncSelect from "react-select/async";
import Api from "../../../config/api";
import { modelRouteMap } from "../../Functions/CommonFunctions";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
    const [search, setSearch] = useState(false);
    const [text, setText] = useState('');
    const [timer, setTimer] = useState<any>(null)
    const navigate = useNavigate();

    const api_instance = new Api();
    const CustomDropDownIndicator = () => <>
        <button type="button"
            className="absolute w-9 h-9 inset-0 ltr:left-auto rtl:left-auto appearance-none peer-focus:text-primary">
            <svg className="mx-auto" width="16" height="16" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" strokeWidth="1.5"
                    opacity="0.5" />
                <path d="M18.5 18.5L22 22" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" />
            </svg>
        </button>
        <button type="button"
            className="hover:opacity-80 sm:hidden block absolute top-1/2 -translate-y-1/2 ltr:left-2 rtl:left-2"
            onClick={() => setSearch(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor"
                    strokeWidth="1.5" />
                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        </button>
    </>

    const loadOptions = (inputValue: any, callback: any) => {
        setText(inputValue);
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
                    return { label: (<a href={`/${modelRouteMap[group]}/list`}>{group}</a>), options };
                })
                data.unshift({ label: (<SearchResultButton searchText={inputValue} />) })
                callback(data);
            } catch (error) {
                console.error('Error fetching options:', error);
                callback([{ label: (<SearchResultButton searchText={inputValue} />) }]);
            }
        };

        const newTimer = setTimeout(() => {
            fetchData();
        }, 500)

        setTimer(newTimer)

    };

    const handleSearchGlobal = (searchText) => {
        // Custom logic to build your URL based on the searched text
        const customUrl = `/search-global?text=${encodeURIComponent(searchText)}`;
    
        // Redirect to the custom URL
        window.location.href = customUrl;
        setText("");
    };

    const SearchResultButton = ({ searchText }: any) => (
        <div className='bg-white items-center fixed' style={{top: '35px', width: '100%', right:'0px', zIndex: 1000 ,height:'40px', borderRadius :'5px' , border:'1px solid #ebebeb'}}>
            <div className="inline-flex justify-center items-center space-x-2 w-full pt-2">
                <a className="font-bold  text-blue-500 hover:text-blue-800" href={`/search?text=${searchText}`}>
                    Advanced Search
                </a>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5"
                        d="M20.3133 11.1566C20.3133 16.2137 16.2137 20.3133 11.1566 20.3133C6.09956 20.3133 2 16.2137 2 11.1566C2 6.09956 6.09956 2 11.1566 2C16.2137 2 20.3133 6.09956 20.3133 11.1566Z"
                        fill="currentColor"></path>
                    <path
                        d="M17.1001 18.1219L20.7664 21.7882C21.0487 22.0705 21.5064 22.0705 21.7887 21.7882C22.071 21.5059 22.071 21.0482 21.7887 20.7659L18.1224 17.0996C17.809 17.4666 17.4671 17.8085 17.1001 18.1219Z"
                        fill="currentColor"></path>
                </svg>
            </div>
        </div>
    )

    useEffect(() => {
        const handleKeyPress = (e) => {
            // Check if the pressed key is Enter (key code 13)
            if (e.key === 'Enter') {
                e.preventDefault();
                setSearch(false);
                
                handleSearchGlobal(text);
            }
        };

        // Add event listener for key press
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            // Remove event listener on component unmount
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [text]);

    return (
        <>
            <form
                className={`${search && '!block'} sm:relative absolute inset-x-0 sm:top-0 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:mx-0 mx-4 z-10 sm:block hidden`}
                onSubmit={(e) => {
                    setSearch(false);
                }}
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
                        defaultOptions={[
                            {
                                label: (
                                    <SearchResultButton searchText={text} />
                                ),
                            },
                        ]}
                        isMulti={false}
                        placeholder="Search..."
                        name="global_search"
                        className="flex-1"
                        onMenuClose={() => {
                            // setText("")
                        }}
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
