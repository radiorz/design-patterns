interface Shape {
  draw(): void;
}
class Circle implements Shape {
  draw(): void {
    console.log("Sahpe: circle");
  }
}
class Rectangle implements Shape {
  draw(): void {
    console.log("Sahpe: Rectangle");
  }
}

abstract class ShapeDecorator implements Shape {
  protected decoratedShape: Shape;
  constructor(decoratedShape: Shape) {
    this.decoratedShape = decoratedShape;
  }
  draw(): void {
    this.decoratedShape.draw();
  }
}
class RedShapeDecorator extends ShapeDecorator {
  constructor(decoratedShape: Shape) {
    super(decoratedShape);
  }
  draw() {
    this.decoratedShape.draw();
    this.setRedBorder(this.decoratedShape);
  }
  setRedBorder(decoratedShape: Shape) {
    console.log("Border color:red");
  }
}

// 使用
const circle = new Circle();
const redCircle = new RedShapeDecorator(new Circle());
const redRectangle = new RedShapeDecorator(new Rectangle());
circle.draw();
redCircle.draw();
redRectangle.draw();
