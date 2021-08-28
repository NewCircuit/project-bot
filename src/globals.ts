import { LogLevel } from '@sapphire/framework';
import { Logger } from '@sapphire/plugin-logger';
import { Config } from './config';

import { DbManager } from './database';

export const CONFIG = Config.getConfig();

export const DB = new DbManager(CONFIG);

export const LOGGER = new Logger({
  level: LogLevel.Info,
});
