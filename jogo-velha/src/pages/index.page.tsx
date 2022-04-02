import "./index.css";
import React from "react";
import { useHookstate } from "@hookstate/core";
import { JogoDaVelhaDataStore } from "../hookstates/jogovelha.data.store";

export function JogoVelha() {
  const { board, winner, currentPlayer } = useHookstate(
    JogoDaVelhaDataStore.state
  );


  const handleCellClick = (index) => {
    if (winner.get() || (board.get() as any)[index] !== "") return;
    JogoDaVelhaDataStore.clickItem(index);
  };


  return (
    <main>
      <h1 className="title">Jogo da Velha</h1>
      <h2>É a vez do: {currentPlayer.get()}</h2>
      <div className={`board ${winner.get() ? "game-over" : ""}`}>
        <section></section>
        {board.get().map((item, index) => (
          <div
            key={index}
            className={`cell ${item}`}
            onClick={() => handleCellClick(index)}
          >
            {item}
          </div>
        ))}
      </div>

      {winner.get() && (
        <>
          <footer>
            <h2 className="winner-message">
              <span className={winner.get()}>{winner.get()}</span> venceu!
            </h2>
          </footer>

          <button onClick={() => JogoDaVelhaDataStore.resetGame()}>
            Recomeçar jogo!
          </button>
        </>
      )}
    </main>
  );
}
