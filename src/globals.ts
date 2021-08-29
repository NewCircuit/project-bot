import { LogLevel } from '@sapphire/framework';
import { Config } from './config';

import { DbManager } from './database';
import BotLogger from './util/Logger';

export const CONFIG = Config.getConfig();

export const DB = new DbManager(CONFIG);

export const LOGGER = new BotLogger(CONFIG);
