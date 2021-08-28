import { Command, CommandOptions } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { Message, Permissions } from 'discord.js';

@ApplyOptions<CommandOptions>({
  name: 'register',
  description: 'Register a new user',
  requiredUserPermissions: Permissions.FLAGS.BAN_MEMBERS,
})
export default class PingCommand extends Command {
  async run(msg: Message) {
    console.log('Unimplemented');
  }
}
