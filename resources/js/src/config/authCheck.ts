import {useState, useEffect} from 'react';
import {getToken, removeToken} from './config';
import api from './api';
import { useNavigate } from 'react-router-dom';

type Permission = string;

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    alias: string;
    phone: string;
    mobile: string;
    website: string;
    fax: string;
    street: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
    language: string;
    country_locale: string;
    time_zone: string;
    role_id: string;
    date_of_birth: string;
    //added_by_id: string;
    //modified_by_id: string;
    profile_id: string;
    time_format: string;
    currency: string;
    confirmation_status: number;
    zuid: number;
    date_format: string;
    // current_shift_id: string;
    next_shift_id?: any; // nullable
    shift_effective_from?: any; // nullable
    grouping: string;
    decimal: string;
    sort_order_preference: string;
    name_format: string;
    status_reason: string;
    type: string;
    //reporting_to_id?: any; // nullable
    user_status: string;
    email_verified_at: string;
    avatar?: any; // nullable
    status: string;
    //created_at: string;
    //updated_at: string;
    //deleted_at?: any; // nullable
    //userId: string;
}


interface UserStatus {
    isLoading: boolean;
    isLoggedIn: boolean;
    user: User | null;
    permissions: Permission[];
    hasPermission: (permissionName: Permission) => boolean;
    logout: () => void;
}

const TOKEN_KEY = 'token';
const USER_UNIFIED_ID = 'userUniqueIdentifier';
const USER_DATA = 'userData';
export const useUserStatus = (): UserStatus => {
    const token = getToken(TOKEN_KEY);
    const userUnifiedId = getToken(USER_UNIFIED_ID);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token);
    const [permissions, setPermissions] = useState<Permission[]>([]);
    const [user, setUser] = useState<User | null>(null);
    const apiInstance = new api();
    const navigate = useNavigate();


    useEffect(() => {
        const initializeUserStatus = async () => {
            if (!token) {
                handleLogout();
                setIsLoading(false);
                return;
            }

            await fetchUserDataAndPermissions();
        };

        const fetchUserDataAndPermissions = async () => {
            try {
                const {data} = await apiInstance.getUserPermissions();

                if (data && data.status_code === 200) {
                    const {permissions: userPermissions, user: userDetails} = data.data;

                    if(userPermissions.length == 0){
                        setIsLoggedIn(false);
                        handleLogout();
                        navigate('/auth/login');

                    }

                    updateStatus(userPermissions, userDetails);
                } else {
                    setIsLoggedIn(false);
                    handleLogout();
                }
            } catch (error) {
                handleApiError(error);
            } finally {
                setIsLoading(false);
            }
        };

        const updateStatus = (userPermissions: Permission[], userDetails: User) => {
            setIsLoggedIn(true);
            setPermissions(userPermissions);
            setUser(userDetails);
        };

        const handleApiError = (error: any) => {
            console.error('Error fetching user data and permissions:', error);
            setIsLoggedIn(false);
        };

        const handleLogout = () => {
            removeToken(TOKEN_KEY);
            removeToken(USER_UNIFIED_ID);
            removeToken(USER_DATA);
            setIsLoggedIn(false);
            setPermissions([]);
            setUser(null);

            
            
        };

        initializeUserStatus();
    }, [token]);

    const hasPermission = (permissionName: Permission): boolean => {
        return permissions.includes(permissionName);
    };

    const logout = () => {
        removeToken(TOKEN_KEY);
        removeToken(USER_UNIFIED_ID);
        removeToken(USER_DATA);
        setIsLoggedIn(false);
        setPermissions([]);
        setUser(null);
    };

    return {
        isLoading,
        isLoggedIn,
        user,
        permissions,
        hasPermission,
        logout,
    };
};
