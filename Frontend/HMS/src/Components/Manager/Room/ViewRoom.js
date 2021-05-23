import React, { Component } from "react";
import { withRouter } from "react-router";
import ManagerService from "../../../Services/ManagerService";

class ViewRoom extends Component {
  constructor(props) {
    super(props);
    /* state variables */
    this.state = {
      roomId: this.props.match.params.roomId,
      room: {},
      backEndToken: localStorage.getItem("backEndToken"),
    };
  }

  /* component did mount method */
  componentDidMount() {
    ManagerService.getRoomById(this.state.roomId, this.state.backEndToken).then(
      (res) => {
        this.setState({ room: res.data });
      }
    );
  }

  /* back method */
  back() {
    this.props.history.push("/roomView");
    window.location.reload();
  }

  render() {
    return (
      <div>
        {/* view room card */}
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
          <h3 className="text-center">
            {" "}
            <b>Room Details</b>
          </h3>
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
                <b> Room Number : </b>{" "}
              </label>
              <br />
              <div>
                <i> {this.state.room.roomNumber}</i>
              </div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Type :</b>{" "}
              </label>
              <br />
              <div>
                {" "}
                <i>{this.state.room.roomType}</i>
              </div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Price :</b>{" "}
              </label>
              <br />
              <div>
                {" "}
                <i>{this.state.room.roomPrice}</i>
              </div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Room Status : </b>
              </label>
              <br />
              <div>
                <i> {this.state.room.roomStatus}</i>
              </div>
            </div>
            <button className="btn btn-warning" onClick={this.back.bind(this)}>
              <b>Back</b>
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(ViewRoom);
