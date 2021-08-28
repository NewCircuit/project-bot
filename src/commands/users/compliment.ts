import { Command, CommandOptions } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { Message, Permissions } from 'discord.js';

@ApplyOptions<CommandOptions>({
  name: 'compliment',
  description: 'Compliment a user',
  aliases: ['rmwarn', 'removewarn'],
  requiredUserPermissions: Permissions.FLAGS.BAN_MEMBERS,
})
export default class PingCommand extends Command {
  async run(msg: Message) {
    console.log('Unimplemented');
  }
}
