import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...restProps }) => {
  const { user } = useSelector((state) => state.auth);

  return !user ? (
    <Route {...restProps} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/dashboard" />
  );
};

export default PublicRoute;
