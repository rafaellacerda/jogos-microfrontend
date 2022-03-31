import React, { useState, useEffect } from "react";
import "./index.css";

export function JogoVelha() {
  
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {
    if (winner || board[index] !== "") return;

    setBoard(
      board.map((item, itemIndex) =>
        itemIndex === index ? currentPlayer : item
      )
    );

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = () => {
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[6], board[4], board[2]],
      [board[0], board[4], board[8]],
    ];

    let isWinner = null;

    possibleWaysToWin.forEach((cells) => {
      if (cells.every((cell) => cell === "X")) {
        setWinner("X");
        isWinner = "X";
      }
      if (cells.every((cell) => cell === "O")) {
        setWinner("O");
        isWinner = "O";
      }
    });

    if (!isWinner) checkDraw();
  };

  const checkDraw = () => {
    if (board.every((cell) => cell !== "")) setWinner("E");
  };

  const resetGame = () => {
    setCurrentPlayer("X");
    setBoard(emptyBoard);
    setWinner(null);
  };

  useEffect(checkWinner, [board]);

  return (
    <main>
      <h1 className="title">Jogo da Velha</h1>

      <div className={`board ${winner ? "game-over" : ""}`}>
        {board.map((item, index) => (
          <div
            key={index}
            className={`cell ${item}`}
            onClick={() => handleCellClick(index)}
          >
            {item}
          </div>
        ))}
      </div>

      {winner && (
        <>
          <footer>
            <h2 className="winner-message">
              <span className={winner}>{winner}</span> venceu!
            </h2>
          </footer>

          <button onClick={() => resetGame()}>Recomeçar jogo!</button>
        </>
      )}
    </main>
  );
}
