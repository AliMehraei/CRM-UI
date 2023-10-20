
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import api from "../../config/api";
import LoadingSasCrm from '../../components/LoadingSasCrm';

const LeftMenuSetting = ({frontRoute}: any) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { hasPermission } = useUserStatus();
    const api_instance = new api();
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        dispatch(setPageTitle('Personal Settings'));
    }, [dispatch]);
    const [settingData, setSettingData] = useState([]);
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
        (!hasPermission(`read-setting-group`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <>
            <div className="panel col-span-1">
                <h2 className="text-xl font-bold mb-4">Setup</h2>

                {/* Search input */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search ..."
                        className="border p-2 w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Setting menu */}
                <div className="mb-4">
                    <label className="block font-semibold">Filter by:</label>
                    
                </div>


                
            </div>
            </>

        )
    );
};

export default LeftMenuSetting;
