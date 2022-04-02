import { BaseStore } from "../stores/base.store";

class Store extends BaseStore<JogoDaVelhaDataStore.State> {
  constructor() {
    super({
      board: Array(9).fill(""),
      currentPlayer: "X",
      winner: null,
    });
  }

  private getPossibleWaysToWin() {
    const items = this.state.board.get();

    return [
      [items[0], items[1], items[2]],
      [items[3], items[4], items[5]],
      [items[6], items[7], items[8]],

      [items[0], items[3], items[6]],
      [items[1], items[4], items[7]],
      [items[2], items[5], items[8]],

      [items[6], items[4], items[2]],
      [items[0], items[4], items[8]],
    ];
  }

  public clickItem(index) {
    const { board } = this.state;

    const newBoard = board.value.map((item, itemIndex) =>
      itemIndex === index ? this.state.currentPlayer.get() : item
    );

    this.state.board.set(newBoard);

    this.setNextPlayer();
    this.checkWinner();
  }

  private setNextPlayer() {
    const nextPlayer =
      (this.state.currentPlayer.get() as any) === "X" ? "O" : "X";
    this.state.currentPlayer.set(nextPlayer);
  }

  private checkWinner() {
    const possibleWaysToWin = this.getPossibleWaysToWin();

    possibleWaysToWin.forEach((cells) => {
      if (cells.every((cell: any) => cell === "X")) this.state.winner.set("X");
      if (cells.every((cell: any) => cell === "O")) this.state.winner.set("O");
    });

    if (!this.state.winner.get()) this.checkDraw();
  }

  private checkDraw() {
    const board = this.state.board.get();

    if (board.every((cell: any) => cell !== "")) this.state.winner.set("E");
  }

  public resetGame() {
    this.state.currentPlayer.set("X");
    this.state.board.set(Array(9).fill(""));
    this.state.winner.set(null);
  }
}

export const JogoDaVelhaDataStore = new Store();
