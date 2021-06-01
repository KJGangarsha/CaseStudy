import React, { Component } from "react";
import { withRouter } from "react-router";
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import withReactContent from 'sweetalert2-react-content';
import ManagerService from "../../../Services/ManagerService";

class InventoryView extends Component {
  constructor(props) {
    super(props);

    this.Swal=new withReactContent(Swal);

    /* state variables */
    this.state = {
      inventories: [],
      backEndToken: localStorage.getItem("backEndToken"),
    };

    /* binding methods */
    this.addInventory = this.addInventory.bind(this);
    this.editInventory = this.editInventory.bind(this);
  }

  /* component did mount method */
  componentDidMount() {
    ManagerService.getInventory(this.state.backEndToken).then((res) => {
      this.setState({ inventories: res.data });
    });
  }

  /* add method call */
  addInventory = () => {
    this.props.history.push("/addInventory");
  };

  /* edit method call */
  editInventory = (inventoryId) => {
    this.props.history.push(`/editInventory/${inventoryId}`);
  };

  /* delete method  */
  deleteInventory(inventoryId) {
    ManagerService.deleteInventory(inventoryId, this.state.backEndToken).then(
      (res) => {
        this.setState({
          inventories: this.state.inventories.filter(
            (inventory) => inventory.inventoryId !== inventoryId
          ),
        });
        swal({
          title: "Inventory Deleted",            
          icon: "success",
        });
      }
    );
  }
  opensweetalert(inventoryId){
    new Swal({
       title: 'Are you sure?',
       text: 'You will not be able to recover!',
       icon: 'warning',
       showCancelButton: true,
       confirmButtonText: 'Yes, delete!',
       cancelButtonText: 'No'
     })
     .then((result) => {
       if (result.isConfirmed) {
         this.deleteInventory(inventoryId);         
       
       } else if (result.dismiss === Swal.DismissReason.cancel) {
         this.props.history.push("/inventoryView");
         
       }
     })
   }

  /* view method call */
  viewInventory(inventoryId) {
    this.props.history.push(`/viewInventory/${inventoryId}`);
  }

  render() {
    return (
      <div style={{ fontFamily: "cursive" }}>
        <br />

        {/* inventory view */}
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
          <b>Inventory List</b>
        </h2>
        <div>
          <button
            title="addinv"
            className="btn btn-primary"
            style={{ marginBottom: "10px" }}
            onClick={this.addInventory}
          >
            <b className="fas fa-plus"> </b> <b> Add Inventory</b>
          </button>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-around ">
            {this.state.inventories.map((inventory) => (
              <div
                className="card m-2 shadow-lg"
                style={{ backgroundColor: "#ebe5e7", width: "21rem" }}
                key={inventory.inventoryId}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <b>{inventory.inventoryName}</b>
                  </h5>

                  <h6 className="card-text">
                    Id :<b> {inventory.inventoryId}</b>
                  </h6>
                  <h6 className="card-text">
                    Number of units : <b>{inventory.inventoryUnits}</b>
                  </h6>

                  <button
                    onClick={() => this.editInventory(inventory.inventoryId)}
                    className="btn btn-info"
                  >
                    <b className="fas fa-edit">  </b>
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.opensweetalert(inventory.inventoryId)}
                    className="btn btn-danger"
                  >
                    <b className="fas fa-trash">  </b>
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.viewInventory(inventory.inventoryId)}
                    className="btn btn-secondary"
                  >
                    <b className="fas fa-eye">  </b>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <br />
        </div>
        <h5>
          {" "}
          Inventory types :<i>{this.state.inventories.length}</i>
        </h5>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(InventoryView);
