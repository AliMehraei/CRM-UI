import { useState, useEffect } from 'react';
import { getToken, removeToken } from './config';
import api from './api';

type Permission = string;

interface UserStatus {
  isLoading: boolean;
  isLoggedIn: boolean;
  permissions: Permission[];
  hasPermission: (permissionName: Permission) => boolean;
  logout: () => void; // Add a logout function
}

export const useUserStatus = (): UserStatus => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
        const response = await api_instance.getUserPermissions();

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
        setIsLoading(false);
      }
    }

    fetchPermissions();
  }, []);

  const hasPermission = (permissionName: Permission): boolean => {
    return permissions.includes(permissionName);
  };

  const logout = () => {
    removeToken('token');
    setIsLoggedIn(false);
    setPermissions([]);
  };

  return {
    isLoading,
    isLoggedIn,
    permissions,
    hasPermission,
    logout,
  };
};
