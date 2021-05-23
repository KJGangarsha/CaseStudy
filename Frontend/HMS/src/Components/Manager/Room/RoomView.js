import React, { Component } from "react";
import { withRouter } from "react-router";
import ManagerService from "../../../Services/ManagerService";

class RoomView extends Component {
  constructor(props) {
    super(props);

    /* state variables */
    this.state = {
      rooms: [],
      backEndToken: localStorage.getItem("backEndToken"),
    };
    /* binding handlers */
    this.addRoom = this.addRoom.bind(this);
    this.editRoom = this.editRoom.bind(this);
  }

  /* component did mount method */
  componentDidMount() {
    ManagerService.getRooms(this.state.backEndToken).then((res) => {
      this.setState({ rooms: res.data });
    });
  }

  /* add room method  */
  addRoom = () => {
    this.props.history.push("/addRoom");
  };

  /* edit room method */
  editRoom = (roomId) => {
    this.props.history.push(`/editRoom/${roomId}`);
  };

  /* delete room method */
  deleteRoom(roomId) {
    ManagerService.deleteRoom(roomId, this.state.backEndToken).then((res) => {
      this.setState({
        rooms: this.state.rooms.filter((room) => room.roomId !== roomId),
      });
      alert("Room deleted");
      window.location.reload();
    });
  }

  /* view room method */
  viewRoom(roomId) {
    this.props.history.push(`/viewRoom/${roomId}`);
  }

  render() {
    return (
      <div style={{ fontFamily: "cursive" }}>
        {/* room View */}
        <br />
        <h2
          className="card text-center col-md-3 offset-md-0"
          style={{
            marginTop: "60px",
            marginLeft: "380px",
            fontFamily: "cursive",
            color: "b#ebe5e7",
            backgroundColor: "#ebe5e7",
            borderColor: "black",
            boxShadow: "2px 5px 25px 5px gray",
            fontSize: "30px",
            borderWidth: "2px",
          }}
        >
          <b>Rooms List</b>
        </h2>
        <div>
          <button
            title="add"
            className="btn btn-primary"
            style={{ marginBottom: "10px" }}
            onClick={this.addRoom}
          >
            <b className="fas fa-plus"></b> <b> Add Room</b>
          </button>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-around ">
            {this.state.rooms.map((room) => (
              <div
                className="card m-2 shadow-lg"
                style={{ backgroundColor: "#ebe5e7", width: "21rem" }}
                key={room.roomNumber}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <b>{room.roomNumber}</b>
                  </h5>

                  <h6 className="card-text">
                    Type :<b> {room.roomType}</b>
                  </h6>
                  <h6 className="card-text">
                    Price : <b>{room.roomPrice}</b>
                  </h6>
                  <h6 className="card-text">
                    Status : <b>{room.roomStatus}</b>
                  </h6>

                  <button
                    onClick={() => this.editRoom(room.roomId)}
                    className="btn btn-info"
                  >
                    <b className="fas fa-edit">  </b>
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Are you sure you want to delete?"
                      );
                      if (confirmBox === true) {
                        this.deleteRoom(room.roomId);
                      }
                    }}
                    className="btn btn-danger"
                  >
                    <b className="fas fa-trash">  </b>
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.viewRoom(room.roomId)}
                    className="btn btn-secondary"
                  >
                    <b className="fas fa-eye">  </b>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h5>
            Number of Rooms :<i>{this.state.rooms.length}</i>
          </h5>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(RoomView);
