import { Command, CommandOptions } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
  name: 'create',
  description: 'Create a project',
})
export default class CreateCommand extends Command {
  async run(msg: Message) {
    throw new Error('This is a test');
  }
}
