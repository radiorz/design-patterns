interface ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor): void;
}

class Keyboard implements ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor): void {
    computerPartVisitor.visit(this);
  }
}
class Mouse implements ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor): void {
    computerPartVisitor.visit(this);
  }
}
class Monitor implements ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor): void {
    computerPartVisitor.visit(this);
  }
}

class Computer implements ComputerPart {
  parts: ComputerPart[] = [];
  constructor() {
    this.parts = [new Mouse(), new Keyboard(), new Monitor()];
  }
  accept(computerPartVisitor: ComputerPartVisitor): void {
    this.parts.forEach((part) => {
      part.accept(computerPartVisitor);
    });
    computerPartVisitor.visit(this);
  }
}
interface ComputerPartVisitor {
  visit(computer: Computer): any;
  visit(mouse: Mouse): any;
  visit(keyboard: Keyboard): any;
  visit(monitor: Monitor): any;
}
class ComputerPartDisplayVisitor implements ComputerPartVisitor {
  visit(computer: Computer):any;
  visit(mouse: Mouse):any;
  visit(keyboard: Keyboard):any;
  visit(monitor: Monitor):any;
  visit(thing: ComputerPart):any {
    if (thing instanceof Computer) {
      return console.log(`displaying computer`);
    }

    if (thing instanceof Mouse) {
      return console.log(`mouse`);
    }
    if (thing instanceof Keyboard) {
      return console.log(`keyboard`);
    }
    if (thing instanceof Monitor) {
      return console.log(`monitor`);
    }
  }
}

const computer = new Computer();
computer.accept(new ComputerPartDisplayVisitor());
