import React, { Component } from "react";
import { withRouter } from "react-router";
import GuestService from "../../Services/GuestService";

class ViewGuest extends Component {
  constructor(props) {
    super(props);

    /* State variables */
    this.state = {
      guestId: this.props.match.params.guestId,
      guest: {},
      backEndToken: localStorage.getItem("backEndToken"),
    };
  }

  /* component did mount method */
  componentDidMount() {
    GuestService.getGuestById(this.state.guestId, this.state.backEndToken).then(
      (res) => {
        this.setState({ guest: res.data });
      }
    );
  }

  /* back method */
  back() {
    this.props.history.push("/checkOut");
    window.location.reload();
  }

  render() {
    return (
      <div>
        <br></br>
        {/* Guest details */}
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
          <h3 className="text-center"> Guest Details</h3>
          <div
            className="card-body"
            style={{
              marginTop: "10px",
              marginBottom: "0.5px",
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
                <b>Name : </b>{" "}
              </label>
              <br />
              <div> {this.state.guest.guestName}</div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Check In Date :</b>{" "}
              </label>
              <br />
              <div> {this.state.guest.checkInDate}</div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Room Assigned :</b>{" "}
              </label>
              <br />
              <div> {this.state.guest.roomNumber}</div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Contact :</b>{" "}
              </label>
              <br />
              <div> {this.state.guest.guestContact}</div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>MailId :</b>{" "}
              </label>
              <br />
              <div> {this.state.guest.guestMailId}</div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Gender : </b>
              </label>
              <br />
              <div> {this.state.guest.guestGender}</div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Guest Count :</b>{" "}
              </label>
              <br />
              <div> {this.state.guest.numberOfPeople}</div>
            </div>

            <button className="btn btn-warning" onClick={this.back.bind(this)}>
              Back
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(ViewGuest);
