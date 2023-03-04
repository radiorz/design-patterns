abstract class AbstractCustomer {
  protected name: string = "";
  abstract isNil(): boolean;
  abstract getName(): string;
}
class RealCustomer extends AbstractCustomer {
  isNil(): boolean {
    return false;
  }
  getName(): string {
    return this.name;
  }

  constructor(name: string) {
    super();
    this.name = name;
  }
}
class NullCustomer extends AbstractCustomer {
  getName(): string {
    return "Not Available in Customer Database";
  }
  isNil(): boolean {
    return true;
  }
}

class CustomerFactory {
  static names = ["Rob", "Joe", "Julie"];
  static getCustomer(name: string): AbstractCustomer {
    if (CustomerFactory.names.includes(name)) {
      return new RealCustomer(name);
    }
    return new NullCustomer();
  }
}
const customer = CustomerFactory.getCustomer('Rob')
const customer1 = CustomerFactory.getCustomer('Joe')
const customer2 = CustomerFactory.getCustomer('Julie')
const customer3 = CustomerFactory.getCustomer('laura')
const customer4 = CustomerFactory.getCustomer('null')

console.log(`customer.getName()`,customer.getName())
console.log(`customer.getName()`,customer4.getName())
console.log(`customer.getName()`,customer1.getName())
console.log(`customer.getName()`,customer2.getName())
console.log(`customer.getName()`,customer3.getName())
