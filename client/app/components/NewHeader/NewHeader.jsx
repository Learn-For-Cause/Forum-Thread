import React from "react";

import { Link } from "react-router-dom";


const NewHeader = () => (
    <nav className="navbar navbars navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand head" href="#"> <img src="https://img.icons8.com/material-sharp/24/000000/comment-discussion.png" />
      {"  "}Discussion Forum</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="d-flex">
        <input class="form-control me-2 " size="30" style={{ margin: "6px" }} type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" style={{ margin: "6px" }} type="submit">Search</button>
      </form>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-li" >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{ color: "#4b3589" , marginTop:"3px" }}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{ color: "#4b3589" , marginTop:"3px"}}>Builds</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{ color: "#4b3589" , marginTop:"3px"}}>Labs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{ color: "#4b3589", marginTop:"3px" }}>Communities</a>
        </li>
        <button className="btn btn-primary btn-xs-block">Login</button>
        <button className="btn btn-primary btn-xs-block">SignUp</button>
                
      </ul>
     
    </div>
  </div>
</nav>
);

export default NewHeader;
