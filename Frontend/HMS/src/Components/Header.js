import React from "react";
import { Link, withRouter } from "react-router-dom";

function Header() {
  /* logout method */
  const logout = () => {
    const confirmBox = window.confirm(
      "Are you sure you want to Logout?"
    );
    if (confirmBox === true) {
      localStorage.removeItem("role");
    }
    
  };
  return (
    <div>
      <header>
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ fontFamily: "cursive", fontSize: "18px" }}
        >
          <img
            src="https://i.pinimg.com/originals/e8/ce/50/e8ce50ac38aa03a14e267557586b8798.png"
            alt="image1"
            width="40"
            height="40"
            style={{ marginRight: "10px" }}
          />
          <a className="navbar-brand" href="/home">
            HOTEL GRAND AJ INN.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* owner navbar */}
            {localStorage.getItem("role") === "owner" ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/owner"}>
                  <b className="fas fa-home">  </b> Home
                  </Link>
                </li>

                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <b className="fas fa-users">  </b> Staff Ops
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="/ownerView">
                          <b className="fas fa-user-tie">  </b> Managers
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/staffView">
                          <b className="fas fa-user">  </b> staff
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <b className="fas fa-door-open">  </b> Room Ops
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                      <a className="dropdown-item" href="/RoomView">
                      <b className="fas fa-bed">  </b> <b>Rooms</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/inventoryView">
                      <b className="fas fa-tv">  </b> <b>Inventory</b>
                      </a>
                    </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <b className="fas fa-user-friends">  </b> Guest Ops
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                      <a className="dropdown-item" href="/checkIn">
                      <b className="fas fa-user-check">  </b> <b>Check-In</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/checkOut">
                      <b className="fas fa-walking">  </b> <b>Check-Out</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/checkOutLog">
                      <b className="fas fa-address-book">  </b> <b>Guest Log</b>
                      </a>
                    </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                
                <li className="nav-item">
                  <Link onClick={logout} className="nav-link" to={"/home"}>
                  <b className="fas fa-sign-out-alt">  </b> logOut
                  </Link>
                </li>
              </ul>
            ) : null}

            {/* manager navbar */}
            {localStorage.getItem("role") === "manager" ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/manager"}>
                  <b className="fas fa-home">  </b> Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/staffView"}>
                  <b className="fas fa-user">  </b> staff
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/RoomView"}>
                  <b className="fas fa-bed">  </b> Rooms
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/inventoryView"}>
                  <b className="fas fa-tv">  </b> Inventory
                  </Link>
                </li>

                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <b className="fas fa-user-friends">  </b> Guest Ops
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                      <a className="dropdown-item" href="/checkIn">
                      <b className="fas fa-user-check">  </b> <b>Check-In</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/checkOut">
                      <b className="fas fa-walking">  </b> <b>Check-Out</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/checkOutLog">
                      <b className="fas fa-address-book">  </b> <b>Guest Log</b>
                      </a>
                    </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <li className="nav-item">
                  <Link onClick={logout} className="nav-link" to={"/home"}>
                  <b className="fas fa-sign-out-alt">  </b> logOut
                  </Link>
                </li>
              </ul>
            ) : null}

            {/* receptionist navbar */}
            {localStorage.getItem("role") === "staff" ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/reception"}>
                  <b className="fas fa-home">  </b> Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/checkIn"}>
                  <b className="fas fa-user-check">  </b> Check-In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/checkOut"}>
                  <b className="fas fa-walking">  </b> Check-Out
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/checkOutLog"}>
                  <b className="fas fa-address-book">  </b> Guest Log
                  </Link>
                </li>

                <li className="nav-item">
                  <Link onClick={logout} className="nav-link" to={"/home"}>
                  <b className="fas fa-sign-out-alt">  </b> logOut
                  </Link>
                </li>
              </ul>
            ) : null}

            {/* Global navbar */}
            {!localStorage.getItem("role") ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                  <b className="fas fa-sign-in-alt">  </b> Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/suggest"}>
                  <b className="fas fa-envelope"> </b> Suggestions
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default withRouter(Header);
