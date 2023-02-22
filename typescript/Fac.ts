/**
 * @author
 * @file Fac.ts
 * @fileBase Fac
 * @path typescript\Fac.ts
 * @from 
 * @desc 简单工厂模式 主要是为了使用一个工厂生产不同的对象
 * 例子是通过一个 形状工厂生产不同的形状,包括圆,矩形,正方形等,最终绘制出来
 * @todo

 *
 * @done
 * @example
 */
interface Shape {
  draw(): void;
}
class Rectangle implements Shape {
  draw(): void {
    console.log("Rectangle");
  }
}
class Circle implements Shape {
  draw(): void {
    console.log("Circle");
  }
}
class Square implements Shape {
  draw(): void {
    console.log("Circle");
  }
}
// 用于生产 string 模式的 type
const TShapes = {
  Rectangle,
  Circle,
  Square,
};
type Shapes = keyof typeof TShapes;
class ShapeFactory {
  static getShape(type: Shapes): Shape {
    if (type === "Rectangle") {
      return new Rectangle();
    } else if (type === "Circle") {
      return new Square();
    } else {
      return new Circle();
    }
  }
}

const rectangle = ShapeFactory.getShape("Rectangle");
rectangle.draw();
