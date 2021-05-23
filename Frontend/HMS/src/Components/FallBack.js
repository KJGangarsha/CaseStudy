import React, { Component } from "react";
import { withRouter } from "react-router";

class FallBack extends Component {
  render() {
    return (
      /* Home page view */
      <div className="App">
        <div
          className="text-center"
          style={{
            marginTop: "20px",
            marginBottom: "-60px",
            fontFamily: "cursive",
          }}
        >
          <h3>Dear, {localStorage.getItem("user")} Something went wrong. please try again later!</h3>
        </div>
        <header className="App-header">
          <img
            src="https://i.pinimg.com/736x/76/a4/57/76a4576c8fd17978f5414c47376c98e0.jpg"
            className="App-logo"
            alt="logo"
          />
        </header>
      </div>
    );
  }
}

export default withRouter(FallBack);
