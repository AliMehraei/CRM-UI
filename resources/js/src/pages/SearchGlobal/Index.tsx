import React,{useEffect, useState,useRef} from 'react';
import {setPageTitle} from '../../store/themeConfigSlice';
import {useDispatch} from "react-redux";
import Sidebar from './components/Sidebar';
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Api from "../../config/api";
import FullScreenModal from './components/FullScreenModal';

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Search Global'));
    }, [dispatch]);
    const [searchResults, setSearchResults] = useState<any>([]);
    const api_instance = new Api();
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState('');
    const [filters, setFilters] = useState([]);
    const [loading, setLoading] = useState(false);
    const resultListRef = useRef(null);
    const activeIndexRef = useRef(0);

    const handleSearch = async () => {
        setPage(0);
        activeIndexRef.current=0;
        setSearchResults([]);
        // CallSearch();
    };

    const CallSearch = async () => {

        try {
            setLoading(true);
            const results = await api_instance.globalSearchFull({
                search: query,
                filters: filters,
                page: page
            });

            // Concatenate the new data with the existing results
            if(page>0){
                setSearchResults((prevResults: any[]) => [...prevResults, results.data]);
            }
            else{
                setSearchResults([results.data]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            // Scroll to the first new item
            setLoading(false);

        }
    };



    useEffect(() => {
        if(searchResults.length>0){
            let countResult=0;
            searchResults.map(function (innerArray: any) {

                innerArray.map(function (item: any) {
                    const group = Object.keys(item)[0];
                    countResult+=item[group].length;
                });
            });

            if(page>0){
                scrollToFirstNewItem()
            }
            activeIndexRef.current=countResult ;

            const searchResultList = document.getElementById('search-result-list');
            if (!searchResultList || activeIndexRef.current<8 ) return;

            if (searchResultList) {
                searchResultList.addEventListener('scroll', handleScroll);
            }
            return () => {
                searchResultList.removeEventListener('scroll', handleScroll);

            };
        }

    }, [searchResults]);
    const scrollToFirstNewItem = () => {
        const resultList = resultListRef.current as any;
        // console.log("result",searchResults.length);

        // console.log('resultList',resultList);

        if (resultList) {
            const newItemElement: any = resultList.children[activeIndexRef.current] as any;
            // console.log("uuuu",newItemElement)
            //
            if(newItemElement){
                // console.log("vvv",newItemElement)

                newItemElement.scrollIntoView({ behavior: 'smooth' });

            }
            //     if(searchResults.length > 5){
        //         // Scroll to the first new item
        //         const newItemIndex = (page - 1) * searchResults.length;
        //         console.log(newItemIndex);
        //         // const newItemElement = resultList.childNodes[newItemIndex] as HTMLDivElement;
        //         // newItemElement.scrollIntoView({ behavior: 'smooth' });
        //     }
        //
        //
        //
        }
    };

    useEffect(() => {
        const url = new URL(window.location.href);

        const params = new URLSearchParams(url.search);

        const textSearch = params.get('text');

        if (textSearch != null && textSearch != '')
            setQuery(textSearch ?? '');
    }, []);
    useEffect(()=>{
        if(page==0){

            setSearchResults([]);
            activeIndexRef.current=0;
            // CallSearch();
        }
        else{
            if(query!=''){
                setPage(0);
                setSearchResults([]);
                activeIndexRef.current=0;
                // CallSearch();
            }
        }



    },[query,filters])

    useEffect(()=>{
        // if(query!='')
        //     CallSearch();

    },[page])

    const handleScroll = () => {
        const searchResultList = document.getElementById('search-result-list');
        if (!searchResultList) return;
        const scrollTop = searchResultList.scrollTop;
        const scrollHeight = searchResultList.scrollHeight;
        const clientHeight = searchResultList.clientHeight;

        // Check if the user has reached the bottom of the scroll
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 100;

        if (isAtBottom && !loading) {
            // Increment the page only when the user has reached the bottom
            setPage((prevPage: any) => prevPage + 1);
        }
    };

    const toggleModal = () => {

        console.log("redirect");
        
    };

    return (
        // <FullScreenModal isOpen={true} onClose={toggleModal}>

        <div className="">
            {/* <div className="panel px-0 border-white-light dark:border-[#1b2e4b] h-full"> */}
                <div className={`personal-setting-table`}>
                    <div className="gap-6 w-full">
                        {/* <div className="panel col-span-6 border rounded-lg shadow-lg w-full bg-white p-5 h-full"> */}
                            <SearchBar handleSearch={handleSearch} setQuery={setQuery} query={query} filters={filters}
                                       setFilters={setFilters}/>
                            <SearchResults query={query} results={searchResults} resultListRef={resultListRef}
                                           setPage={setPage} page={page} loading={loading} activeIndexRef={activeIndexRef} filters={filters}

                            />
                        {/* </div> */}
                    </div>
                </div>
            {/* </div> */}
        </div>
        // </FullScreenModal>
    );


};

export default Index;
