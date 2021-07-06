import React, { useState } from "react";
//css
import "./RightSidebar.css";
//material
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Modal,
  IconButton,
  Card,
  Typography,
  CardContent,
  Button,
  Input,
  Select,
  MenuItem,
} from "@material-ui/core";

//component
import { ChartNames } from "../../../Data/ChartNames";
import { ChartData } from "../../../Data/ChartData";
import CardComponent from "../sidebarComponent/CardComponent";

const RightSidebar = ({ isOpenSidebar, toggle2 }) => {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [DataModal, setDataModal] = useState(false);
  const [barName, setBarName] = useState("");
  const [charData, setChartData] = useState("");
  const [addChart, setAddChart] = useState([]);

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
  //search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  //side bar open /close
  const handleOpen = () => {
    setOpen(true);
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
  //filter search data
  const searchFilter = ChartNames.filter((chart) =>
    chart.type.toLowerCase().includes(search.toLowerCase())
  );
  //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setAddChart([
      ...addChart,
      {
        id: Math.round(Math.random() * 1000),
        type: barName,
        chartName: input,
        DataSet: charData,
      },
    ]);
  };

  return (
    <div className={isOpenSidebar ? "rightSidebar" : "is-closed"}>
      <div className="sidebar-toggle">
        <FontAwesomeIcon icon={faTimes} className="icon" onClick={toggle2} />
      </div>
      <div className="sidebar_container">
        <div className="search_input">
          <input
            type="text"
            placeholder="Search chart here"
            onChange={handleChange}
          />
          <IconButton onClick={handleOpen}>
            <FontAwesomeIcon icon={faPlusCircle} className="plusButton" />
          </IconButton>
        </div>
        <div className="chart_details">
          {addChart.map((datas) => {
            return (
              <div>
                <CardComponent key={datas.id} data={datas} />
              </div>
            );
          })}
        </div>
      </div>
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

export default RightSidebar;
