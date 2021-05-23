import React, { Component } from "react";
import { withRouter } from "react-router";
import ManagerService from "../../../Services/ManagerService";

class StaffView extends Component {
  constructor(props) {
    super(props);

    /* state variables */
    this.state = {
      employees: [],
      backEndToken: localStorage.getItem("backEndToken"),
    };
    /* binding handlers */
    this.addStaff = this.addStaff.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
  }

  /* component did ount method */

  componentDidMount() {
    ManagerService.getEmployees(this.state.backEndToken).then((res) => {
      this.setState({ employees: res.data });
    });
  }

  /* addStaff method */
  addStaff = () => {
    this.props.history.push("/addStaff");
  };

  /* edit staff method */
  editEmployee = (staffId) => {
    this.props.history.push(`/editStaff/${staffId}`);
  };

  /* delete employee method */
  deleteEmployee(staffId) {
    ManagerService.deleteEmployee(staffId, this.state.backEndToken).then(
      (res) => {
        this.setState({
          employees: this.state.employees.filter(
            (employee) => employee.staffId !== staffId
          ),
        });
        alert("Employee deleted");
        window.location.reload();
      }
    );
  }

  /* view employee method */
  viewEmployee(staffId) {
    this.props.history.push(`/viewStaff/${staffId}`);
  }

  render() {
    return (
      <div style={{ fontFamily: "cursive" }}>
        {/* staff view card */}

        <h2
          className=" card text-center col-md-3 offset-md-0"
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
          <b>Employees</b>
        </h2>
        <div>
          <button
            title="add"
            className="btn btn-primary"
            style={{ marginBottom: "10px" }}
            onClick={this.addStaff}
          >
           <b className="fas fa-user-plus"></b> <b>Add Employee</b>
          </button>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-around ">
            {this.state.employees.map((employee) => (
              <div
                className="card m-2 shadow-lg"
                style={{ backgroundColor: "#ebe5e7", width: "21rem" }}
                key={employee.staffId}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <b>{employee.staffName}</b>
                  </h5>

                  <h6 className="card-text">
                    Id :<b> {employee.staffId}</b>
                  </h6>
                  <h6 className="card-text">
                    Dept.name : <b>{employee.staffDepartment}</b>
                  </h6>
                  <h6 className="card-text">
                    Contact : <b>{employee.staffContact}</b>
                  </h6>

                  <button
                    onClick={() => this.editEmployee(employee.staffId)}
                    className="btn btn-info"
                  >
                    <b className="fas fa-user-edit">  </b>
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Are you sure you want to delete?"
                      );
                      if (confirmBox === true) {
                        this.deleteEmployee(employee.staffId);
                      }
                    }}
                    className="btn btn-danger"
                  >
                    <b className="fas fa-trash">  </b>
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.viewEmployee(employee.staffId)}
                    className="btn btn-secondary"
                  >
                    <b className="fas fa-eye">  </b>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <h5>
          Staff count:<i>{this.state.employees.length}</i>
        </h5>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(StaffView);
