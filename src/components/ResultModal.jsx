import React from "react";
import Modal from "@mui/material/Modal";

//images
import iconX from "../assets/icon-x.svg";
import iconO from "../assets/icon-o.svg";

export function ResultModal({ open, handleClose, result, restart, resetGame }) {
  switch (result) {
    case "X":
      return (
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal-container">
            <div className="modal-content">
              <p className="modal-title">PLAYER 1 WINS!</p>
              <h1 className="modal-result-title text-light-blue">
                <img src={iconX} alt="X Icon" className="icon" />
                TAKES THE ROUND
              </h1>
              <div className="modal-button-container">
                <button
                  className="modal-btn modal-btn-cancel"
                  onClick={() => {
                    handleClose();
                    resetGame();
                  }}
                >
                  QUIT
                </button>
                <button
                  className="modal-btn modal-btn-blue"
                  onClick={() => {
                    handleClose();
                    restart();
                  }}
                >
                  NEXT ROUND
                </button>
              </div>
            </div>
          </div>
        </Modal>
      );
    case "O":
      return (
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal-container">
            <div className="modal-content">
              <p className="modal-title">PLAYER 2 WINS!</p>
              <h1 className="modal-result-title text-light-yellow">
                <img src={iconO} alt="O Icon" className="icon" />
                TAKES THE ROUND
              </h1>
              <div className="modal-button-container">
                <button
                  className="modal-btn modal-btn-cancel"
                  onClick={() => {
                    handleClose();
                    resetGame();
                  }}
                >
                  QUIT
                </button>
                <button
                  className="modal-btn text-light-blue"
                  onClick={() => {
                    handleClose();
                    restart();
                  }}
                >
                  NEXT ROUND
                </button>
              </div>
            </div>
          </div>
        </Modal>
      );

    case "TIE":
      return (
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal-container">
            <div className="modal-content">
              <h1 className="modal-title">ROUND TIED</h1>

              <div className="modal-button-container">
                <button
                  className="modal-btn modal-btn-cancel"
                  onClick={() => {
                    handleClose();
                    resetGame();
                  }}
                >
                  QUIT
                </button>
                <button
                  className="modal-btn modal-btn-yellow"
                  onClick={() => {
                    handleClose();
                    restart();
                  }}
                >
                  NEXT ROUND
                </button>
              </div>
            </div>
          </div>
        </Modal>
      );

    default:
      return open;
  }
}
