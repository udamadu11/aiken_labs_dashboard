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
  Paper,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";

import { Line, Bar, Doughnut, Scatter, PolarArea } from "react-chartjs-2";
import "./Cards.css";
const Cards = ({ data, addChart, setAddChart, history, setHistory, datas }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  //modal open/close
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //menu

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    let pos = addChart.filter((e) => e.id === datas.id);
    setHistory([...history, pos[0]]);
    setAddChart(addChart.filter((e) => e.id !== datas.id));
  };

  const {
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
      <Card>
        <CardHeader
          subheader={chartName}
          action={
            <div>
              <IconButton>
                <FontAwesomeIcon icon={faStar} style={{ fontSize: 16 }} />
              </IconButton>
              <IconButton onClick={handleOpen}>
                <FontAwesomeIcon icon={faSearchPlus} style={{ fontSize: 16 }} />
              </IconButton>
              <Button
                aria-controls="simple"
                aria-aria-haspopup="true"
                onClick={handleClickMenu}
              >
                <FontAwesomeIcon icon={faEllipsisV} style={{ fontSize: 16 }} />
              </Button>
              <Menu
                id="simple"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </Menu>
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
