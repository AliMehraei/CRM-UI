import {useEffect, useState} from 'react';
import {setPageTitle} from '../../store/themeConfigSlice';
import {useDispatch} from "react-redux";
import Sidebar from './components/Sidebar';
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Api from "../../config/api";

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Search'));
    }, [dispatch]);
    const [searchResults, setSearchResults] = useState([]);
    const api_instance = new Api();

    // Assume you have a function to fetch search results
    const handleSearch = async (query:string) => {
        const results =await api_instance.globalSearchFull({search:query});
        setSearchResults(results.data);
    };

    return (
        <>
            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">

                <div className={`personal-setting-table`}>

                    <div className="grid grid-cols-7 gap-6 mb-6">
                        <div className='panel col-span-1'>
                            <Sidebar/>
                        </div>
                        <div className="panel col-span-6 border rounded-lg shadow-lg bg-white p-5">
                            <SearchBar onSearch={handleSearch}/>
                            <SearchResults results={searchResults} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
