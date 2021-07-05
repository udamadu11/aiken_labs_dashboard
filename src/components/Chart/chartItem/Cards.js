import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchPlus,
  faStar,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { Card, IconButton, CardContent, CardHeader } from "@material-ui/core";

import { Line, Bar, Doughnut, Scatter, PolarArea } from "react-chartjs-2";
import "./Cards.css";
const Cards = ({ type, data, width, height }) => {
  const { backgroundColor, label, dataSet } = data;
  console.log(data);
  let Type;
  switch (type) {
    case "Bar":
      Type = Bar;
      break;
    case "Line":
      Type = Line;
      break;
    case "Doughnut":
      Type = Doughnut;
      break;
    case "Scatter":
      Type = Scatter;
      break;
    case "PolarArea":
      Type = PolarArea;
      break;
    default:
      break;
  }
  return (
    <div>
      <Card className="chart_card" style={{ width: width, height: height }}>
        <CardHeader
          title="Shrimp and Chorizo Paella"
          className="chart_title"
          action={
            <IconButton className="chart_button">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faSearchPlus} />
              <FontAwesomeIcon icon={faEllipsisV} />
            </IconButton>
          }
        />
        <CardContent>
          <Type
            data={{
              labels: label,
              datasets: [
                {
                  label: "People",
                  backgroundColor: backgroundColor,
                  data: dataSet,
                },
              ],
            }}
            width={300}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${type}` },
              responsive: true,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
