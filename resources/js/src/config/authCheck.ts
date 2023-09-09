import { useState, useEffect } from 'react';
import { getToken } from './config';
import api from './api';
type Permission = string;
interface UserStatus {
    isLoggedIn: boolean;
    permissions: Permission[];
    hasPermission: (permissionName: Permission) => boolean;
}
export const useUserStatus = (): UserStatus => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [permissions, setPermissions] = useState<Permission[]>([]);
    const api_instance = new api();

    useEffect(() => {
        const token = getToken('token');
        let isCancelled = false;

        async function fetchPermissions() {
            if (!token) {
                setIsLoggedIn(false);
                return;
            }
            try {
                const response = await api_instance.getUserPremissions();
                
                if (!isCancelled && response.status === 200 && Array.isArray(response.data.permissions)) {
                    setIsLoggedIn(true);
                    setPermissions(response.data.permissions);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                if (!isCancelled) {
                    setIsLoggedIn(false);
                    console.error('Error fetching permissions:', error);
                }
            }
        }
        fetchPermissions();
        
        return () => {
            isCancelled = true; 
        };
    }, []); 
    // useEffect(() => {
    //     console.log(isLoggedIn, permissions);
    // }, [isLoggedIn, permissions]);
    const hasPermission = (permissionName: Permission): boolean => {
        return permissions.includes(permissionName);
    };
    return {
        isLoggedIn,
        permissions,
        hasPermission
    };
};
