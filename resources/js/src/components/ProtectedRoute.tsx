import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStatus } from '../config/authCheck';
import App from '../App';
import LoadingSasCrm from './LoadingSasCrm';

interface ProtectedRouteProps {
  requiredPermission?: string;
  path?: string;
  element?: React.ReactNode;
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredPermission }) => {
  const { isLoggedIn, isLoading, hasPermission } = useUserStatus();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return; 
    }

    if (!isLoggedIn) {
      navigate('/auth/login');
      return;
    }

    if (requiredPermission && !hasPermission(requiredPermission)) {
      navigate('/permission-denied');
    }
  }, [isLoading, isLoggedIn, hasPermission, requiredPermission, navigate]);

  if (isLoading || (!isLoggedIn && !requiredPermission)) {
    return <LoadingSasCrm />;
  }

  if (!isLoggedIn) {
    return null;
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    navigate('/permission-denied');
  }

  return (
    <App>
      <div className="text-black dark:text-white-dark min-h-screen">{children}</div>
    </App>
  );
};

export default ProtectedRoute;
