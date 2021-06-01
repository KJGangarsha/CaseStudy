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
            marginBottom: "-220px",
            fontFamily: "cursive",
            color: "white",
          }}
        >
          <h3>Welcome {localStorage.getItem("user")}</h3>
          <div className="text-center">
            <p>
              “Success usually comes to those who are too busy to be looking for
              it.” – Henry David Thoreau
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
                  <b> Rooms Available : </b>
                </label>
                <br />
                <i>
                  {" "}
                  {localStorage.getItem("check") +
                    " / " +
                    localStorage.getItem("rooms")}
                </i>
              </div>
              <div className="row">
                <label>
                  <b> Boquet Hall Status : </b>
                </label>
                <br />
                <i> Reserved</i>
              </div>
            </div>
          </div>
          <div className="row-center" style={{ marginTop: "50px" }}>
            <img
              src="https://i.pinimg.com/originals/e8/ce/50/e8ce50ac38aa03a14e267557586b8798.png"
              /* className="App-logo" */
              alt="logo"
            />
          </div>

          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ marginBottom: "300px", marginTop: "60px" }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://media.giphy.com/media/120CndHE9HcOPK/giphy.gif"
                  className="d-block w-100"
                  alt="no giffy"                  
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://media.giphy.com/media/3otPoBnTKMSXegX2fK/giphy.gif"
                  className="d-block w-100"
                  alt="no giffy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://media.giphy.com/media/egucCCaMgK3KsaxyJT/giphy.gif"
                  className="d-block w-100"
                  alt="no giffy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ReceptionView);
