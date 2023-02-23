interface TheIterator<T> {
  hasNext(): boolean;
  next(): T | null;
}

interface Container {
  getIterator(): TheIterator<string>;
}
class NameIterator implements TheIterator<string> {
  index: number = 0;
  constructor(public names: string[]) {}
  hasNext(): boolean {
    return this.index < this.names.length;
  }
  next(): string | null {
    if (this.hasNext()) {
      return this.names[this.index++];
    }
    return null;
  }
}
class NameRepository implements Container {
  names: string[] = ["Robert", "John", "Julie", "Lora"];
  getIterator(): TheIterator<string> {
    return new NameIterator(this.names);
  }
}

//
const namesRepository = new NameRepository();
const iter = namesRepository.getIterator();
while (iter.hasNext()) {
  console.log(iter.next());
}
