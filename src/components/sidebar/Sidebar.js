import React, { useState } from "react";
import logo from "../../assets/edge.png";

//component
import Add from "./add/Add";
import Dashboard from "./dashboard/Dashboard";
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

const Sidebar = ({ isOpen, toggle }) => {
  const [add, setAdd] = useState([]);
  console.log(add);
  return (
    <div className={isOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar_title">
        <div className="sidebar_image">
          <img src={logo} alt="logo" />
          <h1>ZEPTOLYTICS</h1>
          <FontAwesomeIcon
            icon={faTimes}
            className="closeButton"
            onClick={toggle}
          />
        </div>
      </div>
      <div className="sidebar_search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="sidebar_menu">
        <h2>My Dashborad</h2>
      </div>
      <div>
        <Dashboard
          icon1={faBars}
          icon2={faStar}
          icon3={faTimes}
          name="Finance"
        />
        <Dashboard icon1={faBars} icon2={faStar} icon3={faTimes} name="Sales" />
        {add.map((ad) => (
          <Dashboard
            key={ad.id}
            icon1={faBars}
            icon2={faStar}
            icon3={faTimes}
            name={ad.name}
            add={add}
            setAdd={setAdd}
            ad={ad}
          />
        ))}
      </div>
      <div className="sidebar_add">
        <Add add={add} setAdd={setAdd} />
      </div>

      <div className="sidebar_bottom">
        <h2>Shared</h2>
        <FontAwesomeIcon icon={faUsers} />
      </div>

      <div>
        <Dashboard
          icon1={faBars}
          icon2={faStar}
          icon3={faTimes}
          name="Shared 01"
        />
      </div>

      <div>
        <Dashboard
          icon1={faBars}
          icon2={faStar}
          icon3={faTimes}
          name="Shared 02"
        />
      </div>
    </div>
  );
};

export default Sidebar;
