import "./index.css";
import React from "react";
import { HeaderJogo } from "../components/headerJogo.component";
import { FooterJogo } from "../components/footerJogo.component";
import { MainBoard } from "../components/mainBoard.component";

export function JogoVelha() {
  return (
    <main>
      <HeaderJogo />
      <MainBoard />
      <FooterJogo />
    </main>
  );
}
