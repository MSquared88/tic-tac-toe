import * as React from "react";
import Modal from "@mui/material/Modal";

import restartImg from "../assets/icon-restart.svg";

export default function BasicModal({ restart }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="restart-modal-btn" onClick={handleOpen}>
        <img src={restartImg} alt="restart button" />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="restart-modal">
          <button
            onClick={() => {
              restart();
              handleClose();
            }}
          >
            restart
          </button>
        </div>
      </Modal>
    </div>
  );
}
