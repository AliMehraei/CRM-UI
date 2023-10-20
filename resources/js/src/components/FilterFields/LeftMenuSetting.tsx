
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import api from "../../config/api";
import LoadingSasCrm from '../../components/LoadingSasCrm';
import { Link } from 'react-router-dom';
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
                <div className="mb-4">
          <ul className="space-y-2">
            {settingData.map((data) => (
              <li key={data.id} className="group">
                <Link
                  to={`${frontRoute}/${data.uri}`} // Adjust the route structure
                  className="text-primary group flex items-center justify-between py-2 px-4 hover:bg-primary-light hover:text-white rounded-md transition-colors duration-300"
                >
                  {data.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2 transform group-hover:rotate-180 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
                    
                </div>


                
            </div>
            </>

        )
    );
};

export default LeftMenuSetting;
