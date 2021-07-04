import React from "react";
import { Rnd } from "react-rnd";
import Cards from "./Cards";

const RND = ({ minWidth, minHeight, bounds, data }) => {
  return (
    <div>
      <Rnd>
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
      </Rnd>
    </div>
  );
};

export default RND;
