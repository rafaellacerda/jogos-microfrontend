import { State, createState } from "@hookstate/core";
import clone from "clone";

export abstract class BaseStore<TState extends {}> {
  private _initialState: TState;
  public state: State<TState>;

  constructor(state: TState) {
    this._initialState = clone(state);
    this.state = createState(state);
  }

  // Sem a necessidade de setters de abstração.
  // 'this.state.set(...)' out of the box! S2

  public resetState(): void {
    this.state.set(clone(this._initialState));
  }
}
