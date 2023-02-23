class Originator {
  public state: string = "";
  saveStateToMemento(): Memento {
    return new Memento(this.state);
  }
  getStateFromMemento(memento: Memento): void {
    this.state = memento.getState();
  }
}
class Memento {
  private state: string;
  getState(): string {
    return this.state;
  }
  constructor(state: string) {
    this.state = state;
  }
}

class CareTaker {
  mementoList: Memento[] = [];
  add(state: Memento): void {
    this.mementoList.push(state);
  }
  get(index: number): Memento {
    return this.mementoList[index];
  }
}
// 使用
const originator = new Originator();
const careTaker = new CareTaker();
originator.state = "state #1";
originator.state = "state #2";
careTaker.add(originator.saveStateToMemento());
originator.state = "state #3";
careTaker.add(originator.saveStateToMemento());
originator.state = "state #4";

console.log(`current`, originator.state);
originator.getStateFromMemento(careTaker.get(0));
console.log(`first memo `, originator.state);
originator.getStateFromMemento(careTaker.get(1));
console.log(`second memo`, originator.state);
