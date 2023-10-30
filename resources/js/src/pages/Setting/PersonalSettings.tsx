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
                                                                className="ml-2 bg-gray-200 text-sm px-2 py-1 rounded-full">{user?.roles[0]?.name}</span>
                                                        </h3>
                                                        <p className="text-gray-600 mb-1">{user?.website}</p>
                                                        <p className="text-gray-600">{user?.email}</p>
                                                    </div>
                                                </div>

                                                <div className="border-t pt-5">
                                                    <h4 className="text-lg font-bold mb-4">User Information</h4>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="firstName">First Name:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="firstName"
                                                               defaultValue={user?.first_name}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="lastName">Last Name:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="lastName"
                                                               defaultValue={user?.last_name}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="Email">Email:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="Email"
                                                               defaultValue={user?.email}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="Role">Role:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="Role"
                                                               defaultValue={user?.roles[0]?.name}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="Profile">Profile:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="Profile"
                                                               defaultValue={user?.roles[0]?.name}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="Added By">Added By:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="Added By"
                                                               defaultValue={user?.last_name}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="Alias">Alias:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="Alias"
                                                               defaultValue={user?.alias}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="Phone">Phone:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="Phone"
                                                               defaultValue={user?.phone}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="Mobile">Mobile:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="Mobile"
                                                               defaultValue={user?.mobile}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="Website">Website:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="Website"
                                                               defaultValue={user?.website}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="Fax">Fax:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="Fax"
                                                               defaultValue={user?.fax}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="date_of_birth">Date of Birth:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="date_of_birth"
                                                               defaultValue={user?.date_of_birth}/>
                                                    </div>
                                                  
                                                    
                                                </div>
                                                <div className="border-t pt-5">
                                                    <h4 className="text-lg font-bold mb-4">Address Information</h4>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="Street">Street:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="Street"
                                                               defaultValue={user?.street}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="City">City:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="City"
                                                               defaultValue={user?.city}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="State">State:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="State"
                                                               defaultValue={user?.state}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="zip_code">Zip Code:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="zip_code"
                                                               defaultValue={user?.zip_code}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="Country">Country:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="Country"
                                                               defaultValue={user?.country}/>
                                                    </div>
                                                   
                                                 
                                                    
                                                </div>
                                                <div className="border-t pt-5">
                                                    <h4 className="text-lg font-bold mb-4">Locale Information</h4>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="Language">Language:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="Language"
                                                               defaultValue={user?.language}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="country_locale">Country Locale:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="country_locale"
                                                               defaultValue={user?.country_locale}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="date_format">Date Format:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="date_format"
                                                               defaultValue={user?.date_format}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="time_format">Time Format:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="time_format"
                                                               defaultValue={user?.time_format}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="time_zone">Time Zone:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="time_zone"
                                                               defaultValue={user?.time_zone}/>
                                                    </div>
                                                    
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="currency">Preferred Currency:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="currency"
                                                               defaultValue={user?.currency}/>
                                                    </div>
                                                    <div className="flex mb-2">
                                                        <label className="w-32 font-semibold" htmlFor="name_format">Number Format:</label>
                                                        <input className="border rounded px-2 py-1" disabled id="name_format"
                                                               defaultValue={user?.name_format}/>
                                                    </div>
                                                    
                                                    
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
