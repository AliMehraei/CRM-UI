
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import api from "../../config/api";
import LoadingSasCrm from '../../components/LoadingSasCrm';
import { Link } from 'react-router-dom';
const LeftMenuSetting = ({ frontRouteName }: any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { hasPermission } = useUserStatus();
  const api_instance = new api();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSettingData, setFilteredSettingData] = useState([]); // New state for filtered data

  useEffect(() => {
    dispatch(setPageTitle('Personal Settings'));
  }, [dispatch]);
  const [settingData, setSettingData] = useState([]);
  // Use state to track the expanded state of menu items
  const [expandedItems, setExpandedItems] = useState({});

  const fetchSetting = async () => {
    setLoading(true);
    const result = await api_instance.fetchDataSetting();
    setLoading(false);

    if (result.status) {

      setSettingData(result.data.data);
    }
  }
  // Function to toggle the expanded state of a menu item
  const toggleMenuItem = (id) => {
    setExpandedItems({
      ...expandedItems,
      [id]: !expandedItems[id],
    });
  };
  useEffect(() => {
    // Call the fetchSetting function when the component mounts
    fetchSetting();
  }, []);
  useEffect(() => {
    // Update filteredSettingData when searchQuery changes
    const filteredData = settingData.filter((data) => {
      const isMainMenuItemMatching = data.label.toLowerCase().includes(searchQuery.toLowerCase());
      const areChildItemsMatching = data.items.some((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return isMainMenuItemMatching || areChildItemsMatching;
    });
    setFilteredSettingData(filteredData);
    // Expand all groups when search results are found
    if (filteredData.length > 0 && searchQuery != '') {
      const expandedItemsCopy = { ...expandedItems };
      for (const data of filteredData) {
        expandedItemsCopy[data.id] = true;
      }
      setExpandedItems(expandedItemsCopy);
    }
    else {
      setExpandedItems({});
    }
  }, [searchQuery, settingData]);

  return (
    !hasPermission('read-setting-group') || loading ? (
      <LoadingSasCrm />
    ) : (
      <div className="panel col-span-1">
        <h2 className="text-xl font-bold mb-4">Setup</h2>

        {/* Search input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search ..."
            className="border rounded-lg shadow-lg p-2 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Setting menu */}
        <div className="mb-4">
          <ul className="space-y-2">
            {filteredSettingData.map((data) => (
              <li key={data.id} className="group">
                <div
                  onClick={() => toggleMenuItem(data.id)} // Toggle the expanded state on click
                  className="group flex items-center justify-between py-2 px-4 hover:bg-primary-light hover:text-primary rounded-md transition-colors duration-300 cursor-pointer"
                >
                  {data.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ml-2 transform transition-transform duration-300 ${expandedItems[data.id] ? 'rotate-180' : ''
                      }`}
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
                </div>

                {/* Show child items if expanded */}
                {(expandedItems[data.id] && data.items && data.items.length > 0) && (
                  <ul >
                    {data.items.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={`/${item.uri}`}
                          className={`pl-8 text-black block py-2 rounded-md transition-colors duration-300 
                              hover:bg-primary-light ${frontRouteName === item.name ? 'bg-primary-light text-primary' : 'hover:text-primary'
                            }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default LeftMenuSetting;
