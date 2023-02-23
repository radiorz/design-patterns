/**
 * @author
 * @file interpreter.ts
 * @fileBase interpreter
 * @path typescript\interpreter.ts
 * @from 
 * @desc 解释是否一个句子中是否合法，或者包含
 * @todo

 *
 * @done
 * @example
 */
interface Expression {
  interpret(context: string): boolean;
}

class TerminalExpression implements Expression {
  private data: string;
  constructor(data: string) {
    this.data = data;
  }
  // override
  interpret(context: string): boolean {
    if (context.match(this.data)) {
      return true;
    }
    return false;
  }
}

class OrExpression implements Expression {
  private expressions: [Expression | null, Expression | null] = [null, null];
  constructor(one: Expression, two: Expression) {
    this.expressions = [one, two];
  }
  interpret(context: string): boolean {
    return (
      (this.expressions[0] as Expression).interpret(context) ||
      (this.expressions[1] as Expression).interpret(context)
    );
  }
}

class AndExpression implements Expression {
  private expr1: Expression | null = null;
  private expr2: Expression | null = null;

  public constructor(expr1: Expression, expr2: Expression) {
    this.expr1 = expr1;
    this.expr2 = expr2;
  }

  //  @Override
  public interpret(context: string): boolean {
    return (
      (this.expr1 as Expression).interpret(context) &&
      (this.expr2 as Expression).interpret(context)
    );
  }
}
function getMaleExpression(): Expression {
  const robert = new TerminalExpression("robert");
  const john = new TerminalExpression("John");
  return new AndExpression(robert, john);
}

function getMarriedWomanExpression(): Expression {
  const julie: Expression = new TerminalExpression("Julie");
  const married: Expression = new TerminalExpression("Married");
  return new AndExpression(julie, married);
}

const isMale = getMaleExpression();
const isMarriedWoman = getMarriedWomanExpression();

console.log(`isMale.interpret('John')`, isMale.interpret("John"));
console.log(
  `isMarriedWoman.interpret("Married Julie")`,
  isMarriedWoman.interpret("Married Julie")
);
