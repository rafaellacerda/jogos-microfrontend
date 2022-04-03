import React from "react";
import { useHookstate } from "@hookstate/core";
import { JogoDaVelhaDataStore } from "../hookstates/jogovelha.data.store";
import { BoardItem } from "./boardItem.component";

export function MainBoard() {
  const { board, winner } = useHookstate(JogoDaVelhaDataStore.state);

  return (
    <>
      <div className={`board ${winner.get() ? "game-over" : ""}`}>
        <section></section>
        {board.get().map((item, index) => (
          <BoardItem key={index} posicaoJogada={index} item={item} />
        ))}
      </div>
    </>
  );
}
