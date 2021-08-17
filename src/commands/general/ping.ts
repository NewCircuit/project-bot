import { Command, PieceContext } from '@sapphire/framework';
import { Message } from 'discord.js';

export default class PingCommand extends Command {
  constructor(ctx: PieceContext) {
    super(ctx, {
      name: 'ping',
      description: 'Send back the ping of the bot',
    });
  }

  async run(msg: Message) {
    const m = await msg.channel.send('Ping?');
    return m.edit(
      `Pong! Bot Latency ${Math.round(this.context.client.ws.ping)}ms. API Latency ${m.createdTimestamp - msg.createdTimestamp}ms.`,
    );
  }
}
