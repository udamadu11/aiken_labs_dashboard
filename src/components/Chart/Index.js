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

const Index = (props) => {
  let data = Data.find((e) => e.id === 1);
  console.log(data);
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
          {/* <RND minWidth={300} minHeight={300}>
            {<Cards />}
          </RND>
          <RND minWidth={300} minHeight={300}>
            {<Cards />}
          </RND> */}
          {/* <RND minWidth={300} minHeight={300} data={data} /> */}
          {/* <Cards type="Bar" data={data} />
          <Cards type="Line" data={data} />
          <Cards type="Doughnut" data={data} />
          <Cards type="Scatter" data={data} />
          <Cards type="PolarArea" data={data} /> */}
          {/* <Rnd>
            <Cards type="Bar" data={data} />
          </Rnd>
          <Rnd>
            <Cards type="Line" data={data} />
          </Rnd>
          <Rnd>
            <Cards type="Doughnut" data={data} />
          </Rnd>
          <Rnd>
            <Cards type="PolarArea" data={data} />
          </Rnd> */}
          {/* <Grid container spacing={3}>
            <Grid item xs>
              <Rnd
                default={{
                  x: 0,
                  y: 0,
                }}
              >
                <Cards type="Bar" data={data} width={400} height={300} />
              </Rnd>
              <Rnd
                default={{
                  x: 0,
                  y: 310,
                }}
              >
                <Cards type="Line" data={data} width={400} height={260} />
              </Rnd>
            </Grid>
            <Grid item xs></Grid>
          </Grid> */}
        </div>
      </div>
    </main>
  );
};

export default Index;
