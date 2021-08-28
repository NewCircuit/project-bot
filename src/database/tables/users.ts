import Table from '../table';
import { DbManager } from '../index';

export default class UsersTable extends Table {
  constructor(client: DbManager) {
    super('users', client);
  }
}
