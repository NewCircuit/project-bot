import { SapphireClient } from '@sapphire/framework';
import { CONFIG, LOGGER } from './globals';

import '@sapphire/plugin-logger/register';
import '@sapphire/plugin-editable-commands/register';

export default class Bot extends SapphireClient {
  constructor() {
    super({
      intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGES'],
      caseInsensitiveCommands: true,
      logger: {
        instance: LOGGER,
      },
      defaultPrefix: CONFIG.bot.prefix,
      id: CONFIG.bot.id,
    });
  }

  /**
   * This method must be called before anything else
   * @returns {Promise<void>}
   */
  public async start(): Promise<void> {
    await this.login(CONFIG.bot.token);
  }
}
