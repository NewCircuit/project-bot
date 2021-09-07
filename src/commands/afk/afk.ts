import { Message } from 'discord.js';
import {
  SubCommandPluginCommand,
  SubCommandPluginCommandOptions,
} from '@sapphire/plugin-subcommands';
import { ApplyOptions } from '@sapphire/decorators';
import { reply } from '@sapphire/plugin-editable-commands';
import { Args } from '@sapphire/framework';
import { CONFIG } from '../../globals';
import Time from '../../util/Time';
import Bot from '../../bot';

export async function afkCheck() {
  const bot = Bot.getBot();
  const users = await bot.usersController.fetchActive();
  const time = Date.now()
  for (let i = 0; i < users.length; i += 1) {
    const afk = users[i];
    if (new Date(afk.end).getTime() <= time) {
      // temporary, will change to set user as active again
      console.log("Expired")  
    }
  }

}


@ApplyOptions<SubCommandPluginCommandOptions>({
  aliases: ['inactive'],
  description: 'Modify your afk state',
  subCommands: [{ input: 'start', default: true }, { input: 'stop' }],
})
export default class AfkCommand extends SubCommandPluginCommand {
  public async start(message: Message, args: Args) {
    const bot = Bot.getBot();
    const arg = await args.rest('string');
    const date = new Date(arg);
    if (isNaN(date.getTime()) || Date.now() >= date.getTime()) {
      return reply(message, "Invalid date!")
    }

    let isafk = await bot.usersController.setAfk(message.author.id, date);

    if (!isafk) {
      return reply(message, `You have already been set as afk! Use \`${CONFIG.bot.prefix}afk stop\` to set yourself back as active.`)
    }

    return reply(message, `Registered you afk till ${Time.toReadable(date)}`);
  }


  public async stop(message: Message) {
    const bot = Bot.getBot();

    let isafk = await bot.usersController.isAfk(message.author.id)

    if (!isafk) {
      return reply(message, `You are not set as afk! Use \`${CONFIG.bot.prefix}afk start [time]\` to set yourself as AFK.`)
    }

    await bot.usersController.delAfk(message.author.id)

    return reply(message, 'Set back as active!');
  }
}
