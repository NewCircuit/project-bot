import Table from '../table';
import { DbManager } from '../index';

export default class WarningsTable extends Table {
  constructor(client: DbManager) {
    super('warnings', client);
  }
}
