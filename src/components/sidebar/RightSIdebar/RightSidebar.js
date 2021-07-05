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
import CardComponent from "../sidebarComponent/CardComponent";

const RightSidebar = ({ isOpenSidebar, toggle2 }) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [barName, setBarName] = useState("");

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onChangeBarName = (event) => {
    setBarName(event.target.value);
  };

  const searchFilter = ChartNames.filter((chart) =>
    chart.type.toLowerCase().includes(search.toLowerCase())
  );

  console.log("chart", ChartNames);
  console.log("search", searchFilter);
  console.log("name", barName);
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
          {searchFilter.map((data) => {
            return (
              <div>
                <CardComponent key={data.id} type={data.type} img={data.img} />
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
                onChange={handleChange}
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
                  open={openModal}
                  onClose={handleCloseModal}
                  onOpen={handleOpenModal}
                  value={barName}
                  onChange={onChangeBarName}
                  style={{ marginBottom: 10 }}
                >
                  {ChartNames.map((name) => {
                    return (
                      <MenuItem value={name.dataSet} key={name.id}>
                        {name.id}
                      </MenuItem>
                    );
                  })}
                </Select>
                <div className="button">
                  <Button
                    variant="contained"
                    color="primary"
                    // onClick={handleSubmit}
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
