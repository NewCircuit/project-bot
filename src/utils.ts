import { Logger, getLogger } from 'log4js';
import { CONFIG } from './globals';

/**
 * Get a logger instance for a certain module.
 * @param {string} module
 * @returns {Logger}
 */
export function getLoggerModule(module: string): Logger {
  const logger = getLogger(module);
  logger.level = CONFIG.logLevel;
  return logger;
}
