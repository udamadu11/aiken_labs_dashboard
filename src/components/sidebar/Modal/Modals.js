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
  InputLabel,
} from "@material-ui/core";

//component
import { ChartNames } from "../../../Data/ChartNames";
import { ChartData } from "../../../Data/ChartData";

const Modals = ({
  addChart,
  setAddChart,
  open,
  setOpen,
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
    setHistory([...addChart]);
    if (barName != "" || input != "" || charData != "") {
      const pos = {
        id: Math.round(Math.random() * 1000),
        type: barName,
        chartName: input,
        DataSet: charData,
      };
      setAddChart([...addChart, pos]);
    } else {
      alert("Data feilds or field null");
    }
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
              required={true}
            />
            <div>
              <InputLabel id="barname">Chart Type</InputLabel>
              <Select
                labelId="barname"
                fullWidth
                open={openModal}
                onClose={handleCloseModal}
                onOpen={handleOpenModal}
                value={barName}
                onChange={onChangeBarName}
                style={{ marginBottom: 10 }}
                required={true}
              >
                {ChartNames.map((name) => {
                  return (
                    <MenuItem value={name.type} key={name.id}>
                      {name.type}
                    </MenuItem>
                  );
                })}
              </Select>
              <InputLabel id="data">Data Sets</InputLabel>
              <Select
                labelId="data"
                fullWidth
                open={DataModal}
                onClose={handleCloseDataModal}
                onOpen={handleOpenDataModal}
                value={charData}
                onChange={onChangeData}
                style={{ marginBottom: 10 }}
                required={true}
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
