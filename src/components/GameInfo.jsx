import React from "react";
import RestartModal from "./RestartModal";

//images
import iconX from "../assets/icon-x.svg";
import iconO from "../assets/icon-o.svg";

export function GameInfo({ nextValue, resetGame }) {
  return (
    <div className="game-info">
      <div className="icons">
        <img src={iconX} alt="X Icon" className="icon" />
        <img src={iconO} alt="O Icon" className="icon" />
      </div>
      <div className="status">{`${nextValue} TURN`}</div>
      <RestartModal resetGame={resetGame} />
    </div>
  );
}
