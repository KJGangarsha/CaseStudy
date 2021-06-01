import React, { Component } from "react";
import { withRouter } from "react-router";
import GuestService from "../../Services/GuestService";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    
    /* Declaring state variables */
    this.state = {
      guests: [],
      backEndToken: localStorage.getItem("backEndToken")      
    };
    /* Binding handlers */
    this.editGuest = this.editGuest.bind(this);
    this.checkOutGuest = this.checkOutGuest.bind(this);    
  }

  /* Component did mount method */
  componentDidMount() {
    GuestService.getGuests(this.state.backEndToken).then((res) => {
      this.setState({ guests: res.data });
    });        
  }  

  /* edit guest method */
  editGuest = (guestId) => {
    this.props.history.push(`/editGuest/${guestId}`);
  };

  /* view guest method */
  viewGuest(guestId) {
    this.props.history.push(`/viewGuest/${guestId}`);
  }

  /* checkout guest method call */

  checkOutGuest = (guestId, room, date) => {
    this.props.history.push(`/checkOutGuest/${guestId}/${room}/${date}`);
    localStorage.setItem("checkInDate", date);
  };

  render() {
    return (
      <div style={{ fontFamily: "cursive" }}>
        <br />
        <br />
        {/* CheckedIn table */}
        <h2
          className="card text-center col-md-5 offset-md-0"
          style={{
            marginTop: "30px",
            marginLeft: "320px",
            marginBottom: "30px",
            fontFamily: "cursive",
            color: "b#ebe5e7",
            backgroundColor: "#ebe5e7",
            borderColor: "black",
            boxShadow: "2px 5px 25px 5px gray",
            fontSize: "30px",
            borderWidth: "2px",
          }}
        >
          <b>Checked_In Guests</b>
        </h2>

        <div className="row">
          <div className="d-flex flex-wrap justify-content-around ">
            {this.state.guests.map((guest) => (
              <div
                className="card m-2 shadow-lg"
                style={{ backgroundColor: "#ebe5e7", width: "21rem" }}
                key={guest.guestId}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <b>{guest.guestName}</b>
                  </h5>
                  <h5 className="card-title">
                    Room No. :<b>{guest.roomNumber}</b>
                  </h5>

                  <h6 className="card-text">
                    Id :<b> {guest.guestId}</b>
                  </h6>
                  <h6 className="card-text">
                    Check-In Date : <b>{guest.checkInDate}</b>
                  </h6>
                  <h6 className="card-text">
                    Contact : <b>{guest.guestContact}</b>
                  </h6>
                  <h6 className="card-text pb-2">
                    Guest count : <b>{guest.numberOfPeople}</b>
                  </h6>
                  <button
                    onClick={() => this.editGuest(guest.guestId)}
                    className="btn btn-info"
                  >
                    <b className="fas fa-user-edit">  </b>
                  </button>
                  <button
                    style={{ marginLeft: "5px" }}
                    onClick={() => this.viewGuest(guest.guestId)}
                    className="btn btn-secondary"
                  >
                    <b className="fas fa-eye">  </b>
                  </button>
                  <button
                    style={{ marginLeft: "5px" }}
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Are you sure you want to check-Out?"
                      );
                      if (confirmBox === true) {
                        this.checkOutGuest(
                          guest.guestId,
                          guest.roomNumber,
                          guest.checkInDate
                        );
                      }
                    }}
                    className="btn btn-danger"
                  >
                    <b className="fas fa-sign-out-alt">  </b>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <h5>
          Checked_In Guests :<i>{this.state.guests.length}</i>    
          {localStorage.setItem("checkin",this.state.guests.length)}          
        </h5>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(CheckOut);
