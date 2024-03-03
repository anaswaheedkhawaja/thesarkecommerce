import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.css";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const state = useSelector((state) => state.handleCart);

  // Function to handle changes to the search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          <img
            src="./assets/Logo.png"
            alt="The Sark"
            style={{ width: "100px", height: "auto" }}
          />
        </NavLink>
        <button
          className="navbar-toggler mx-2"
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
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div
            className="input-group input-group-sm"
            style={{ maxWidth: "300px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-dark " type="button">
              Search
            </button>
          </div>

          <div className="buttons text-center">
            <NavLink to="/my-account" className="btn btn-outline-dark m-2">
              <i className="fa fa-user-plus mr-1"></i> My Account
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
