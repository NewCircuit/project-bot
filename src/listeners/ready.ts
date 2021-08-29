import { Events, Listener } from '@sapphire/framework';
import type { Client } from 'discord.js';
import { LOGGER } from '../globals';

export class ReadyEvent extends Listener<typeof Events.ClientReady> {
  public async run(client: Client) {
    LOGGER.info(`${client.user?.username} is now online`);
  }
}
