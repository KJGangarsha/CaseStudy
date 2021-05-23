import React, { useState } from "react";
import axios from "axios";
import { useHistory, withRouter } from "react-router";

/* login function */
function Login() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const [, setRole] = useState("");

  //axios.defaults.withCredentials = true;

  /* login method */
  const login = () => {
    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          getTokens();
          setRole(response.data[0].role);
          localStorage.setItem("user", response.data[0].username);
          localStorage.setItem("role", response.data[0].role);
          if (localStorage.getItem("role") === "owner") {
            history.push("/owner");
            alert("Logged-In Successfully");
            window.location.reload();
          } else if (localStorage.getItem("role") === "manager") {
            history.push("/manager");
            alert("Logged-In Successfully");
            window.location.reload();
          } else if (localStorage.getItem("role") === "staff") {
            history.push("/reception");
            alert("Logged-In Successfully");
            window.location.reload();
          } else {
            history.push("/home");
            window.location.reload();
          }
        }
      });
  };

  const getTokens = () => {
    axios
      .post("http://localhost:8081/owner/authenticate", {
        username: username,
        password: password,
      })
      .then((response) => {
        //console.log(response.data);
        if (response.data !== undefined) {
          localStorage.setItem("backEndToken", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .post("http://localhost:8082/manager/authenticate", {
        username: username,
        password: password,
      })
      .then((response) => {
        //console.log(response.data);
        if (response.data !== undefined) {
          localStorage.setItem("backEndToken", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .post("http://localhost:8083/guest/authenticate", {
        username: username,
        password: password,
      })
      .then((response) => {
        //console.log(response.data);
        if (response.data !== undefined) {
          localStorage.setItem("backEndToken", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* cancel method */
  const cancel = () => {
    history.push("/home");
    window.location.reload();
  };

  return (
    <div
      className="card col-md-5 offset-md-3"
      style={{
        marginTop: "90px",
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
        {/* Login page */}
        <br />
        <br />
        <h2>
          <b>
            <u>
              <i>Login</i>
            </u>
          </b>
        </h2>
        <br />
        <input
          style={{ borderRadius: "10px", borderWidth: "3px" }}
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <input
          style={{ borderRadius: "10px", borderWidth: "3px" }}
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <button
          className="btn btn-primary"
          style={{ borderRadius: "10px", borderWidth: "3px" }}
          onClick={login}
        >
          <b>login</b>
        </button>
        <button
          className="btn btn-danger"
          style={{
            marginLeft: "10px",
            borderRadius: "10px",
            borderWidth: "3px",
          }}
          onClick={cancel}
        >
          <b>cancel</b>
        </button>
        <h6>{loginStatus}</h6>
      </div>
    </div>
  );
}

export default withRouter(Login);
