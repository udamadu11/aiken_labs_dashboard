import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchPlus,
  faStar,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  IconButton,
  CardContent,
  CardHeader,
  Modal,
  Typography,
} from "@material-ui/core";

import { Line, Bar, Doughnut, Scatter, PolarArea } from "react-chartjs-2";
import "./Cards.css";
const Cards = ({ data }) => {
  const [open, setOpen] = useState(false);
  //modal open/close
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {
    backgroundColor,
    label,
    DataSet: { name, set, lable },
    type,
    chartName,
  } = data;
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
        <CardHeader
          subheader={chartName}
          action={
            <div>
              <IconButton>
                <FontAwesomeIcon icon={faStar} style={{ fontSize: 16 }} />
              </IconButton>
              <IconButton>
                <FontAwesomeIcon
                  icon={faSearchPlus}
                  style={{ fontSize: 16 }}
                  onClick={handleOpen}
                />
              </IconButton>
              <IconButton>
                <FontAwesomeIcon icon={faEllipsisV} style={{ fontSize: 16 }} />
              </IconButton>
            </div>
          }
        />
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
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose} className="Modal">
        <Card className="Modal_card">
          <CardHeader subheader={chartName} />
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
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default Cards;
