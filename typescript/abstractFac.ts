/**
 * @author
 * @file abstractFac.ts
 * @fileBase abstractFac
 * @path typescript\abstractFac.ts
 * @from 
 * @desc 抽象工厂模式就是可以管理多个简单的工厂模式
 * @todo

 *
 * @done
 * @example
 */
interface Button {}
interface Border {}

class MacButton implements Button {}
class MacBorder implements Border {}

class WinButton implements Button {}
class WinBorder implements Border {}

interface Factory {
  createButton(): Button;
  createBorder(): Border;
}
class MacFactory implements Factory {
  createButton(): Button {
    return new MacButton();
  }
  createBorder(): Border {
    return new MacBorder();
  }
}
class WinFactory implements Factory {
  createButton(): Button {
    return new WinButton();
  }
  createBorder(): Border {
    return new WinBorder();
  }
}
type Factories = "Win" | "Mac";
// 超级工厂
class FactoryProducer {
  static getFactory(type: Factories): Factory {
    if (type === "Win") {
      return new WinFactory();
    } else {
      return new MacFactory();
    }
  }
}

// 使用
const factory = FactoryProducer.getFactory("Mac");

const button = factory.createButton();
console.log(`button`, button);
