import { ResultModal } from "./ResultModal";
import { Results } from "./Results";
import { GameInfo } from "./GameInfo";
import * as React from "react";
import { useLocalStorageState } from "../utils/useLocalStorageState";

//game calculations
import {
  calculateWinner,
  calculateStatus,
  calculateNextValue,
} from "../utils/gameCalculations";

//components
import { Board } from "../components/Board";

const initialScoreboard = {
  X: 0,
  TIES: 0,
  O: 0,
};

function Game() {
  const [history, setHistory] = useLocalStorageState("tic-tac-toe:history", [
    Array(9).fill(null),
  ]);
  const [currentStep, setCurrentStep] = useLocalStorageState(
    "tic-tac-toe:step",
    0
  );

  const [scoreboard, setScoreboard] = useLocalStorageState(
    "score-board",
    initialScoreboard
  );

  function handleScore(result) {
    switch (result) {
      case "X":
        setScoreboard({ ...scoreboard, X: scoreboard["X"] + 1 });
        break;
      case "O":
        setScoreboard({ ...scoreboard, O: scoreboard["O"] + 1 });
        break;
      case "TIE":
        setScoreboard({ ...scoreboard, TIES: scoreboard["TIES"] + 1 });
        break;
      default:
        break;
    }
  }

  const currentSquares = history[currentStep];
  const winner = calculateWinner(currentSquares);
  const nextValue = calculateNextValue(currentSquares);
  const status = calculateStatus(winner, currentSquares);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (status) {
      handleOpen();
    }
  }, [status]);

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
    handleScore(status);
    setCurrentStep(0);
  }

  function resetGame() {
    restart();
    setScoreboard(initialScoreboard);
  }

  return (
    <div className="game-board">
      <ResultModal
        open={open}
        handleClose={handleClose}
        result={status}
        restart={restart}
        resetGame={resetGame}
      />
      <GameInfo nextValue={nextValue} resetGame={resetGame} />
      <Board onClick={selectSquare} squares={currentSquares} next={nextValue} />
      <Results scoreboard={scoreboard} />
    </div>
  );
}

export { Game };
