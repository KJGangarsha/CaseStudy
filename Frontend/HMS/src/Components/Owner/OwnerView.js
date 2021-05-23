import React, { Component } from "react";
import { withRouter } from "react-router";
import OwnerService from "../../Services/OwnerService";

export class OwnerView extends Component {
  constructor(props) {
    super(props);

    /* state variables */
    this.state = {
      employees: [],
      backEndToken: localStorage.getItem("backEndToken"),
    };
    /* binding handlers */
    this.addManager = this.addManager.bind(this);
    this.addUser = this.addUser.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
  }

  /* component did mount */
  componentDidMount() {
    OwnerService.getEmployees(this.state.backEndToken).then((res) => {
      this.setState({ employees: res.data });
    });
  }

  /* addUser method call */
  addUser = () => {
    this.props.history.push("/addUser");
  };

  /* add manager method call */
  addManager = () => {
    this.props.history.push("/addManager");
  };

  /* edit employee method call */
  editEmployee = (managerId) => {
    this.props.history.push(`/editManager/${managerId}`);
  };

  /* delete employee method */
  deleteEmployee(managerId) {
    OwnerService.deleteEmployee(managerId, this.state.backEndToken).then(
      (res) => {
        this.setState({
          employees: this.state.employees.filter(
            (employee) => employee.managerId !== managerId
          ),
        });
        alert("Manager Deleted");
        window.location.reload();
      }
    );
  }

  /* view employee method */
  viewEmployee(managerId) {
    this.props.history.push(`/viewManager/${managerId}`);
  }

  render() {
    return (
      <div style={{ fontFamily: "cursive" }}>
        {/* add manager and add user buttons */}
        <h2
          className="card text-center col-md-full offset-md-full pb-1"
          style={{
            marginTop: "60px",
            //marginLeft: "380px",
            fontFamily: "cursive",
            color: "b#ebe5e7",
            backgroundColor: "#ebe5e7",

            boxShadow: "2px 5px 25px 5px gray",
            fontSize: "30px",
          }}
        >
          <b>Managers</b>
        </h2>
        <div className="row">
          <button
            title="add"
            className="btn btn-primary"
            style={{ marginBottom: "10px", marginLeft: "15px" }}
            onClick={this.addManager}
          >
            <b className="fas fa-user-plus">  </b> <b>Add Manager</b>
          </button>
          <button
            title="user"
            className="btn btn-primary"
            style={{ marginBottom: "10px", marginLeft: "795px" }}
            onClick={this.addUser}
          >
           <b className="fas fa-users-cog">  </b> <b>Setup user</b>
          </button>
        </div>
        {/* Managers table */}
        <div className="row">
          <div className="d-flex flex-wrap justify-content-around ">
            {this.state.employees.map((employee) => (
              <div
                className="card m-2 shadow-lg"
                style={{ backgroundColor: "#ebe5e7", width: "21rem" }}
                key={employee.managerId}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <b>{employee.managerName}</b>
                  </h5>

                  <h6 className="card-text">
                    Id :<b> {employee.managerId}</b>
                  </h6>
                  <h6 className="card-text">
                    Dept.name : <b>{employee.departmentName}</b>
                  </h6>
                  <h6 className="card-text">
                    Salary : <b>{employee.managerSalary}</b>
                  </h6>
                  <h6 className="card-text pb-2">
                    Staff Salary : <b>{employee.staffSalary}</b>
                  </h6>
                  <button
                    onClick={() => this.editEmployee(employee.managerId)}
                    className="btn btn-info"
                  >
                   <i className="fas fa-user-edit"> <b></b>{" "}</i>
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Are you sure you want to delete?"
                      );
                      if (confirmBox === true) {
                        this.deleteEmployee(employee.managerId);
                      }
                    }}
                    className="btn btn-danger"
                  >
                    <b className="fas fa-trash">  </b>
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.viewEmployee(employee.managerId)}
                    className="btn btn-secondary"
                  >
                    <b className="fas fa-eye">  </b>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <h5>
            Managers :<i>{this.state.employees.length}</i>
          </h5>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(OwnerView);
