import React from "react";
import { Redirect, Route } from "react-router-dom";

function StaffRoute({ component: Component, ...rest }) {
  const role = localStorage.getItem("role");

  return (
    /* Staff route allows all roles but only when logged in */
    <Route
      {...rest}
      render={(props) => {
        if (role === "owner" || role === "manager" || role === "staff") {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default StaffRoute;
