import React from "react";

import iconX from "../assets/icon-x.svg";
import xOutline from "../assets/icon-x-outline.svg";

import iconO from "../assets/icon-o.svg";
import oOutline from "../assets/icon-o-outline.svg";

export function Board({ squares, onClick, next }) {
  function renderSquare(i) {
    const hoverIconUrl = next === "X" ? xOutline : oOutline;

    const isIcon =
      squares[i] === "X" ? (
        <img src={iconX} alt="X" />
      ) : (
        <img src={iconO} alt="O" />
      );
    return (
      <button className="square" onClick={() => onClick(i)}>
        {squares[i] && isIcon}
      </button>
    );
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
