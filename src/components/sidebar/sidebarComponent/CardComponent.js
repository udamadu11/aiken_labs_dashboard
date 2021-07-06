import React, { useState } from "react";
import {} from "@material-ui/core";
import "./CardComponent.css";
import { Line, Bar, Doughnut, Scatter, PolarArea } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
//component
import { ChartNames } from "../../../Data/ChartNames";
import { ChartData } from "../../../Data/ChartData";
//material
import {
  CardContent,
  Typography,
  IconButton,
  Modal,
  Card,
  Button,
  Input,
  Select,
  MenuItem,
} from "@material-ui/core";

const CardComponent = ({
  data: {
    type,
    chartName,
    DataSet: { name, set, lable },
  },
  addChart,
  setAddChart,
  datas,
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
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [DataModal, setDataModal] = useState(false);
  const [input, setInput] = useState("");
  const [barName, setBarName] = useState("");
  const [charData, setChartData] = useState("");
  //chart name
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const onChangeBarName = (event) => {
    setBarName(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //Chart Data
  const handleCloseDataModal = () => {
    setDataModal(false);
  };

  const handleOpenDataModal = () => {
    setDataModal(true);
  };
  const onChangeData = (event) => {
    setChartData(event.target.value);
  };
  //input
  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  //submit
  const handleSubmit = (el) => {
    let item = addChart.find((e) => e.id === datas.id);
    if (item !== 0) {
      item.type = barName;
      item.chartName = input;
      item.DataSet = charData;
      setAddChart([...addChart]);
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };
  //delete
  const handleDelete = () => {
    setAddChart(addChart.filter((e) => e.id !== datas.id));
  };
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
            <IconButton onClick={handleOpen}>
              <FontAwesomeIcon
                icon={faEdit}
                style={{ fontSize: 20, color: "blue" }}
              />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ fontSize: 20, color: "red" }}
              />
            </IconButton>
          </div>
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose} className="Modal">
        <Card className="Modal_card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Add chart
            </Typography>
            <div>
              <Input
                className="input"
                placeholder="Chart Name..."
                type="text"
                onChange={handleChangeInput}
                style={{ width: 350 }}
              />
              <div>
                <Select
                  fullWidth
                  open={openModal}
                  onClose={handleCloseModal}
                  onOpen={handleOpenModal}
                  value={barName}
                  onChange={onChangeBarName}
                  style={{ marginBottom: 10 }}
                >
                  {ChartNames.map((name) => {
                    return (
                      <MenuItem value={name.type} key={name.id}>
                        {name.type}
                      </MenuItem>
                    );
                  })}
                </Select>
                <Select
                  fullWidth
                  open={DataModal}
                  onClose={handleCloseDataModal}
                  onOpen={handleOpenDataModal}
                  value={charData}
                  onChange={onChangeData}
                  style={{ marginBottom: 10 }}
                >
                  {ChartData.map((chartItem) => {
                    return (
                      <MenuItem value={chartItem} key={chartItem.id}>
                        {chartItem.name}
                      </MenuItem>
                    );
                  })}
                </Select>
                <div className="button">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Add
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default CardComponent;
