interface Shape {
  draw(): void;
}
class Circle implements Shape {
  draw(): void {
    console.log(`"Circle::draw()"`);
  }
}
class Rectangle implements Shape {
  draw(): void {
    console.log(`"Rectangle::draw()")`);
  }
}
class Square implements Shape {
  draw(): void {
    console.log(`"Square::draw()"`);
  }
}
class ShapeMaker {
  private circle: Shape = new Circle();
  private rectangle: Shape = new Rectangle();
  private square: Shape = new Square();
  constructor() {}
  drawCircle(): void {
    this.circle.draw();
  }
  drawRectangle(): void {
    this.rectangle.draw();
  }
  drawSquare(): void {
    this.square.draw();
  }
}
const shapeMaker = new ShapeMaker();
shapeMaker.drawCircle();
shapeMaker.drawRectangle();
shapeMaker.drawSquare();
