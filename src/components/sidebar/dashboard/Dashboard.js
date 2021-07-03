import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  Card,
  Typography,
  CardContent,
  Button,
  Input,
} from "@material-ui/core";
import "./Dashboard.css";
import { useState } from "react";

const Dashboard = ({ icon1, icon2, icon3, name, add, setAdd, ad }) => {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState("");
  const onDelete = (el) => {
    setAdd(add.filter((e) => e.id !== ad.id));
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (el) => {
    let item = add.find((e) => e.id === ad.id);
    if (item !== 0) {
      item.name = input;
      console.log(item);
      setAdd([...add]);
    }
  };
  return (
    <div className="items">
      <div>
        <FontAwesomeIcon icon={icon1} onClick={handleOpen} />
        <h3 style={{ marginLeft: 10 }}>{name}</h3>
      </div>
      <div>
        <FontAwesomeIcon icon={icon2} />
        <FontAwesomeIcon icon={icon3} className="color" onClick={onDelete} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Card className="card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Add Name
            </Typography>
            <Input
              className="input"
              placeholder="Add..."
              type="text"
              onChange={handleChange}
            />
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
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default Dashboard;
