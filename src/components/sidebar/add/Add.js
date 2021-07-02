import React, { useState } from "react";
import { Modal } from "@material-ui/core";

//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Add = (props) => {
  const [modelOpen, setModelOpen] = useState(false);
  const open = () => {
    setModelOpen(true);
  };
  const close = () => {
    setModelOpen(false);
  };
  return (
    <div>
      <FontAwesomeIcon icon={faPlusCircle} onClick={open} />

      <Modal
        open={modelOpen}
        onClose={close}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <h2 id="server-modal-title">Server-side modal</h2>
          <p id="server-modal-description">
            If you disable JavaScript, you will still see me.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Add;
