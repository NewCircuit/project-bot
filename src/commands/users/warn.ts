import { Command, CommandOptions } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { Message, Permissions } from 'discord.js';

@ApplyOptions<CommandOptions>({
  name: 'warn',
  description: 'Warn a user',
  requiredUserPermissions: Permissions.FLAGS.BAN_MEMBERS,
})
export default class WarnCommand extends Command {
  async run(msg: Message) {
    console.log('Unimplemented');
  }
}
