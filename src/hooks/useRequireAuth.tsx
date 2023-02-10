import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext';
import { LOGIN_PATH } from '../router/constants';

// eslint-disable-next-line no-undef
const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuthContext();
  if (Object.entries(user).length === 0 || (user.isLoaded && !user.isLogged)) {
    return <Navigate to={LOGIN_PATH} replace />;
  }

  return children;
};

export default RequireAuth;
