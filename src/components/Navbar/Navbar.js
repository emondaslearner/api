import React, { Component, useState } from "react";
import logo from "../Image/design-png-hd.png";
import Users from "../Users/Users";
import { Link } from "react-router-dom";

function Navbar(){
   const [value,setValue] = useState('');
  const search = (e) => {
    setValue(e.target.value)
  }
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" />
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link className="nav-post-item" to="/posts">
                      Posts
                    </Link>
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  onChange={search}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>
        <Users value={value} />
      </>
    );
}

export default Navbar;
