import React from "react";
import "./chart.css";
import Cards from "./chartItem/Cards";
import { Rnd } from "react-rnd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Data } from "../../chart";
import {
  faRedoAlt,
  faShareAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
// import RND from "./chartItem/RND";
// import { Grid } from "@material-ui/core";

const Index = ({ addChart, setAddChart, history, setHistory }) => {
  let data = Data.find((e) => e.id === 1);
  const d = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date =
    d.getDate() + " " + months[d.getMonth() + 1] + " " + d.getFullYear();
  const day = days[d.getDay()];
  const time = d.toLocaleString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <main>
      <div className="main_container">
        <div className="main_title">
          <div className="title">
            <FontAwesomeIcon icon={faRedoAlt} className="main_icon" />
            <h3>Sales Dashboard</h3>
          </div>
          <div className="time">
            <h3>{day}</h3>
            <h2>{time} </h2>
            <h3>{date}</h3>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="main_icon" />
            <FontAwesomeIcon icon={faShareAlt} className="main_icon" />
          </div>
        </div>

        <div className="main_cards">
          {addChart.map((datas) => {
            return (
              <Rnd bounds="window">
                <Cards
                  key={datas.id}
                  data={datas}
                  datas={datas}
                  addChart={addChart}
                  setAddChart={setAddChart}
                  history={history}
                  setHistory={setHistory}
                />
              </Rnd>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Index;
