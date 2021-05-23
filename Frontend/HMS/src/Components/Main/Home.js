import React from "react";
import { withRouter } from "react-router";

function Home() {
  return (
    /* Home page */
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
        <h2>Welcome to Grand AJ Inn.</h2>
      </div>
      <header className="App-header">
        <img
          /* src="https://i.pinimg.com/736x/76/a4/57/76a4576c8fd17978f5414c47376c98e0.jpg" */
          src="https://i.pinimg.com/originals/e8/ce/50/e8ce50ac38aa03a14e267557586b8798.png"
          /* className="App-logo" */
          alt="logo"
        />
      </header>
    </div>
  );
}

export default withRouter(Home);
