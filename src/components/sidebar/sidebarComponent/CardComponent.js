import React from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import "./CardComponent.css";
import { Line, Bar, Doughnut, Scatter, PolarArea } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

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
      <Card className="chart_card">
        <Typography
          className="chart_title"
          variant="subtitle1"
          style={{ marginLeft: 20, marginRight: 20 }}
        >
          {chartName}
        </Typography>

        <CardContent>
          <Type
            data={{
              labels: lable,
              options: {
                legend: { display: false },
                responsive: true,
                maintainAspectRatio: false,
              },
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
          />
          <div className="iconButton">
            <IconButton>
              <FontAwesomeIcon
                icon={faEdit}
                style={{ fontSize: 20, color: "blue" }}
              />
            </IconButton>
            <IconButton>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ fontSize: 20, color: "red" }}
              />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardComponent;
