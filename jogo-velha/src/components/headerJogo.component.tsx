import React from "react";
import { useHookstate } from "@hookstate/core";
import { JogoDaVelhaDataStore } from "../hookstates/jogovelha.data.store";

export function HeaderJogo() {
  const { winner, currentPlayer } = useHookstate(JogoDaVelhaDataStore.state);

  return (
    <>
      <h1 className="title">Jogo da Velha</h1>
      <h4>
        {!winner.get()
          ? `É a vez do ${currentPlayer.get()}`
          : `Jogo finalizado!`}{" "}
      </h4>
    </>
  );
}
