import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [turn, setTurn] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [outputText, setOutputText] = useState("");

  const dummyValues = [
    { value: "", classes: "bt-0 bl-0" },
    { value: "", classes: "bt-0" },
    { value: "", classes: "bt-0 br-0" },
    { value: "", classes: "bl-0" },
    { value: "", classes: "" },
    { value: "", classes: "br-0" },
    { value: "", classes: "bb-0 bl-0" },
    { value: "", classes: "bb-0" },
    { value: "", classes: "bb-0 br-0" },
  ];

  const winPossiblity = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [textValues, setTextValues] = useState(dummyValues);

  const changeTurn = () => {
    return turn === "X" ? setTurn("0") : setTurn("X");
  };

  const checkWin = () => {
    winPossiblity.map((winArray) => {
      const firstValue = textValues[winArray[0]].value;
      const secondValue = textValues[winArray[1]].value;
      const thirdValue = textValues[winArray[2]].value;
      console.log(firstValue, secondValue, thirdValue);
      if (
        firstValue === secondValue &&
        firstValue === thirdValue &&
        firstValue !== "" &&
        secondValue !== "" &&
        thirdValue !== ""
      ) {
        setGameOver(true);
        setOutputText(
          `${
            firstValue === "X"
              ? "Hurray !! You won :) "
              : "Sorry , 0 won you lose :("
          }`
        );
      }
    });
  };

  const boxOnClick = (index) => {
    if (!gameOver) {
      const updatedValues = textValues;

      if (updatedValues[index].value === "") {
        updatedValues[index] = { ...updatedValues[index], value: turn };
        setTextValues(updatedValues);
        changeTurn();
        checkWin();
      }
    } else {
      alert("Game over !! reset the game");
    }
  };

  const reset = () => {
    setTextValues(dummyValues);
    setOutputText("");
    setGameOver(false);
  };

  return (
    <div className="app">
      <div className="navbar">
        <h2>Krishna's TicTacToe </h2>
      </div>
      <div className="container">
        <div className="game">
          {textValues.map((box, index) => {
            return (
              <div
                className={`box ${box.classes}`}
                key={box.classes}
                onClick={() => boxOnClick(index)}
              >
                <span className="boxtext">{box.value}</span>
              </div>
            );
          })}
        </div>
        <div className="info">
          <div className="turn">
            <div>
              {gameOver ? (
                "Game over !! reset the game"
              ) : (
                <span>
                  Turn for <b>{turn}</b>
                </span>
              )}
            </div>{" "}
            <h3>{outputText}</h3>
          </div>
          <div className="btn">
            <button id="reset" onClick={reset}>
              Reset
            </button>
          </div>
          <div className="img">
            <img
              src="https://c.tenor.com/oQ_6wxtMrx0AAAAi/pentol-quby.gif"
              alt="excited"
              style={{ width: `${gameOver ? "300px" : "0"}` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
