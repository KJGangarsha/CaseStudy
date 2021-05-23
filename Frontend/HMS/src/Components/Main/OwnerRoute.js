import React from "react";
import { Redirect, Route } from "react-router-dom";

function OwnerRoute({ component: Component, ...rest }) {
  const role = localStorage.getItem("role");

  return (
    /* Owner route allows only owner role */
    <Route
      {...rest}
      render={(props) => {
        if (role === "owner") {
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

export default OwnerRoute;
