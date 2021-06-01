import React, { Component } from "react";
import { withRouter } from "react-router";
import GuestService from "../../Services/GuestService";

class ViewGuestLog extends Component {
  constructor(props) {
    super(props);

    /* state variables */
    this.state = {
      guests: [],
      backEndToken: localStorage.getItem("backEndToken"),
    };
  }

  /* component did mount method */
  componentDidMount() {
    GuestService.getCheckOuts(this.state.backEndToken).then((res) => {
      this.setState({ guests: res.data });
    });
  }

  render() {
    return (
      <div style={{ fontFamily: "cursive" }}>
        
        <br />
        {/* Guests list */}
        <h2
          className="card text-center col-md-3 offset-md-0"
          style={{
            marginTop: "30px",
            marginLeft: "380px",
            marginBottom: "30px",
            fontFamily: "cursive",
            color: "b#ebe5e7",
            backgroundColor: "#ebe5e7",
            borderColor: "black",
            boxShadow: "2px 5px 25px 5px gray",
            fontSize: "30px",
            borderWidth: "2px"
          }}
        >
          <b>
            <u>Guest Log</u>
          </b>
        </h2>

        <div className="row">
          <table
            className="table table-striped table-bordered"
            style={{
              marginTop: "15px",
              marginBottom: "10px",
              backgroundColor: "white",
              fontSize: "16px",
              boxShadow: "2px 5px 30px 2px black",
              fontFamily: "cursive",
              color: "b#002147",
              borderColor: "black",
              borderWidth: "3px",
            }}
          >
            <thead className="thead-dark">
              <tr>
                <th>check-Out Id</th>
                <th> Guest Id</th>
                <th> Room Number</th>
                <th> Guest Name </th>
                <th> Guest Check-In Date </th>
                <th> Check-Out Date</th>
                <th>Guest Gender</th>
                <th> Guest Contact</th>
                <th>Days-in</th>
                <th>Payment Method</th>
                <th>Bill Amount </th>
              </tr>
            </thead>
            <tbody>
              {this.state.guests.map((guest) => (
                <tr key={guest.checkOutId}>
                  <td>
                    <b>{guest.checkOutId}</b>
                  </td>
                  <td>
                    <b>{guest.guestId}</b>
                  </td>
                  <td>
                    <b>{guest.roomNumber}</b>{" "}
                  </td>
                  <td>
                    <b>{guest.guestName}</b>{" "}
                  </td>
                  <td>
                    <b>{guest.checkInDate}</b>{" "}
                  </td>
                  <td>
                    <b>{guest.checkOutDate}</b>{" "}
                  </td>
                  <td>
                    <b>{guest.guestGender}</b>{" "}
                  </td>
                  <td>
                    <b>{guest.guestContact}</b>{" "}
                  </td>
                  <td>
                    <b>{guest.days}</b>{" "}
                  </td>
                  <td>
                    <b>{guest.paymentMethod}</b>{" "}
                  </td>
                  <td>
                    <b>$ {guest.billAmount}</b>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h5>
            Total Guests :<i>{this.state.guests.length}</i>
          </h5>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(ViewGuestLog);
