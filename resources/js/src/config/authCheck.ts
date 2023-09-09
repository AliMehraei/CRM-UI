import { useState, useEffect } from 'react';
import axios from './axios';
import { getToken } from './config';

export const useUserStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [permissions, setPermissions] = useState([]);

    useEffect(() => {
        const token = getToken('token');

        async function fetchPermissions() {
            if (!token) {
                setIsLoggedIn(false);
                return;
            }

            try {
                const response = await axios.get('/user-permissions', {
                    headers: {
                        Authorization: `Bearer ${token}` // Assuming you use Bearer tokens
                    }
                });
                
                if (response.status === 200 && response.data.permissions) {
                    setIsLoggedIn(true);
                    setPermissions(response.data.permissions);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                setIsLoggedIn(false);
                console.error('Error fetching permissions:', error);
            }
        }

        fetchPermissions();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const hasPermission = (permissionName) => {
        return permissions.includes(permissionName);
    };

    return {
        isLoggedIn,
        permissions,
        hasPermission
    };
};
