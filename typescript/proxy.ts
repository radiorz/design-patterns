interface Image {
  display(): void;
}
class RealImage implements Image {
  private fileName: string | undefined = undefined;
  constructor(fileName: string) {
    this.fileName = fileName;
    this.loadFromDisk(fileName);
  }
  // @override
  display() {
    console.log(`fileName`, this.fileName);
  }
  private loadFromDisk(fileName: string): void {
    console.log(`loading`, fileName);
  }
}

class ProxyImage implements Image {
  private realImage: RealImage | undefined = undefined;
  private fileName;
  constructor(fileName: string) {
    this.fileName = fileName;
  }
  display(): void {
    if (!this.realImage) {
      this.realImage = new RealImage(this.fileName);
    }
    this.realImage.display();
  }
}
//
let image = new ProxyImage("test.jpg");
image.display();
console.log(`111`, 111);
image.display();
