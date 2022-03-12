import { useLocalStorageState } from "../utils/useLocalStorageState";

//game calculations
import {
  calculateWinner,
  calculateStatus,
  calculateNextValue,
} from "../utils/gameCalculations";

//components
import { Board } from "../components/Board";
import RestartModal from "./RestartModal";

//images
import iconX from "../assets/icon-x.svg";
import iconO from "../assets/icon-o.svg";

function Game() {
  const [history, setHistory] = useLocalStorageState("tic-tac-toe:history", [
    Array(9).fill(null),
  ]);
  const [currentStep, setCurrentStep] = useLocalStorageState(
    "tic-tac-toe:step",
    0
  );

  const currentSquares = history[currentStep];
  const winner = calculateWinner(currentSquares);
  const nextValue = calculateNextValue(currentSquares);
  const status = calculateStatus(winner, currentSquares, nextValue);

  function selectSquare(square) {
    if (winner || currentSquares[square]) {
      return;
    }

    const newHistory = history.slice(0, currentStep + 1);
    const squares = [...currentSquares];

    squares[square] = nextValue;
    setHistory([...newHistory, squares]);
    setCurrentStep(newHistory.length);
  }

  function restart() {
    setHistory([Array(9).fill(null)]);
    setCurrentStep(0);
  }

  // const moves = history.map((stepSquares, step) => {
  //   const desc = step ? `Go to move #${step}` : "Go to game start";
  //   const isCurrentStep = step === currentStep;
  //   return (
  //     <li key={step}>
  //       <button disabled={isCurrentStep} onClick={() => setCurrentStep(step)}>
  //         {desc} {isCurrentStep ? "(current)" : null}
  //       </button>
  //     </li>
  //   );
  // });

  return (
    <div className="game">
      <div className="game-board">
        <div className="game-info">
          <div className="icons">
            <img src={iconX} alt="" className="icon" />
            <img src={iconO} alt="" className="icon" />
          </div>
          <div className="status">{status}</div>
          <RestartModal restart={restart} />
        </div>
        <Board
          onClick={selectSquare}
          squares={currentSquares}
          next={nextValue}
        />
        <div className="results"></div>
      </div>
    </div>
  );
}

export { Game };
