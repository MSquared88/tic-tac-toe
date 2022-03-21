import React from "react";
export function Results({ scoreboard }) {
  return (
    <div className="results">
      {Object.keys(scoreboard).map((key) => (
        <div className="result" key={key}>
          <p>{key}</p>
          <p
            style={{
              fontWeight: "700",
            }}
          >
            {scoreboard[key]}
          </p>
        </div>
      ))}
    </div>
  );
}
