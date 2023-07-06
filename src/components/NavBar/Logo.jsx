import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./navbar.scss";

import Avatar from "@mui/material/Avatar";

const Logo = () => (
  <div className="logo-warper">
    <img className="logo-pic" src={logo} alt="logo" />
    <h4>Where Fantasy Meets Reality</h4>
  </div>
);

export default Logo;
