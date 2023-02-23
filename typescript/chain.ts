enum LEVELS {
  INFO = 1,
  DEBUG,
  ERROR,
}
abstract class Logger {
  protected level: LEVELS = LEVELS.INFO;
  nextLogger: Logger | null = null;
  setNextLogger(nextLogger: Logger) {
    this.nextLogger = nextLogger;
    return this;
  }
  logMessage(level: LEVELS, message: string) {
    if (this.level <= level) {
      this.write(message);
    }
    if (!!this.nextLogger) {
      this.nextLogger.logMessage(level, message);
    }
  }
  protected abstract write(message: string): void;
}

class ConsoleLogger extends Logger {
  constructor(level: LEVELS) {
    super();
    this.level = level;
  }
  protected write(message: string) {
    console.log(`Standard Console::Logger`, message);
  }
}

class FileLogger extends Logger {
  constructor(level: LEVELS) {
    super();
    this.level = level;
  }
  protected write(message: string) {
    console.log(`File::Logger`, message);
  }
}
class ErrorLogger extends Logger {
  constructor(level: LEVELS) {
    super();
    this.level = level;
  }

  //  @Override
  protected write(message: string): void {
    console.log(`error File::Logger`, message);
  }
}

//
function getChainOfLoggers(): Logger {
  const errorLogger = new ErrorLogger(LEVELS.ERROR);
  const fileLogger = new FileLogger(LEVELS.DEBUG);
  const consoleLogger = new ConsoleLogger(LEVELS.INFO);
  return errorLogger.setNextLogger(fileLogger.setNextLogger(consoleLogger));
}
const loggerChain = getChainOfLoggers();
loggerChain.logMessage(LEVELS.INFO, "this is an information");
loggerChain.logMessage(LEVELS.DEBUG, "this is a debug level information");
loggerChain.logMessage(LEVELS.ERROR, "this is an error message");
