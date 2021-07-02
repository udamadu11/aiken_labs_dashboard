import React from "react";
import logo from "../../assets/edge.png";

//css
import "./Sidebar.css";
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBars,
  faStar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Add from "./add/Add";

const Sidebar = ({ openSidebar, closeSidebar }) => {
  return (
    <div className={openSidebar ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar_title">
        <div className="sidebar_image">
          <img src={logo} alt="logo" />
          <h1>ZEPTOLYTICS</h1>
        </div>
      </div>
      <div className="sidebar_search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="sidebar_menu">
        <h2>My Dashborad</h2>
      </div>
      <div className="sidebar_add">
        <Add />
      </div>

      <div className="sidebar_bottom">
        <h2>Shared</h2>
        <FontAwesomeIcon icon={faUsers} />
      </div>

      <div className="items">
        <FontAwesomeIcon icon={faBars} />
        <h3 style={{ marginLeft: 10 }}>Shared 01</h3>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faTimes} className="color" />
      </div>
      <div className="items">
        <FontAwesomeIcon icon={faBars} />
        <h3 style={{ marginLeft: 10 }}>Shared 02</h3>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faTimes} className="color" />
      </div>
    </div>
  );
};

export default Sidebar;
