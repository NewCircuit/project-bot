import { Logger } from '@sapphire/plugin-logger';
import { LogLevel } from '@sapphire/framework';
import { Config } from '../config';

export default class BotLogger extends Logger {
  static level: LogLevel;

  constructor(config: Config) {
    BotLogger.fromString(config.logLevel);
    super({
      level: BotLogger.level,
    });
  }

  private static fromString(s: string) {
    switch (s) {
      case 'TRACE':
        BotLogger.level = LogLevel.Trace;
        break;
      case 'DEBUG':
        BotLogger.level = LogLevel.Debug;
        break;
      case 'INFO':
        BotLogger.level = LogLevel.Info;
        break;
      case 'WARN':
        BotLogger.level = LogLevel.Info;
        break;
      case 'ERROR':
        BotLogger.level = LogLevel.Error;
        break;
      case 'FATAL':
        BotLogger.level = LogLevel.Fatal;
        break;
      default:
        BotLogger.level = LogLevel.None;
        break;
    }
  }
}
