import Controller from './controller';
import Bot from '../bot';
import { AfkStatus } from '../types';
import { DB } from '../globals';

export default class UsersController extends Controller {
  constructor(bot: Bot) {
    super(bot, 'user');
  }

  /**
   * Sets an user afk
   * @param {string} userID
   * @param {Date} end
   * @returns {Promise<boolean>}
   */
  public async setAfk(userID: string, end: Date): Promise<boolean> {
    const afk: AfkStatus = {
      user: userID,
      start: new Date(),
      end,
      active: true,
    };

    return DB.inactive.add(afk);
  }

  /**
   * Removes a user's AFK status
   * @param {string} userID
   * @returns {Promise<boolean>}
   */
  public async delAfk(userID: string): Promise<boolean> {
    return DB.inactive.remove(userID);
  }

  public async fetchActive(): Promise<AfkStatus[]> {
    return DB.inactive.fetchActive()
  }

  /**
   * Whether a user is AFK
   * @param {string} userID
   * @returns {Promise<boolean>}
   */
  public async isAfk(userID: string): Promise<boolean> {
    return DB.inactive.isAfk(userID);
  }
}
