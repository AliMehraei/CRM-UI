import {NavLink} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {setPageTitle} from '../../store/themeConfigSlice';
import {useDispatch} from "react-redux";
import {useUserStatus} from "../../config/authCheck";
import api from "../../config/api";
import LoadingSasCrm from '../../components/LoadingSasCrm';
import LeftMenuSetting from '../../components/FilterFields/LeftMenuSetting';
import {getUserData} from '../../config/config';
import {displayImage} from "../../components/Functions/CommonFunctions";

const List = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const {hasPermission} = useUserStatus();
    const api_instance = new api();
    const [searchQuery, setSearchQuery] = useState('');
    const user = getUserData();
    const [activeTab, setActiveTab] = useState('Personal Settings');

    useEffect(() => {
        dispatch(setPageTitle('Personal Settings'));
    }, [dispatch]);
    // const [settingData, setSettingData] = useState([]);
    // const fetchSetting = async () => {
    //     setLoading(true);
    //     const result = await api_instance.fetchDataSetting();
    //     setLoading(false);

    //     if (result.status) {

    //         setSettingData(result.data.data);
    //     }
    // }

    // useEffect(() => {
    //     // Call the fetchSetting function when the component mounts
    //     fetchSetting();
    // }, []);


    return (
        (!hasPermission(`read-setting-group`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <>
                <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">

                    <div className={`personal-setting-table`}>

                        <div className="grid grid-cols-7 gap-6 mb-6">

                            <LeftMenuSetting frontRouteName='personal_settings'/>


                            <div className="panel col-span-6 border rounded-lg shadow-lg bg-white p-5">
                                {loading ? (
                                    <div className='flex justify-center'>
                                        <span
                                            className="animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>
                                    </div>
                                ) : (
                                    <div className="">
                                        <div className="flex justify-start items-center space-x-6 mb-6">
                                            <button
                                                onClick={() => setActiveTab('Personal Settings')}
                                                className={`text-xl py-2 px-4 rounded ${activeTab === 'Personal Settings' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-gray-200'}`}>
                                                Personal Settings
                                            </button>
                                            <button
                                                onClick={() => setActiveTab('Keyboard Shortcuts')}
                                                className={`text-xl py-2 px-4 rounded ${activeTab === 'Keyboard Shortcuts' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-gray-200'}`}>
                                                Keyboard Shortcuts
                                            </button>
                                        </div>

                                        {activeTab === 'Personal Settings' && (
                                            <div>
                                                <div className="flex items-start mb-6">
                                                    <img
                                                        src={`${displayImage(user?.avatar_data)} `}
                                                        alt="userProfile" className="w-16 h-16  rounded-full mr-5"/>
                                                    <div>
                                                        <h3 className="text-lg font-semibold mb-1">{user?.first_name} {user?.last_name}
                                                            <span
                                                                className="ml-2 bg-gray-200 text-sm px-2 py-1 rounded-full">Administrator</span>
                                                        </h3>
                                                        <p className="text-gray-600 mb-1">{user?.website}</p>
                                                        <p className="text-gray-600">{user?.email}</p>
                                                    </div>
                                                </div>

                                                <div className="border-t pt-5">
                                                    <h4 className="text-lg font-bold mb-4">User Information</h4>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="firstName">First
                                                            Name:</label>
                                                        <input className="border rounded px-2 py-1" id="firstName"
                                                               defaultValue={user?.first_name}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="lastName">Last
                                                            Name:</label>
                                                        <input className="border rounded px-2 py-1" id="lastName"
                                                               defaultValue={user?.last_name}/>
                                                    </div>
                                                    {/* ... Add other user input fields here */}
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'Keyboard Shortcuts' && (
                                            <div>
                                                {/* Content for keyboard shortcuts */}
                                                Here you can define keyboard shortcuts.
                                            </div>
                                        )}
                                    </div>


                                )}

                            </div>

                        </div>
                    </div>
                </div>
            </>

        )
    );
};

export default List;
