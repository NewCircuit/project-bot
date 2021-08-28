import { SapphireClient } from '@sapphire/framework';
import { CONFIG, LOGGER } from './globals';

import '@sapphire/plugin-logger/register';
import '@sapphire/plugin-editable-commands/register';
import UsersController from './controllers/users';
import ProjectsController from './controllers/projects';

export default class Bot extends SapphireClient {
  // user and users are already used by {SapphireClient}
  public readonly usersController: UsersController;

  public readonly projects: ProjectsController;

  private static bot: Bot;

  constructor() {
    super({
      intents: [
        'GUILDS',
        'GUILD_MEMBERS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'DIRECT_MESSAGES',
      ],
      caseInsensitiveCommands: true,
      logger: {
        instance: LOGGER,
      },
      defaultPrefix: CONFIG.bot.prefix,
      id: CONFIG.bot.id,
    });

    this.usersController = new UsersController(this);
    this.projects = new ProjectsController(this);

    Bot.bot = this;
  }

  /**
   * This method must be called before anything else
   * @returns {Promise<void>}
   */
  public async start(): Promise<void> {
    await this.login(CONFIG.bot.token);
  }

  /**
   * Get the instance of bot
   * @returns {Bot}
   */
  public static getBot(): Bot {
    if (Bot.bot !== null) {
      return Bot.bot;
    }
    throw new Error('getBot was called before initializing Bot.');
  }
}
