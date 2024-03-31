import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ currentUser, children }) => {
  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};


