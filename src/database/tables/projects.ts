import Table from '../table';
import { DbManager } from '../index';

export default class ProjectsTable extends Table {
  constructor(client: DbManager) {
    super('projects', client);
  }
}
