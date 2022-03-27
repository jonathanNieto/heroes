import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


export const PrivateRoute = ({ children }: any) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  console.log('location', location);
  if (location?.search?.length) {
    localStorage.setItem('lastPath', location.pathname + location.search);
  } else {
    localStorage.setItem('lastPath', location.pathname);
  }

  return user?.logged
    ? children
    : <Navigate to="/login" />;
};
