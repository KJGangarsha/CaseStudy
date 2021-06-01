import React, { Component } from "react";
import { withRouter } from "react-router";
import ManagerService from "../../Services/ManagerService";

class CheckIn extends Component {
  constructor(props) {
    super(props);

    /* declaring state variables */
    this.state = {
      rooms: [],
      backEndToken: localStorage.getItem("backEndToken"),
    };
    this.addGuest = this.addGuest.bind(this);
  }

  /* Component did mount method */
  componentDidMount() {
    ManagerService.getAvailRooms(this.state.backEndToken).then((res) => {
      this.setState({ rooms: res.data });
    });
  }

  /* add guest method call */
  addGuest = (roomId, roomType, roomPrice) => {
    this.props.history.push(`/addGuest/${roomId}/${roomType}/${roomPrice}`);
  };

  render() {
    return (
      <div style={{ fontFamily: "cursive" }}>
        <br />
        
        {/* CheckIn table */}
        <h2
          className="card text-center col-md-4 offset-md-0"
          style={{
            marginTop: "30px",
            marginLeft: "360px",
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
            Room Availability
          </b>
        </h2>

        <div className="row">
          <table
            className="table table-striped table-hover"
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              backgroundColor: "white",
              fontSize: "18px",
              boxShadow: "2px 5px 30px 2px black",
              fontFamily: "cursive",
              color: "b#002147",
              borderColor: "black",
              borderWidth: "3px",
            }}
          >
            <thead className="thead-dark">
              <tr>
                <th> Room Number</th>
                <th> Type</th>
                <th> Price </th>
                <th> Status </th>
                <th> Check-In</th>
              </tr>
            </thead>
            <tbody>
              {this.state.rooms.map((room) => (
                <tr key={room.roomId}>
                  <td>
                    {" "}
                    <b>{room.roomNumber}</b>
                  </td>
                  <td>
                    {" "}
                    <b>{room.roomType} </b>
                  </td>
                  <td>
                    {" "}
                    <b>$ {room.roomPrice}</b>{" "}
                  </td>
                  <td>
                    {" "}
                    <b>{room.roomStatus} </b>
                  </td>
                  <td>
                    <button
                      title="add"
                      className="btn btn-primary"
                      style={{ marginBottom: "10px" }}
                      onClick={() =>
                        this.addGuest(
                          room.roomId,
                          room.roomType,
                          room.roomPrice
                        )
                      }
                    >
                      <b className="fas fa-user-plus">  </b>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h5>
            Available rooms :<i>{this.state.rooms.length}</i>
            {localStorage.setItem("check",this.state.rooms.length)}   
          </h5>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(CheckIn);
