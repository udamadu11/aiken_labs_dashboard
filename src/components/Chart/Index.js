import React from "react";
import "./chart.css";
import Cards from "./chartItem/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedoAlt,
  faShareAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import RND from "./chartItem/RND";

const Index = (props) => {
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
          {/* <RND minWidth={300} minHeight={300} />
          <RND minWidth={300} minHeight={300} /> */}
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </main>
  );
};

export default Index;
