import { Pool } from 'pg';
import { migrate } from 'postgres-migrations';
import { Config } from '../config';
import { LOGGER } from '../globals';
import InactiveTable from './tables/inactive';

export class DbManager extends Pool {
  public readonly inactive: InactiveTable;

  constructor(config: Config) {
    super({
      host: config.database.host,
      database: config.database.database,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
    });

    this.inactive = new InactiveTable(this);

    super.connect().then((client) => {
      migrate({ client }, './migrations')
        . then((r) => r);
    }).catch((err) => {
      LOGGER.error('Error acquiring client', err.stack);
    });
  }
}
