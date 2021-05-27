import React from "react";

import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <a className="navbar-brand" href="#">
      <img src="https://img.icons8.com/material-sharp/24/000000/comment-discussion.png" />
      {"  "}Discussion Forum
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <form className="d-flex">
        <input
          className="form-control me-2"
          size="35"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
      <ul className="navbar-nav header-css">
        <li className="nav-item active">
          <a className="nav-link list" href="#" style={{ color: "#4b3589" }}>
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#" style={{ color: "#4b3589" }}>
            About <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#" style={{ color: "#4b3589" }}>
            Builds <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/cards">Join Us</Link>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#" style={{ color: "#4b3589" }}>
            Communities <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item active">
          <button type="button" className="btn btn-primary btn-block">
            Log In
          </button>
        </li>
        <li className="nav-item active">
          <button type="button" className="btn btn-primary">
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
