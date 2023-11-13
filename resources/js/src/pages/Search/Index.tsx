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
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [filters, setFilters] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleSearch = async () => {
        setLoading(true);
        const results = await api_instance.globalSearchFull({
            search: query,
            filters: filters, page: page
        });
        setSearchResults(results.data);
    };

    useEffect(() => {
        const url = new URL(window.location.href);

        const params = new URLSearchParams(url.search);

        const textSearch = params.get('text');
        setQuery(textSearch ?? '');
    }, []);

    useEffect(() => {
        handleSearch().then(() => setLoading(false));
    }, [page, filters, query]);

    return (
        <div className="h-[calc(100vh_-_205px)]">
            <div className="panel px-0 border-white-light dark:border-[#1b2e4b] h-full">
                <div className={`personal-setting-table h-full`}>
                    <div className="grid grid-cols-7 gap-6 h-full">
                        <div className='col-span-1 h-full'>
                             <Sidebar />
                        </div>
                        <div className="panel col-span-6 border rounded-lg shadow-lg bg-white p-5 h-full">
                             <SearchBar setQuery={setQuery} query={query} filters={filters} setFilters={setFilters} />
                             <SearchResults query={query} results={searchResults} setPage={setPage} page={page} loading={loading} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Index;
