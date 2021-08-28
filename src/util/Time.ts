export default class Time {
  /**
   * @param {Date} timestamp
   * @returns {string}
   */
  public static toReadable(timestamp: Date): string {
    return timestamp.toLocaleDateString('en-UK');
  }
}
