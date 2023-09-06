import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useIsLoggedIn } from '../config/isLogin';

const ProtectedRoute = ({ path, children, bypassProtection = false }) => {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn || bypassProtection) {
    return <Route path={path}>{children}</Route>;
  } else {
    return <Navigate to="/auth/login" replace />;
  }
};

export default ProtectedRoute;
