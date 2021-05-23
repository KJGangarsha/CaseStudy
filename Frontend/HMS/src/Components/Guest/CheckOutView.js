import React, { Component } from "react";
import { withRouter } from "react-router";

class CheckOutView extends Component {
  constructor(props) {
    super(props);
    /* declaring state variables */
    this.state = {
      checkOutDate: new Date().toLocaleDateString(),
    };
  }

  /* back method */
  back() {
    this.props.history.push("/checkOut");
    alert("Guest Checked-Out");
    localStorage.removeItem("billAmount");
    window.location.reload();
  }

  render() {
    return (
      <div>
        <br></br>
        <div
          className="card col-md-6 offset-md-3"
          style={{
            marginTop: "50px",
            backgroundColor: "blanchedalmond",
            fontSize: "15px",
            borderColor: "black",
            boxShadow: "2px 5px 30px 2px black",
            fontFamily: "cursive",
            borderWidth: "3px",
          }}
        >
          <h3 className="text-center"> Payment Confirmation</h3>
          <div
            className="card-body"
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              backgroundColor: "white",
              fontSize: "15px",
              boxShadow: "2px 5px 30px 2px black",
              fontFamily: "cursive",
              color: "b#002147",
              borderColor: "black",
              borderWidth: "2px",
            }}
          >
            <div className="row">
              <label>
                {" "}
                <b>Check Out Date :</b>{" "}
              </label>
              <br />
              <div> {this.state.checkOutDate}</div>
            </div>

            <div className="row">
              <label>
                <b> Bill Paid : </b>
              </label>
              <br />
              <div> {localStorage.getItem("billAmount")}</div>
            </div>
            <button
              title="back"
              className="btn btn-warning"
              onClick={this.back.bind(this)}
              style={{ marginLeft: "10px" }}
            >
              Ok
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(CheckOutView);
