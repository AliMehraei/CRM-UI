// ProtectedRoute.js
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
        console.log('Loading...'); // TODO: remove this
        
      return; // Wait until loading is complete
    }

    if (!isLoggedIn) {
        console.log('Not logged in');  // TODO: remove this
        
      navigate('/auth/login');
    } else if (requiredPermission && !hasPermission(requiredPermission)) {
      console.log('Permission denied');  // TODO: remove this
      
        navigate('/permission-denied');
    }
  }, [isLoading, isLoggedIn, hasPermission, requiredPermission, navigate]);

  if (isLoading || (!requiredPermission && !isLoggedIn)) {
    // While loading or if no permission is required and the user is not logged in, return LoadingSasCrm
    return <LoadingSasCrm />;
  }

  if (children) {
    return (
      <App>
        <div className="text-black dark:text-white-dark min-h-screen">{children}</div>
      </App>
    );
  } else {
    return null;
  }
};

export default ProtectedRoute;
