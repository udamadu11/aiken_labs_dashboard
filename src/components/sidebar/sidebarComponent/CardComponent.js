import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./CardComponent.css";
import { Line, Bar, Doughnut, Scatter, PolarArea } from "react-chartjs-2";

const CardComponent = ({ data }) => {
  const {
    type,
    chartName,
    DataSet: { name, set, lable },
  } = data;
  console.log(type, chartName, name, set, lable);
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
      <Card className="chart_card" style={{ width: 200, height: 160 }}>
        <Typography
          className="chart_title"
          variant="subtitle1"
          style={{ marginLeft: 20 }}
        >
          {chartName}
        </Typography>
        <CardContent>
          <Type
            data={{
              datasets: [
                {
                  labe: "",
                  data: set,
                },
              ],
            }}
            width={300}
            options={{
              legend: { display: false },
              title: { display: false, text: `Current state in ${type}` },
              responsive: true,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CardComponent;
