import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, isLoggedIn, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={() => (isLoggedIn ? <Element /> : navigate('/'))}
    />
  );
};

export default ProtectedRoute;