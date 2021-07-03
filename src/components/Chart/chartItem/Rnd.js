import React from "react";
import { Rnd } from "react-rnd";
import ChartItem from "./ChartItem";
const RND = ({ minWidth, minHeight, bounds }) => {
  return (
    <div>
      <Rnd
        default={{
          x: 200,
          y: 200,
          width: 300,
          height: 300,
        }}
        minWidth={minWidth}
        minHeight={minHeight}
        bounds={bounds}
      >
        <ChartItem />
      </Rnd>
    </div>
  );
};

export default RND;
