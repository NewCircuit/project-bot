import { DbManager } from './index';

export default class Table {
  public readonly name: string;

  public readonly full: string;

  public readonly client: DbManager;

  constructor(name: string, client: DbManager) {
    this.client = client;
    this.name = name;
    this.full = `project_bot.${this.name}`;
  }
}
