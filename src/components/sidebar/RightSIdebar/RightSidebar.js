import React, { useState } from "react";
//css
import "./RightSidebar.css";
//material
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faTimes,
  faPlusCircle,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@material-ui/core";

//component
import CardComponent from "../sidebarComponent/CardComponent";
import Modals from "../Modal/Modals";

const RightSidebar = ({ isOpenSidebar, toggle2 }) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [addChart, setAddChart] = useState([]);

  // //search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  //side bar open close
  const handleOpen = () => {
    setOpen(true);
  };

  const searchFilter = addChart.filter((chart) =>
    chart.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={isOpenSidebar ? "rightSidebar" : "is-closed"}>
      <div className="sidebar-toggle">
        <FontAwesomeIcon icon={faChartBar} className="icon" onClick={toggle2} />
      </div>
      <div className="sidebar_container">
        <div className="search_input">
          <input
            type="text"
            placeholder="Search chart here"
            onChange={handleChange}
          />
          <IconButton onClick={handleOpen}>
            <FontAwesomeIcon icon={faPlusCircle} className="plusButton" />
          </IconButton>
        </div>
        <div className="chart_details">
          {searchFilter.map((datas) => {
            return (
              <div>
                <CardComponent key={datas.id} data={datas} />
              </div>
            );
          })}
        </div>
      </div>
      <Modals
        addChart={addChart}
        setAddChart={setAddChart}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default RightSidebar;
