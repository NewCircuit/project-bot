import Table from '../table';
import { AfkStatus } from '../../types';
import { DBAfkStatus } from '../../types/database';
import { DbManager } from '../index';

export default class InactiveTable extends Table {
  constructor(client: DbManager) {
    super('inactive', client);
  }

  /**
   * Set an user afk.
   * @param {AfkStatus} afk
   * @returns {Promise<boolean>}
   */
  public async add(afk: AfkStatus): Promise<boolean> {
    const isAfk = await this.isAfk(afk.user);

    if (isAfk) {
      return false;
    }

    await this.client.query(
      `INSERT INTO ${this.full} (user_id, start, "end") 
       VALUES ($1, $2, $3);`,
      [afk.user, afk.start.valueOf(), afk.end.valueOf()],
    );

    return true;
  }

  /**
   * Remove afk from user.
   * @param {string} user
   * @returns {Promise<boolean>}
   */
  public async remove(user: string): Promise<boolean> {
    const res = await this.client.query(
      `UPDATE ${this.full} 
        SET active = false
        WHERE user_id = $1 
            AND active = true;`,
      [user],
    );

    return res.rowCount !== 0;
  }

  /**
   * Gets all afk for a user
   * @param {string} user
   * @returns {Promise<AfkStatus[]>}
   */
  public async fetchAll(user: string): Promise<AfkStatus[]> {
    const res = await this.client.query(
      `SELECT *
        FROM ${this.full}
        WHERE user_id = $1`,
      [user],
    );

    return res.rows.map(InactiveTable.parse);
  }

  /**
   * Get an afk user
   * @param {string} user
   * @returns {Promise<AfkStatus | null>}
   */
  public async fetch(user: string): Promise<AfkStatus | null> {
    const res = await this.fetchAll(user);

    for (let i = 0; i < res.length; i += 1) {
      const afk = res[i];
      const { active } = afk;

      if (active) {
        return afk;
      }
    }

    return null;
  }

  /**
   * Check if user is afk
   * @param {string} user
   * @returns {Promise<boolean>}
   */
  public async isAfk(user: string): Promise<boolean> {
    const afkStatus = await this.fetch(user);

    return afkStatus !== null;
  }

  /**
   *
   * @param {DBAfkStatus} data
   * @private
   * @returns {AfkStatus}
   */
  private static parse(data: DBAfkStatus): AfkStatus {
    return {
      id: data.id,
      user: data.user_id.toString(),
      start: new Date(data.start),
      end: new Date(data.end),
      refresh: data.refresh,
      active: data.active,
    };
  }
}
