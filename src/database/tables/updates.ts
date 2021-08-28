import Table from '../table';
import { DbManager } from '../index';

export default class UpdatesTable extends Table {
  constructor(client: DbManager) {
    super('updates', client);
  }
}
