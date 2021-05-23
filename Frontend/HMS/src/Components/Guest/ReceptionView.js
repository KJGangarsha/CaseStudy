import React, { Component } from "react";
import { withRouter } from "react-router";

class ReceptionView extends Component {
  render() {
    return (
      /* Home page view */
      <div className="App">
        <div
          className="text-center"
          style={{
            marginTop: "20px",
            marginBottom: "-130px",
            fontFamily: "cursive",
            color: "white"
          }}
        >
          <h3>Welcome {localStorage.getItem("user")}</h3>
        </div>
        <header className="App-header">
          <img
            src="https://i.pinimg.com/originals/e8/ce/50/e8ce50ac38aa03a14e267557586b8798.png"
            /* className="App-logo" */
            alt="logo"
          />
        </header>
      </div>
    );
  }
}

export default withRouter(ReceptionView);
