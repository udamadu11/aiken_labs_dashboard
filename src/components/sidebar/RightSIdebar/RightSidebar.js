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
  FormControl,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

//component
import { ChartNames } from "../../../Data/ChartNames";
import CardComponent from "../sidebarComponent/CardComponent";

const RightSidebar = ({ isOpenSidebar, toggle2 }) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [age, setAge] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

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

  const searchFilter = ChartNames.filter((chart) =>
    chart.type.toLowerCase().includes(search.toLowerCase())
  );
  console.log("chart", ChartNames);
  console.log("search", searchFilter);
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
              />
              <div>
                <FormControl style={{ marginBottom: 5 }}>
                  <Select
                    open={openModal}
                    onClose={handleCloseModal}
                    onOpen={handleOpenModal}
                    value={age}
                    onChange={handleChangeAge}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
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
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default RightSidebar;
