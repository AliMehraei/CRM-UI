
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { formatDate } from "@fullcalendar/core";
import { useDispatch } from "react-redux";
import { Sidebar } from './components/Sidebar';
import { SearchBar } from './components/SearchBar';

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Search'));
    }, [dispatch]);




    return (
        <>
            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">

                <div className={`personal-setting-table`}>

                    <div className="grid grid-cols-7 gap-6 mb-6">
                        <div className='panel col-span-1'>
                        <Sidebar />
                        </div>
                        <div className="panel col-span-6 border rounded-lg shadow-lg bg-white p-5">
                        <SearchBar />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
