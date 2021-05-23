import React, { Component } from "react";
import { withRouter } from "react-router";
import OwnerService from "../../Services/OwnerService";

export class ViewManager extends Component {
  constructor(props) {
    super(props);

    /* state variables */
    this.state = {
      managerId: this.props.match.params.managerId,
      employee: {},
      backEndToken: localStorage.getItem("backEndToken"),
    };
  }

  /* component did mount method */
  componentDidMount() {
    OwnerService.getEmployeeById(
      this.state.managerId,
      this.state.backEndToken
    ).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  /* back method */
  back() {
    this.props.history.push("/ownerView");
    window.location.reload();
  }

  render() {
    return (
      <div>
        <br></br>
        {/* view manager card */}
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
            <b> Employee Details</b>
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
                {" "}
                <b>Employee Name :</b>{" "}
              </label>
              <br />
              <div>
                <i> {this.state.employee.managerName}</i>
              </div>
            </div>
            <div className="row">
              <label>
                {" "}
                <b>Employee Salary :</b>{" "}
              </label>
              <br />
              <div>
                <i> {this.state.employee.managerSalary}</i>
              </div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Employee's Department : </b>
              </label>
              <br />
              <div>
                {" "}
                <i>{this.state.employee.departmentName}</i>
              </div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Employee Contact : </b>
              </label>
              <br />
              <div>
                {" "}
                <i>{this.state.employee.managerContact}</i>
              </div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Employee MailId :</b>{" "}
              </label>
              <br />
              <div>
                {" "}
                <i>{this.state.employee.managerMailId}</i>
              </div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Employee Gender :</b>{" "}
              </label>
              <br />
              <div>
                {" "}
                <i>{this.state.employee.managerGender}</i>
              </div>
            </div>

            <div className="row">
              <label>
                {" "}
                <b>Staff Salary :</b>{" "}
              </label>
              <br />
              <div>
                {" "}
                <i>{this.state.employee.staffSalary}</i>
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

export default withRouter(ViewManager);
