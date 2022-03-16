import React from "react";

import iconX from "../assets/icon-x.svg";

import iconO from "../assets/icon-o.svg";

export function Board({ squares, onClick, next }) {
  function renderSquare(i) {
    const hoverIconClass = next === "X" ? "x-class" : "o-class";

    const isIcon =
      squares[i] === "X" ? (
        <img src={iconX} alt="X" style={{ height: "77%" }} />
      ) : (
        <img src={iconO} alt="O" style={{ height: "77%" }} />
      );
    return (
      <button
        className={`square ${!squares[i] && hoverIconClass}`}
        onClick={() => onClick(i)}
      >
        {squares[i] && isIcon}
      </button>
    );
  }

  return (
    <>
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
    </>
  );
}
