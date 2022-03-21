import * as React from "react";
import Modal from "@mui/material/Modal";

import restartImg from "../assets/icon-restart.svg";

export default function BasicModal({ restart }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button className="restart-modal-btn" onClick={handleOpen}>
        <img src={restartImg} alt="restart button" />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-container">
          <div className="modal-content">
            <h1 className="modal-title">RESTART GAME?</h1>
            <div className="modal-button-container">
              <button
                className="modal-btn modal-btn-cancel"
                onClick={handleClose}
              >
                NO, CANCEL
              </button>
              <button
                className="modal-btn modal-btn-yellow"
                onClick={() => {
                  restart();
                  handleClose();
                }}
              >
                YES, RESTART
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
