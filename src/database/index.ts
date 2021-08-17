import { Pool } from 'pg';
import { migrate } from 'postgres-migrations';
import { Config } from '../config';
import { LOGGER } from '../globals';

export class Db extends Pool {
  constructor(config: Config) {
    super({
      host: config.database.host,
      database: config.database.database,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
    });

    super.connect().then((client) => {
      migrate({ client }, './migrations')
        . then((r) => r);
    }).catch((err) => {
      LOGGER.error('Error acquiring client', err.stack);
    });
  }
}
