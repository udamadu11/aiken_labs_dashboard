import React, { useState } from "react";

//material
import {
  Modal,
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

const Modals = ({
  addChart,
  setAddChart,
  open,
  setOpen,
  undo,
  setUndo,
  history,
  setHistory,
}) => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // let newItem = {
    //   id: Math.round(Math.random() * 1000),
    //   type: barName,
    //   chartName: input,
    //   DataSet: charData,
    // };
    // setAddChart([...addChart, newItem]);
    // setUndo([...undo, newItem]);
    // history = history.toString().slice(0, step + 2);
    const pos = {
      id: Math.round(Math.random() * 1000),
      type: barName,
      chartName: input,
      DataSet: charData,
    };
    setAddChart([...addChart, pos]);
    setHistory([...history, pos]);
  };
  return (
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
  );
};

export default Modals;
