import React from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import "./CardComponent.css";
import { Line, Bar, Doughnut, Scatter, PolarArea } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const CardComponent = ({
  data: {
    type,
    chartName,
    DataSet: { name, set, lable },
  },
}) => {
  console.log(set);
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
      <Card
        className="chart_card"
        style={{
          width: 180,
          height: 220,
          backgroundColor: "white",
          opacity: 0.7,
        }}
      >
        <Typography
          className="chart_title"
          variant="subtitle1"
          style={{ marginLeft: 20, marginRight: 20 }}
        >
          {chartName}
          <IconButton className="iconButton">
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
        </Typography>

        <CardContent>
          <Type
            data={{
              labels: lable,
              datasets: [
                {
                  label: name,
                  data: set,
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                },
              ],
            }}
            width={200}
            options={{
              legend: { display: false },
              title: { display: false },
              responsive: true,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CardComponent;
