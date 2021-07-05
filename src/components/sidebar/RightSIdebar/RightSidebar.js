import React from "react";
import "./RightSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ChartNames } from "../../../Data/ChartNames";
import CardComponent from "../sidebarComponent/CardComponent";
const RightSidebar = ({ isOpenSidebar, toggle2 }) => {
  return (
    <div className={isOpenSidebar ? "rightSidebar" : "is-closed"}>
      <div className="sidebar-toggle">
        <FontAwesomeIcon icon={faTimes} className="icon" onClick={toggle2} />
      </div>
      <div className="sidebar_container">
        <div className="search_input">
          <input type="text" placeholder="Search chart here" />
        </div>
        <div className="chart_details">
          {ChartNames.map((data, i) => {
            return (
              <div>
                <CardComponent type={data.type} img={data.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
