import React from 'react';
import { Route } from 'react-router-dom';
import { useUserStatus } from '../config/authCheck';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({ requiredPermission, ...rest }) => {
    const { isLoggedIn, hasPermission } = useUserStatus();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate("/auth/login");
        return null;
    }

    if (requiredPermission && !hasPermission(requiredPermission)) {
        navigate("/permission-denied");
        return null;
    }

    return <Route {...rest} />;
}
