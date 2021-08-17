import Conf from './conf';

/**
 * @class BotConfig
 * @property {string} token
 * @property {string} prefix
 * @property {string[]} owners
 */
export default class BotConfig extends Conf {
  public readonly token: string;

  public readonly prefix: string;

  public readonly id: string;

  public readonly owners: string[];

  constructor() {
    super('bot');
    this.token = '';
    this.prefix = '!';
    this.id = '';
    this.owners = ['Owner ID 1', 'Owner ID 2'];
  }
}
