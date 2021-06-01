import React, { Component } from "react";
import { withRouter } from "react-router";
import swal from 'sweetalert';
import OwnerService from "../../Services/OwnerService";
import SimpleReactValidator from "simple-react-validator";

class AddManager extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();

    /* state variables */
    this.state = {
      departmentName: "",
      managerName: "",
      managerSalary: "",
      managerContact: "",
      managerMailId: "",
      managerGender: "",
      staffSalary: "",
      backEndToken: localStorage.getItem("backEndToken"),
    };
    /* binding handlers */
    this.changeDepartmentNameHandler =
      this.changeDepartmentNameHandler.bind(this);
    this.changeManagerNameHandler = this.changeManagerNameHandler.bind(this);
    this.changeManagerSalaryHandler =
      this.changeManagerSalaryHandler.bind(this);
    this.changeStaffSalaryHandler = this.changeStaffSalaryHandler.bind(this);
    this.changeManagerContactHandler =
      this.changeManagerContactHandler.bind(this);
    this.changeManagerMailIdHandler =
      this.changeManagerMailIdHandler.bind(this);
    this.changeManagerGenderHandler =
      this.changeManagerGenderHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  /* handler methods */
  changeDepartmentNameHandler = (event) => {
    this.setState({ departmentName: event.target.value });
  };

  changeManagerNameHandler = (event) => {
    this.setState({ managerName: event.target.value });
  };

  changeManagerSalaryHandler = (event) => {
    this.setState({ managerSalary: event.target.value });
  };

  changeStaffSalaryHandler = (event) => {
    this.setState({ staffSalary: event.target.value });
  };

  changeManagerContactHandler = (event) => {
    this.setState({ managerContact: event.target.value });
  };

  changeManagerMailIdHandler = (event) => {
    this.setState({ managerMailId: event.target.value });
  };

  changeManagerGenderHandler = (event) => {
    this.setState({ managerGender: event.target.value });
  };

  /* save employee method */
  saveEmployee = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let employee = {
        departmentName: this.state.departmentName,
        managerName: this.state.managerName,
        managerSalary: this.state.managerSalary,
        staffSalary: this.state.staffSalary,
        managerContact: this.state.managerContact,
        managerMailId: this.state.managerMailId,
        managerGender: this.state.managerGender,
      };

      OwnerService.createEmployee(employee, this.state.backEndToken).then(
        (res) => {
          this.props.history.push("/ownerView");          
          swal({
            title: "New Manager Added",            
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
    this.props.history.push("/ownerView");
    window.location.reload();
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            {/* add manager form */}
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
                  <div className="row mb-0">
                  <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      <b>Manager Name:</b>{" "}
                    </label>
                    <input
                      placeholder="Manager Name"
                      name="ManagerName"
                      className="form-control"
                      value={this.state.managerName}
                      onChange={this.changeManagerNameHandler}
                    />
                    {this.validator.message(
                      "Manager Name",
                      this.state.managerName,
                      "required|alpha_space|max:30",
                      { className: "text-danger" }
                    )}
                  </div>
                  </div>

                  <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      {" "}
                      <b>Manager Salary:</b>{" "}
                    </label>
                    <input
                      placeholder="Manager Salary"
                      name="managerSalary"
                      className="form-control"
                      value={this.state.managerSalary}
                      onChange={this.changeManagerSalaryHandler}
                    />
                    {this.validator.message(
                      "Manager Salary",
                      this.state.managerSalary,
                      "required|numeric|max:6",
                      { className: "text-danger" }
                    )}
                  </div>
                  </div>
                  </div>
                  

                  <div className="form-group">
                    <label>
                      {" "}
                      <b>Department Name:</b>{" "}
                    </label>
                    <select
                      placeholder="Department Name"
                      name="DepartmentName"
                      className="form-control"
                      value={this.state.departmentName}
                      onChange={this.changeDepartmentNameHandler}
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
                      this.state.departmentName,
                      "required",
                      { className: "text-danger" }
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      {" "}
                      <b>ManagerContact:</b>{" "}
                    </label>
                    <input
                      placeholder="Manager Contact"
                      name="managerContact"
                      className="form-control"
                      value={this.state.managerContact}
                      onChange={this.changeManagerContactHandler}
                    />
                    {this.validator.message(
                      "Contact",
                      this.state.managerContact,
                      "required|phone|max:12",
                      { className: "text-danger" }
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      {" "}
                      <b>Manager Mail Id:</b>{" "}
                    </label>
                    <input
                      placeholder="Mail ID"
                      name="managerMailId"
                      className="form-control"
                      value={this.state.managerMailId}
                      onChange={this.changeManagerMailIdHandler}
                    />
                    {this.validator.message(
                      "Mail Id",
                      this.state.managerMailId,
                      "required|email",
                      { className: "text-danger" }
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      {" "}
                      <b>Manager Gender:</b>{" "}
                    </label>
                    <select
                      placeholder="Gender"
                      name="managerGender"
                      className="form-control"
                      value={this.state.managerGender}
                      onChange={this.changeManagerGenderHandler}
                    >
                      <option>--</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>others</option>
                    </select>
                    {this.validator.message(
                      "Gender ",
                      this.state.managerGender,
                      "required",
                      { className: "text-danger" }
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      {" "}
                      <b>Staff Salary: </b>
                    </label>
                    <input
                      placeholder="Staff Salary"
                      name="staffSalary"
                      className="form-control"
                      value={this.state.staffSalary}
                      onChange={this.changeStaffSalaryHandler}
                    />
                    {this.validator.message(
                      "Staff Salary",
                      this.state.staffSalary,
                      "required|numeric|max:5",
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
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(AddManager);
