import React from "react";
import { useHookstate } from "@hookstate/core";
import { JogoDaVelhaDataStore } from "../hookstates/jogovelha.data.store";

export function FooterJogo() {
  const { winner } = useHookstate(JogoDaVelhaDataStore.state);

  const obterMensagemFinalDeJogo = () => {
    if (winner.get() === "X" || winner.get() === "O") {
      return (
        <>
          <span className={winner.get()}>{winner.get()}</span> venceu!
        </>
      );
    }

    if (winner.get() === "E") {
      return <span className={winner.get()}>Deu Empate!</span>;
    }
  };

  return (
    <>
      {winner.get() && (
        <>
          <footer>
            <h2 className="winner-message">{obterMensagemFinalDeJogo()}</h2>
          </footer>

          <button onClick={() => JogoDaVelhaDataStore.resetGame()}>
            Recomeçar jogo!
          </button>
        </>
      )}
    </>
  );
}
