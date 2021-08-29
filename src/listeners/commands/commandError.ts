import { CommandErrorPayload, Events, Listener } from '@sapphire/framework';
import { Message } from 'discord.js';
import { LOGGER } from '../../globals';

export class CommandErrorListener extends Listener<typeof Events.CommandError> {
  public async run(error: Error, {
    message,
  }: CommandErrorPayload): Promise<void> {
    LOGGER.warn(`${CommandErrorListener.getWarnError(message)} (${message.author.id}) | ${error.constructor.name} - ${error.message}`);
  }

  private static getWarnError(message: Message) {
    return `${message.guild ? `${message.guild.id}/${message.channel.id}` : `DM/${message.author.id}`}/${message.id}`;
  }
}
