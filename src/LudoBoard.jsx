import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });
  let updateBlue = () => {
    setMoves((prevMoves) => {
      return { ...moves, blue: moves.blue + 1 };
    });
  };
  let updateRed = () => {
    setMoves((prevMoves) => {
      return { ...moves, red: moves.red + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((prevMoves) => {
      return { ...moves, green: moves.green + 1 };
    });
  };
  let updateYellow = () => {
    setMoves((prevMoves) => {
      return { ...moves, yellow: moves.yellow + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins!</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
      </div>
    </div>
  );
}
