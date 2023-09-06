import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useIsLoggedIn } from './config/isLogin';

const ProtectedRoute = ({ component: Component, bypassProtection = false, ...rest }: any) => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn || bypassProtection ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
