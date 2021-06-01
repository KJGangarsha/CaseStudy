import React, { Component } from "react";
import { withRouter } from "react-router";

class ManagerView extends Component {
  render() {
    return (
      /* manager home page */
      <div className="App">
        <div
          className="text-center"
          style={{
            marginTop: "20px",
            marginBottom: "-220px",
            fontFamily: "cursive",
            color: "white",
          }}
        >
          <h3>Welcome {localStorage.getItem("user")}</h3>
          <div className="text-center">
          <p>
          “You only have to do a few things right in your life so long as you don’t do too many things wrong.” – Warren Buffett
          </p>
        </div>        
          <div
            className="card col-md-6 offset-md-3"
            style={{
              marginTop: "50px",
              backgroundColor: "blanchedalmond",
              fontSize: "15px",
              borderColor: "black",
              color: "black",
              boxShadow: "2px 5px 30px 2px black",
              fontFamily: "cursive",
              borderWidth: "3px",
            }}
          >
            <h3 className="text-center">
              {" "}
              <b>Dashboard</b>
            </h3>

            <div
              className="card-body"
              style={{
                marginTop: "10px",
                marginBottom: "15px",
                backgroundColor: "white",
                fontSize: "18px",
                boxShadow: "2px 5px 30px 2px black",
                fontFamily: "cursive",
                color: "b#002147",
                borderColor: "black",
                borderWidth: "5px",
              }}
            >              
              <div className="row">
                <label>
                  <b> Checked_In Guests : </b>
                </label>
                <br />
                <i> {localStorage.getItem("checkin")}</i>
              </div>              
              <div className="row">
                <label>
                  <b> Staff : </b>
                </label>
                <br />
                <i> {localStorage.getItem("staff")}</i>
              </div>
              <div className="row">
                <label>
                  <b> Rooms : </b>
                </label>
                <br />
                <i> {localStorage.getItem("check") +
                    " / " +
                    localStorage.getItem("rooms")}</i>
              </div>
              <div className="row">
                <label>
                  <b> Inventory Items : </b>
                </label>
                <br />
                <i> 202</i>
              </div>
            </div>
          </div>
          <div className="row-center" style={{marginTop:"50px"}}>
          <img 
            src="https://i.pinimg.com/originals/e8/ce/50/e8ce50ac38aa03a14e267557586b8798.png"
            /* className="App-logo" */
            alt="logo"
          />
          </div>
          
          </div>                        
      </div>
    );
  }
}

export default withRouter(ManagerView);
