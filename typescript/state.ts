interface State {
  doAction(context: Context): void;
}
class StartState implements State {
  doAction(context: Context): void {
    console.log(`player is in start state`);
    context.state = this;
  }
  toString() {
    return "start state";
  }
}
class StopState implements State {
  doAction(context: Context): void {
    console.log(`player is in stop state`);
    context.state = this;
  }
  toString() {
    return "stop state";
  }
}

class Context {
  state: State | null = null;
  constructor(state: State | null) {
    this.state = state;
  }
}
const context = new Context(null);
const startState = new StartState();

startState.doAction(context);
console.log(`context.state.toString()`, (context.state as State).toString());
const stopState = new StopState();
stopState.doAction(context);
console.log(`context.state.toString()`, (context.state as State).toString());

