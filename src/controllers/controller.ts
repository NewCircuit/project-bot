import Bot from '../bot';

/**
 * A Controller instance is responsible more managing a certain type of entity
 * that may exist in the ecosystem
 * @property {string}  name
 * @property {Bot} bot
 */
export default class Controller {
  private readonly name: string;

  protected readonly bot: Bot;

  constructor(bot: Bot, name: string) {
    this.name = name;
    this.bot = bot;
  }
}
