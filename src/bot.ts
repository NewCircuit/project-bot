import { SapphireClient } from '@sapphire/framework';
import { CONFIG, LOGGER } from './globals';
import * as utils from './utils';

export const bot = new SapphireClient({
  logger: {
    instance: LOGGER,
  },
  defaultPrefix: CONFIG.bot.prefix,
  id: CONFIG.bot.id,
});

bot.once('ready', async () => {
  bot.logger.info(`${bot?.user?.username} is online!`);
});

bot.login(CONFIG.bot.token).catch((err) => {
  utils.getLoggerModule('login').error(err);
});
