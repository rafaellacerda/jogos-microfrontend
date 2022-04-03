import React from "react";
import { useHookstate } from "@hookstate/core";
import { JogoDaVelhaDataStore } from "../hookstates/jogovelha.data.store";

export function BoardItem({ item, posicaoJogada }) {
  const { board, winner } = useHookstate(JogoDaVelhaDataStore.state);

  const handleCellClick = (posicaoJogada) => {
    if (winner.get() || (board.get() as any)[posicaoJogada] !== "") return;

    JogoDaVelhaDataStore.clickItem(posicaoJogada);
  };

  return (
    <div
      key={`item-${posicaoJogada}`}
      className={`cell ${item}`}
      onClick={() => handleCellClick(posicaoJogada)}
    >
      {item}
    </div>
  );
}
