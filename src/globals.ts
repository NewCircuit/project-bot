import { LogLevel } from '@sapphire/framework';
import { Logger } from '@sapphire/plugin-logger';
import { Config } from './config';

import { Db } from './database';

export const CONFIG = Config.getConfig();

export const DB = new Db(CONFIG);

export const LOGGER = new Logger({
  level: LogLevel.Info,
});
