import React from "react";
import RND from "./chartItem/Rnd";
import "./chart.css";
const Index = (props) => {
  return (
    <div className="chartContainer">
      <RND minWidth={300} minHeight={300} bounds="window" />
      <RND minWidth={300} minHeight={300} bounds="window" />
      <RND minWidth={300} minHeight={300} bounds="window" />
      <RND minWidth={300} minHeight={300} bounds="window" />
    </div>
  );
};

export default Index;
