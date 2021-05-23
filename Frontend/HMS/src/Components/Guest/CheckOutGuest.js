import React, { Component } from "react";
import { withRouter } from "react-router";
import GuestService from "../../Services/GuestService";
import ManagerService from "../../Services/ManagerService";
import SimpleReactValidator from "simple-react-validator";

class CheckOutGuest extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();

    /* Declaring all states */
    this.state = {
      guestId: this.props.match.params.guestId,
      roomNumber: this.props.match.params.room,
      guestName: "",
      guestGender: "",
      guestContact: "",
      paymentMethod: "",
      checkInDate: "",
      checkOutDate: new Date().toLocaleDateString(),
      billAmount: "",
      price: "",
      days: "",
      backEndToken: localStorage.getItem("backEndToken"),
    };
    /* Binding all handler methods */
    this.changePaymentMethodHandler =
      this.changePaymentMethodHandler.bind(this);
    this.checkOutGuest = this.checkOutGuest.bind(this);
  }

  changePaymentMethodHandler = (event) => {
    this.setState({ paymentMethod: event.target.value });
  };

  /* Component did mount method */
  componentDidMount() {
    GuestService.getGuestById(this.state.guestId, this.state.backEndToken).then(
      (res) => {
        let guest = res.data;
        this.setState({
          roomNumber: this.state.roomNumber,
          guestName: guest.guestName,
          guestGender: guest.guestGender,
          guestContact: guest.guestContact,
          guestMailId: guest.guestMailId,
          checkInDate: guest.checkInDate,
        });
      }
    );
    ManagerService.getRoomByNumber(
      this.state.roomNumber,
      this.state.backEndToken
    ).then((res) => {
      let room = res.data;
      this.setState({
        roomId: room.roomId,
        roomType: room.roomType,
        roomStatus: room.roomStatus,
        price: room.roomPrice,
      });
    });

    /* date period calculation */
    var str2 = localStorage.getItem("checkInDate");
    var str2date = str2.split("/");
    var str2day = str2date[1];
    Number(str2day);
    var str = this.state.checkOutDate;
    var date = str.split("/");
    var day1 = date[1];
    Number(day1);
    var price = this.state.price;
    Number(price);
    var period = day1 - str2day;
    Number(period);
    if(period<=0){
        this.setState({days:1});
    }
    else{
        this.setState({ days: period });
    }
    
  }

  /* Checkout guest method */
  checkOutGuest = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let guest = {
        guestId: this.state.guestId,
        roomNumber: this.state.roomNumber,
        guestName: this.state.guestName,
        guestGender: this.state.guestGender,
        guestContact: this.state.guestContact,
        paymentMethod: this.state.paymentMethod,
        checkInDate: this.state.checkInDate,
        checkOutDate: this.state.checkOutDate,
        billAmount: this.state.price * this.state.days,
        days: this.state.days,
      };

      GuestService.createCheckOut(guest, this.state.backEndToken);

      GuestService.deleteGuest(this.state.guestId, this.state.backEndToken);

      localStorage.removeItem("checkInDate");
      if (guest.billAmount <= 0) {
        localStorage.setItem("billAmount", 800);
      } else {
        localStorage.setItem("billAmount", guest.billAmount);
      }
      let room = {
        roomType: this.state.roomType,
        roomNumber: this.state.roomNumber,
        roomPrice: this.state.price,
        roomStatus: "Empty",
      };
      ManagerService.updateRoom(
        room,
        this.state.roomId,
        this.state.backEndToken
      ).then((res) => {
        this.props.history.push("/paypal");
      });
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  };

  /* cancel method */
  cancel() {
    this.props.history.push("/checkOut");
    localStorage.removeItem("checkInDate");
    window.location.reload();
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div
              className="card col-md-6 offset-md-3 offset-md-3"
              style={{
                marginTop: "20px",
                backgroundColor: "blanchedalmond",
                fontSize: "15px",
                borderColor: "black",
                boxShadow: "2px 5px 30px 2px black",
                fontFamily: "cursive",
                borderWidth: "3px",
              }}
            >
              <h3 className="text-center">Check-Out Guest </h3>
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
                    <b>Guest Name:</b>{" "}
                  </label>
                  <div>{this.state.guestName}</div>
                </div>

                <div className="row">
                  <label>
                    <b> Room Number:</b>{" "}
                  </label>
                  <div>{this.state.roomNumber}</div>
                </div>

                <div className="row">
                  <label>
                    {" "}
                    <b>Guest Contact:</b>{" "}
                  </label>
                  <div>{this.state.guestContact}</div>
                </div>
                <div className="row">
                  <label>
                    {" "}
                    <b>Guest Mail Id:</b>{" "}
                  </label>
                  <div>{this.state.guestMailId}</div>
                </div>

                <div className="row">
                  <label>
                    {" "}
                    <b>check-In Date: </b>
                  </label>
                  <div>{this.state.checkInDate}</div>
                </div>

                <div className="row">
                  <label>
                    {" "}
                    <b>Guest Gender:</b>{" "}
                  </label>
                  {this.state.guestGender}
                </div>

                <div className="row">
                  <label>
                    {" "}
                    <b>Bill Amount:</b>{" "}
                  </label>
                  <div>{this.state.price * this.state.days}</div>
                </div>

                <div className="row">
                  <label>
                    <b> Payment Method: </b>
                  </label>
                  <select
                    placeholder="Payment Method"
                    name="Payment Method"
                    className="form-control"
                    value={this.state.paymentMethod}
                    onChange={this.changePaymentMethodHandler}
                  >
                    <option>--</option>
                    <option>Paypal</option>
                    <option>CASH</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                  </select>
                  {this.validator.message(
                      "Payment Method ",
                      this.state.paymentMethod,
                      "required",
                      { className: "text-danger" }
                    )}
                </div>
                <br />

                <button
                  className="btn btn-success"
                  onClick={this.checkOutGuest}
                >
                  <b>Check-Out</b>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel.bind(this)}
                  style={{ marginLeft: "10px" }}
                >
                  <b>Cancel</b>
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(CheckOutGuest);
