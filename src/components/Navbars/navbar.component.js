import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/paymentImg/docv.ico";
import "../../assets/demo/style.css";
export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg py-0">
          <Link to="/" className="navbar-brand">
            <img src={Logo} className="subPhoto" alt="Logo" />
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item mx-3">
                <Link to="/app/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="navbar-item mx-3">
                <Link to="/app/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li className="navbar-item mx-3">
                <Link to="/app/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="navbar-item mx-3">
                <Link to="/app/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="navbar-item mx-3">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="navbar-item mx-3">
                <Link to="/register" className="nav-link">
                  Sign Up
                </Link>
              </li>
              {/* temporary links to know the appearance of the pages */}
              <li className="navbar-item mx-3">
                <Link to="/app/plans" className="nav-link">
                  Plans
                </Link>
              </li>
              <li className="navbar-item mx-3">
                <Link to="/app/paymentform" className="nav-link">
                  Payment Form
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
