import React, { Component } from "react";
import { withRouter } from "react-router";
import ManagerService from "../../../Services/ManagerService";
import SimpleReactValidator from "simple-react-validator";

class UpdateInventory extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();

    /* state variables */
    this.state = {
      inventoryId: this.props.match.params.inventoryId,
      inventoryName: "",
      inventoryUnits: "",
      backEndToken: localStorage.getItem("backEndToken"),
    };
    /* handler binding */
    this.changeInventoryNameHandler =
      this.changeInventoryNameHandler.bind(this);
    this.changeInventoryUnitsHandler =
      this.changeInventoryUnitsHandler.bind(this);
    this.updateInventory = this.updateInventory.bind(this);
  }

  /* handler methods */
  changeInventoryNameHandler = (event) => {
    this.setState({ inventoryName: event.target.value });
  };

  changeInventoryUnitsHandler = (event) => {
    this.setState({ inventoryUnits: event.target.value });
  };

  /* component did mount method */
  componentDidMount() {
    ManagerService.getInventoryById(
      this.state.inventoryId,
      this.state.backEndToken
    ).then((res) => {
      let inventory = res.data;
      this.setState({
        inventoryName: inventory.inventoryName,
        inventoryUnits: inventory.inventoryUnits,
      });
    });
  }

  /* update method call */
  updateInventory = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let inventory = {
        inventoryName: this.state.inventoryName,
        inventoryUnits: this.state.inventoryUnits,
      };

      ManagerService.updateInventory(
        inventory,
        this.state.inventoryId,
        this.state.backEndToken
      ).then((res) => {
        this.props.history.push("/inventoryView");
        alert("Inventory Updated");
        window.location.reload();
      });
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  };

  /* cancel method */
  cancel() {
    this.props.history.push("/inventoryView");
    window.location.reload();
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            {/* update form */}
            <div
              className="card col-md-6 offset-md-3 offset-md-3"
              style={{
                marginTop: "30px",
                backgroundColor: "blanchedalmond",
                fontSize: "15px",
                borderColor: "black",
                boxShadow: "2px 5px 30px 2px black",
                fontFamily: "cursive",
                borderWidth: "3px",
              }}
            >
              <h3 className="text-center">
                <b>Update Inventory</b>
              </h3>
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
                <form>
                  <div className="form-group">
                    <label>
                      {" "}
                      <b> Inventory Name: </b>
                    </label>
                    <input
                      placeholder="Inventory Name"
                      name="InventoryName"
                      className="form-control"
                      value={this.state.inventoryName}
                      onChange={this.changeInventoryNameHandler}
                    />
                    {this.validator.message(
                      "Inventory Name",
                      this.state.inventoryName,
                      "required|alpha_space|max:30",
                      { className: "text-danger" }
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      {" "}
                      <b> Number of units: </b>{" "}
                    </label>
                    <input
                      placeholder="no. of units"
                      name="InventoryUnits"
                      className="form-control"
                      value={this.state.inventoryUnits}
                      onChange={this.changeInventoryUnitsHandler}
                    />
                    {this.validator.message(
                      "No. of Units",
                      this.state.inventoryUnits,
                      "required|numeric",
                      { className: "text-danger" }
                    )}
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.updateInventory}
                  >
                    <b>Update</b>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    <b>Cancel</b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(UpdateInventory);
