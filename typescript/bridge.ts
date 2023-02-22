/**
 * @author
 * @file bridge.ts
 * @fileBase bridge
 * @path typescript\bridge.ts
 * @from 
 * @desc bridge 模式可以减少创建实体类
 * 将部分特性抽离到抽象部分(传参进入),使用抽象的部分实现不同的特性
 * @todo

 *
 * @done
 * @example
 */
interface DrawAPI {
  drawCircle(radius: number, x: number, y: number): void;
}

class RedCircle implements DrawAPI {
  // @override
  drawCircle(radius: number, x: number, y: number): void {
    console.log(`red radius,x, y`, radius, x, y);
  }
}
class GreenCircle implements DrawAPI {
  // @override
  drawCircle(radius: number, x: number, y: number): void {
    console.log(`green radius,x, y`, radius, x, y);
  }
}
abstract class Shape {
  protected drawApi: DrawAPI;
  protected constructor(drawApi: DrawAPI) {
    this.drawApi = drawApi;
  }
  abstract draw(): void;
}
class Circle extends Shape {
  private x: number;
  private y: number;
  private radius: number;
  constructor(x: number, y: number, radius: number, drawApi: DrawAPI) {
    super(drawApi);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw(): void {
    this.drawApi.drawCircle(this.radius, this.x, this.y);
  }
}

const redCircle = new Circle(100, 100, 10, new RedCircle());
const greenCircle = new Circle(100, 100, 10, new GreenCircle());
redCircle.draw();
greenCircle.draw();
