import React, { useState } from "react";
import "./RightSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ChartNames } from "../../../Data/ChartNames";
import CardComponent from "../sidebarComponent/CardComponent";
const RightSidebar = ({ isOpenSidebar, toggle2 }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchFilter = ChartNames.filter(
    (chart) => chart.type.toLowerCase().includes(search.toLowerCase())
    //console.log(chart.type);
  );
  console.log("chart", ChartNames);
  console.log("search", searchFilter);
  return (
    <div className={isOpenSidebar ? "rightSidebar" : "is-closed"}>
      <div className="sidebar-toggle">
        <FontAwesomeIcon icon={faTimes} className="icon" onClick={toggle2} />
      </div>
      <div className="sidebar_container">
        <div className="search_input">
          <input
            type="text"
            placeholder="Search chart here"
            onChange={handleChange}
          />
        </div>
        <div className="chart_details">
          {searchFilter.map((data) => {
            return (
              <div>
                <CardComponent key={data.id} type={data.type} img={data.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
