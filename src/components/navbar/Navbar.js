import React from "react";
import "./Navbar.css";

//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faEllipsisV,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ sidebar, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon">
        <i className="fa fa-bars">
          <FontAwesomeIcon icon={faBars} />
        </i>
      </div>
      <div className="navbar_left">
        <a href="#">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a href="#">Dashbord</a>
        <a href="#">Play Area</a>
        <a href="#">Wiget</a>
        <a href="#">Template</a>
      </div>
      <div className="navbar_right">
        <a href="#">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faEllipsisV} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
