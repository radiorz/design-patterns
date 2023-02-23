const colors = ["red", "green", "blue", "white", "black"];
type Color = typeof colors[number];

interface Shape {
  draw(): void;
}
class Circle implements Shape {
  private color: Color;
  private x: number | undefined = undefined;
  private y: number | undefined = undefined;
  private radius: number | undefined = undefined;
  constructor(color: Color) {
    this.color = color;
  }
  setX(x: number) {
    this.x = x;
    return this;
  }
  setY(y: number) {
    this.y = y;
    return this;
  }
  setRadius(radius: number) {
    this.radius = radius;
    return this;
  }
  draw(): void {
    console.log(
      `this.color,this.x,this.y,this.radius`,
      this.color,
      this.x,
      this.y,
      this.radius
    );
  }
}

class ShapeFactory {
  private static circleMap: Map<string, Shape> = new Map();
  static getCircle(color: Color): Shape {
    let circle = this.circleMap.get(color);
    if (!circle) {
      circle = new Circle(color);
      this.circleMap.set(color, circle);
      console.log(`color`, color);
    }
    return circle;
  }
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
function getRandomX() {
  return Math.floor(Math.random() * 100);
}
function getRandomY() {
  return Math.floor(Math.random() * 100);
}

for (let i = 0; i < 20; i++) {
  const circle = ShapeFactory.getCircle(getRandomColor()) as Circle;
  circle.setX(getRandomX()).setY(getRandomY()).setRadius(100).draw();
}
