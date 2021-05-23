import React from "react";
import { Redirect, Route } from "react-router-dom";

function ManagerRoute({ component: Component, ...rest }) {
  const role = localStorage.getItem("role");

  return (
    /* managerRoute allows only owner and manager roles */
    <Route
      {...rest}
      render={(props) => {
        if (role === "owner" || role === "manager") {
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

export default ManagerRoute;
