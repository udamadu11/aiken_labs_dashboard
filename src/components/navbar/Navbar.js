import React from "react";
import "./Navbar.css";

//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faEllipsisV,
  faUserCircle,
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
        <a href="a">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a href="a">Dashbord</a>
        <a href="a">Play Area</a>
        <a href="a">Wiget</a>
        <a href="a">Template</a>
      </div>
      <div className="navbar_right">
        <a href="a">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <a href="a">
          <FontAwesomeIcon icon={faUserCircle} />
        </a>
        <a href="a">
          <FontAwesomeIcon icon={faEllipsisV} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
