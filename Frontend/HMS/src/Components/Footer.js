import React, { Component } from "react";
import { withRouter } from "react-router";

export class Footer extends Component {
  render() {
    return (
      /* footer */
      <div>
        <footer
          className="footer fixed-bottom footer-dark bg-dark"
          style={{ fontFamily: "cursive" }}
        >
          <span className="text-muted">
            All rights reserved 2021 © Grand AJ Inn.
          </span>
        </footer>
      </div>
    );
  }
}

export default withRouter(Footer);
