import React from "react";
import "./chart.css";
import Cards from "./chartItem/Cards";
// import { Rnd } from "react-rnd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Data } from "../../chart";
import {
  faRedoAlt,
  faShareAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
// import RND from "./chartItem/RND";
// import { Grid } from "@material-ui/core";

const Index = ({ addChart, setAddChart }) => {
  let data = Data.find((e) => e.id === 1);
  return (
    <main>
      <div className="main_container">
        <div className="main_title">
          <div className="title">
            <FontAwesomeIcon icon={faRedoAlt} className="main_icon" />
            <h3>Sales Dashboard</h3>
          </div>
          <div className="time">
            <h3>Wed</h3>
            <h2>10:24 a.m. </h2>
            <h3>31 August 2021</h3>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="main_icon" />
            <FontAwesomeIcon icon={faShareAlt} className="main_icon" />
          </div>
        </div>

        <div className="main_cards">
          {addChart.map((datas) => {
            return (
              <div>
                <Cards
                  key={datas.id}
                  data={datas}
                  addChart={addChart}
                  setAddChart={setAddChart}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Index;
