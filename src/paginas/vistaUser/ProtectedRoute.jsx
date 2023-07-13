import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import VistaPrevia from './vistaprevia';

const ProtectedRoute = ({ element: Element, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Element /> : <Navigate to="/" replace />}
    />
  );
};

export default ProtectedRoute;