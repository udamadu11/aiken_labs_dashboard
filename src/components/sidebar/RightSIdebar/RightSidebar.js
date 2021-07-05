import React from "react";
import "./RightSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const RightSidebar = ({ isOpenSidebar, toggle2 }) => {
  return (
    <div className={isOpenSidebar ? "rightSidebar" : "is-closed"}>
      <div className="sidebar-toggle">
        <FontAwesomeIcon icon={faTimes} className="icon" onClick={toggle2} />
      </div>
    </div>
  );
};

export default RightSidebar;
