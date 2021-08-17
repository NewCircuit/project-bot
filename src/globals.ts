import { Logger, LogLevel } from '@sapphire/framework';
import { Config } from './config';

import { Db } from './database';

export const CONFIG = Config.getConfig();

export const DB = new Db(CONFIG);

export const LOGGER = new Logger(LogLevel.Info);
