/**
 * @author
 * @file builder.ts
 * @fileBase builder
 * @path typescript\builder.ts
 * @from 
 * @desc 
 * 适用 组合经常变化但基础元素固定的例子
 * 这个是麦当劳的例子(基础商品固定,但组合不固定)
 * @todo

 *
 * @done
 * @example
 */
interface Packing {}
// 一个商品
interface Item {
  name: string;
  packing: Packing;
  price: number;
}

class Burger implements Item {
  constructor(public name: string, public price: number) {}
  packing: Packing = new Wrapper();
}
class VegBurger extends Burger {
  constructor() {
    super("VegBurger", 10);
  }
}
class ChickenBurger extends Burger {
  constructor() {
    super("ChickenBurger", 11);
  }
}
class Drink implements Item {
  constructor(public name: string, public price: number) {}
  packing: Packing = new Bottle();
}
class Pepsi extends Drink {
  constructor() {
    super("PepsiDrink", 5);
  }
}
class Coke extends Burger {
  constructor() {
    super("Coke", 6);
  }
}
class Wrapper implements Packing {}
class Bottle implements Packing {}

class Meal {
  items: Item[] = [];
  addItem(item: Item): Meal {
    this.items.push(item);
    return this;
  }
  getCost(): number {
    return this.items
      .map((item) => item.price)
      .reduce((pre, current) => pre + current);
  }
  showItems(): Item[] {
    return this.items;
  }
}

class MealBuilder {
  static prepareVegMeal(): Meal {
    return new Meal().addItem(new VegBurger()).addItem(new Pepsi());
  }
  static prepareNonVegMeal(): Meal {
    return new Meal().addItem(new ChickenBurger()).addItem(new Coke());
  }
}

// 使用
const meal = MealBuilder.prepareVegMeal();
const price = meal.getCost();
const items = meal.showItems();
console.log(`price`, price);
console.log(`items`, items);

// logger 也可以这么干 提供一个一个实例

