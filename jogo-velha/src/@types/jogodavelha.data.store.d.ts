declare namespace JogoDaVelhaDataStore {
  type State = {
    board: string[];
    currentPlayer: "X" | "O";
    winner: string;
  };
}
