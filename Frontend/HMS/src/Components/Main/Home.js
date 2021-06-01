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
          marginBottom: "-80px",
          fontFamily: "cursive",
          color: "white"
        }}
      >
        <h2>Welcome to Grand AJ Inn.</h2>
      </div>
      <header className="App-header">
        <img          
          src="https://media.giphy.com/media/dUrzJSmF9iJoy8KhFo/giphy.gif"
          width="90%"                              
          alt="logo"
        />
      </header>
    </div>
  );
}

export default withRouter(Home);