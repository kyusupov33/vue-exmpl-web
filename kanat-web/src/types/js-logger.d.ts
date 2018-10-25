interface ILogLevel extends Object {
  value: number;
  name: string;
}

interface IContext extends Object {
  level: ILogLevel;
  name?: string;
}

interface ILoggerOpts extends Object {
  logLevel?: ILogLevel;
  formatter: (messages: any[], context: IContext) => void;
}

interface ILogger {
  DEBUG: ILogLevel;
  INFO: ILogLevel;
  TIME: ILogLevel;
  WARN: ILogLevel;
  ERROR: ILogLevel;
  OFF: ILogLevel;

  debug(...x: any[]): void;
  info(...x: any[]): void;
  log(...x: any[]): void;
  warn(...x: any[]): void;
  error(...x: any[]): void;

  useDefaults(options?: ILoggerOpts): void;

  setLevel(level: ILogLevel): void;

  setHandler(logHandler: (messages: any[], context: IContext) => void): void;

  get(name: string): ILogger;
  time(label: string): void;
  timeEnd(label: string): void;
}
