import React, { useState } from "react";
import Axios from "axios";
import { useHistory, withRouter } from "react-router";

function Register() {
  const history = useHistory();
  const [usernamereg, setUsernamereg] = useState("");
  const [passwordreg, setPasswordreg] = useState("");
  const [role, setRole] = useState("");

  const [registerStatus, setRegisterStatus] = useState("");

  Axios.defaults.withCredentials = true;

  /* register method */
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      usernamereg: usernamereg,
      passwordreg: passwordreg,
      role: role,
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("registered new user " + usernamereg);
        history.push("/ownerView");
        alert("User Registered Successfully");
        window.location.reload();
      }
    });
  };

  /* Cancel method */
  const cancel = () => {
    history.push("/ownerView");
    window.location.reload();
  };

  return (
    <div
      className="card col-md-5 offset-md-3"
      style={{
        marginTop: "70px",
        marginLeft: "330px",
        backgroundColor: "whitesmoke",
        fontSize: "15px",
        borderColor: "black",
        boxShadow: "2px 5px 30px 2px black",
        fontFamily: "cursive",
        borderWidth: "3px",
      }}
    >
      <div className="text-center">
        {/* register form */}
        <img
            src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
            alt="profile-img"
            className="profile-img-card"
            style={{ width:'50%',height:'20%',backgroundColor:"lightcoral"}}            
          />
        <h4>
          <b>
            <u>
              <i>Setup a new User</i>
            </u>
          </b>
        </h4>
        <br />        
        <label className="fas fa-user"></label> <b>Username  :</b>
        <input
          style={{ borderRadius: "10px", borderWidth: "3px" }}
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => {
            setUsernamereg(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <label className="fas fa-cog"> </label><b> Password  :</b>
        <input
          style={{ borderRadius: "10px", borderWidth: "3px" }}
          type="text"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPasswordreg(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <label className="fas fa-wrench"> </label><b> Role  :</b>
        <select
          style={{ borderRadius: "10px", borderWidth: "3px" }}
          type="text"
          name="role"
          placeholder="role"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option>--</option>
          <option>owner</option>
          <option>manager</option>
          <option>staff</option>
        </select>
        <br />
        <br />

        <button className="btn btn-primary" onClick={register}>
          register
        </button>
        <button
          className="btn btn-danger"
          style={{ marginLeft: "10px" }}
          onClick={cancel}
        >
          <b>cancel</b>
        </button>
        <h4>{registerStatus}</h4>
      </div>
    </div>
  );
}

export default withRouter(Register);
