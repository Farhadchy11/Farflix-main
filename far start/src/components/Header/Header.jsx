import React from "react";
import "./Header.css";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="left_header">
        <img className="header_logo" src={logo} alt="logo" />
        <h3>FARFLIX</h3>
      </div>

      <div className="header_input">
        <input placeholder="Search" type="text" />

        <FontAwesomeIcon
          className="header_inputButton "
          icon={faMagnifyingGlass}
        />
      </div>

      <Link to="/login">
        <button className="login_btn">Login</button>
      </Link>


    </div>
  );
};

export default Header;
