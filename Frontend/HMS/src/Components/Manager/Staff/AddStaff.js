import React, { Component } from "react";
import { withRouter } from "react-router";
import swal from 'sweetalert';
import ManagerService from "../../../Services/ManagerService";
import SimpleReactValidator from "simple-react-validator";

export class AddStaff extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();

    /* State variables */
    this.state = {
      staffdepartment: "",
      staffName: "",
      staffContact: "",
      staffMailId: "",
      staffGender: "",
      backEndToken: localStorage.getItem("backEndToken"),
    };
    /* binding handlers */
    this.changeStaffDepartmentHandler =
      this.changeStaffDepartmentHandler.bind(this);
    this.changeStaffNameHandler = this.changeStaffNameHandler.bind(this);
    this.changeStaffContactHandler = this.changeStaffContactHandler.bind(this);
    this.changeStaffMailIdHandler = this.changeStaffMailIdHandler.bind(this);
    this.changeStaffGenderHandler = this.changeStaffGenderHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  /* handler methods */
  changeStaffDepartmentHandler = (event) => {
    this.setState({ staffDepartment: event.target.value });
  };

  changeStaffNameHandler = (event) => {
    this.setState({ staffName: event.target.value });
  };

  changeStaffContactHandler = (event) => {
    this.setState({ staffContact: event.target.value });
  };

  changeStaffMailIdHandler = (event) => {
    this.setState({ staffMailId: event.target.value });
  };

  changeStaffGenderHandler = (event) => {
    this.setState({ staffGender: event.target.value });
  };

  /* save employee method */
  saveEmployee = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let employee = {
        staffDepartment: this.state.staffDepartment,
        staffName: this.state.staffName,
        staffContact: this.state.staffContact,
        staffMailId: this.state.staffMailId,
        staffGender: this.state.staffGender,
      };

      ManagerService.createEmployee(employee, this.state.backEndToken).then(
        (res) => {
          this.props.history.push("/staffView");
          swal({
            title: "New Employee Added",            
            icon: "success",
          });          
        }
      );
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  };
  /* cancel method */
  cancel() {
    this.props.history.push("/staffView");
    window.location.reload();
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            {/* add staff form */}
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
                <b>Add Employee</b>
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
                      <b> Employee Name: </b>
                    </label>
                    <input
                      placeholder="Employee Name"
                      name="StaffName"
                      className="form-control"
                      value={this.state.staffName}
                      onChange={this.changeStaffNameHandler}
                    />
                    {this.validator.message(
                      "Employee Name",
                      this.state.staffName,
                      "required|alpha_space|max:30",
                      { className: "text-danger" }
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      <b> Department Name: </b>
                    </label>
                    <select
                      placeholder="Department Name"
                      name="StaffDepartment"
                      className="form-control"
                      value={this.state.staffDepartment}
                      onChange={this.changeStaffDepartmentHandler}
                    >
                      <option>others</option>
                      <option>Administration</option>
                      <option>Room Management</option>
                      <option>Reservation Management</option>
                      <option>Guest Management</option>
                      <option>Inventory Control</option>
                      <option>Maintainance</option>
                      <option>Security</option>
                    </select>
                    {this.validator.message(
                      "Department Name ",
                      this.state.staffDepartment,
                      "required",
                      { className: "text-danger" }
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      {" "}
                      <b>Employee Contact:</b>{" "}
                    </label>
                    <input
                      placeholder="Employee Contact"
                      name="staffContact"
                      className="form-control"
                      value={this.state.staffContact}
                      onChange={this.changeStaffContactHandler}
                    />
                     {this.validator.message(
                      "Contact",
                      this.state.staffContact,
                      "required|phone|max:12",
                      { className: "text-danger" }
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      {" "}
                      <b>Employee Mail Id:</b>{" "}
                    </label>
                    <input
                      placeholder="Mail ID"
                      name="StaffMailId"
                      className="form-control"
                      value={this.state.staffMailId}
                      onChange={this.changeStaffMailIdHandler}
                    />
                    {this.validator.message(
                      "Mail Id",
                      this.state.staffMailId,
                      "required|email",
                      { className: "text-danger" }
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      {" "}
                      <b>Employee Gender:</b>{" "}
                    </label>
                    <select
                      placeholder="Gender"
                      name="StaffGender"
                      className="form-control"
                      value={this.state.staffGender}
                      onChange={this.changeStaffGenderHandler}
                    >
                      <option>--</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>others</option>
                    </select>
                    {this.validator.message(
                      "Gender ",
                      this.state.staffGender,
                      "required",
                      { className: "text-danger" }
                    )}
                  </div>

                  <button
                    title="add"
                    className="btn btn-success"
                    onClick={this.saveEmployee}
                  >
                    <b>Save</b>
                  </button>
                  <button
                    title="cancel"
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
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(AddStaff);
