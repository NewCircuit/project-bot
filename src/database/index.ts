import { Pool } from 'pg';
import { migrate } from 'postgres-migrations';
import { Config } from '../config';
import { LOGGER } from '../globals';

import InactiveTable from './tables/inactive';
import ProjectsTable from './tables/projects';
import UpdatesTable from './tables/updates';
import UsersTable from './tables/users';
import WarningsTable from './tables/warnings';

export class DbManager extends Pool {
  public readonly inactive: InactiveTable;

  public readonly projects: ProjectsTable;

  public readonly updates: UpdatesTable;

  public readonly users: UsersTable;

  public readonly warnings: WarningsTable;

  constructor(config: Config) {
    super({
      host: config.database.host,
      database: config.database.database,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
    });

    this.inactive = new InactiveTable(this);
    this.projects = new ProjectsTable(this);
    this.updates = new UpdatesTable(this);
    this.users = new UsersTable(this);
    this.warnings = new WarningsTable(this);

    super.connect().then((client) => {
      migrate({ client }, './migrations')
        .then((r) => r);
    }).catch((err) => {
      LOGGER.error('Error acquiring client', err.stack);
    });
  }
}
