import { useState, useEffect } from 'react';
import { getToken } from './config';
import api from './api';
type Permission = string;
interface UserStatus {
    isLoading: boolean;
    isLoggedIn: boolean;
    permissions: Permission[];
    hasPermission: (permissionName: Permission) => boolean;
}

export const useUserStatus = (): UserStatus => {
    const [isLoading, setIsLoading] = useState<boolean>(true); // Initializing with true
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [permissions, setPermissions] = useState<Permission[]>([]);
    const api_instance = new api();

    useEffect(() => {
        const token = getToken('token');
        if (!token) {
            setIsLoggedIn(false);
            setIsLoading(false);
            return;
        }
        async function fetchPermissions() {
            try {
                const response = await api_instance.getUserPremissions();
                
                if (response.status === 200 && Array.isArray(response.data.permissions)) {
                    setIsLoggedIn(true);
                    setPermissions(response.data.permissions);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                setIsLoggedIn(false);
                console.error('Error fetching permissions:', error);
            } finally {
                setIsLoading(false); // Ensure loading state is set to false here
            }
        }
        fetchPermissions();
    }, []);

    const hasPermission = (permissionName: Permission): boolean => {
        return permissions.includes(permissionName);
    };

    return {
        isLoading,
        isLoggedIn,
        permissions,
        hasPermission
    };
};
