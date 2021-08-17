import Conf from './conf';

/**
 * @class DBConfig
 * @property {string} host
 * @property {number} port
 * @property {string} user
 * @property {string} password
 * @property {string} database
 * @property {string} max
 */
export default class DBConfig extends Conf {
  public readonly host: string;

  public readonly port: number;

  public readonly user: string;

  public readonly password: string;

  public readonly database: string;

  public readonly max: number;

  constructor() {
    super('database');
    this.host = 'localhost';
    this.port = 5432;
    this.user = 'postgres';
    this.password = 'password';
    this.database = 'postgres';
    this.max = 20;
  }
}
