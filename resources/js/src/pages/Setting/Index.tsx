import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import ReactApexChart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from '../../components/Dropdown';
import { setPageTitle } from '../../store/themeConfigSlice';
import api from "../../config/api";
import LoadingSasCrm from '../../components/LoadingSasCrm';
import {useUserStatus} from '../../config/authCheck';

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Setting'));
    });
    const [settingData, setSettingData] = useState([]);
    const [loading, setLoading] = useState(false);
    const {hasPermission, isLoading, isLoggedIn} = useUserStatus();

    const api_instance = new api();

    const fetchSetting = async () => {
        setLoading(true);
        const result = await api_instance.fetchDataSetting();
        setLoading(false);

        if (result.status) {

            setSettingData(result.data.data);
        }
    }
    
    useEffect(() => {
        // Call the fetchSetting function when the component mounts
        fetchSetting();
    }, []);

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/app/setting" className="text-primary hover:underline">
                        Setting
                    </Link>
                </li>

            </ul>
            <div className="pt-5">


             
           
                    
                    {(!hasPermission(`read-setting-group`) || loading)  ? (
                        <LoadingSasCrm/>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 mb-6 text-white">
                            {settingData.map((data) => (
                        
                                    <div key={data.id} className="h-full flex-wrap w-full justify-center mb-5 ">
                                        <div className="h-full border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 pt-12 mt-8 relative">
                                            <div className="bg-primary absolute text-white-light ltr:left-6 rtl:right-6 -top-8 w-16 h-16 rounded-md flex items-center justify-center mb-5 mx-auto">
                                                <div dangerouslySetInnerHTML={{ __html: data.icon }} />
                                            </div>
                                            <h5 className="text-dark text-lg font-semibold mb-3.5  dark:text-white-light">{data.label}</h5>
                                            {data.items.map((item) => (
                                                <div key={item.id} className="text-black  hover:underline" id="general_accountInfo" migrationid="" data-permission="true" data-cid="permission">
                                                    <Link to={`/app/${item.uri}`}>{item.label}</Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                            ))}
                        </div>
                    )}
                </div>
            </div>

     
    );
};

export default Index;
