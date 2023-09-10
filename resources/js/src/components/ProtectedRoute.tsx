import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStatus } from '../config/authCheck';
import App from '../App';
import LoadingAlpyn from './LoadingAlpyn';

interface ProtectedRouteProps {
    requiredPermission?: string;
    path?: string;
    element?: React.ReactNode;
    children?: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredPermission, path, element }) => {
    const { isLoggedIn, isLoading, hasPermission } = useUserStatus();
    const navigate = useNavigate();

    if (isLoading) {
        return <><LoadingAlpyn/></>;
    }

    if (!isLoggedIn) {
        navigate("/auth/login");
        return null;
    }

    if (requiredPermission && !hasPermission(requiredPermission)) {
        navigate("/permission-denied");
        return null;
    }    
    
    return (
        <App>
            <div className="text-black dark:text-white-dark min-h-screen">{children}</div>
        </App>
    );
};


export default ProtectedRoute;
