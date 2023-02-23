interface Order {
  execute(): void;
}
// 库存;
class Stock {
  private name: string = "ABC";
  private quantity: number = 10;
  buy(): void {
    console.log(`bought this.name,this.quantity`, this.name, this.quantity);
  }
  sell(): void {
    console.log(`sold this.name,this.quantity`, this.name, this.quantity);
  }
}

class BuyStock implements Order {
  private abcStock: Stock | null = null;
  constructor(abcStock: Stock) {
    this.abcStock = abcStock;
  }
  execute(): void {
    this.abcStock?.buy();
  }
}
class SellStock implements Order {
  private abcStock: Stock | null = null;
  constructor(abcStock: Stock) {
    this.abcStock = abcStock;
  }
  execute(): void {
    this.abcStock?.sell();
  }
}
// 命令调用类
class Broker {
  orders: Order[] = [];
  // 添加
  takeOrder(order: Order): void {
    this.orders.push(order);
  }
  // 实施
  placeOrders(): void {
    this.orders.forEach((order) => {
      order.execute();
    });
    this.orders = [];
  }
}
const abcStock = new Stock();
const buyStockOrder = new BuyStock(abcStock);
const sellStockOrder = new SellStock(abcStock);

const broker = new Broker();
broker.takeOrder(buyStockOrder);
broker.takeOrder(sellStockOrder);
broker.placeOrders();
