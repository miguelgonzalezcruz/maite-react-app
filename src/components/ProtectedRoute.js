import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLogged, children, ...props }) => {
  return <Route {...props}>{isLogged ? children : <Redirect to="/" />}</Route>;
};

export default ProtectedRoute;
