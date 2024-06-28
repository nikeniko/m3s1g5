import React from "react";
import { Bell, PersonCircle, Search } from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg_Netflix"
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f !important" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="assets/logo.png"
            style={{ width: "100px", height: "55px" }}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                My List
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <Search color="white" size={20} className="me-3" />
            <div id="kids" className="fw-bold text-white me-3">
              KIDS
            </div>
            <Bell color="white" size={20} className="me-3" />
            <a href="/ProfilePage">
              <PersonCircle color="white" size={20} className="me-3" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
