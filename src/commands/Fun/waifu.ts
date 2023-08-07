import { ApplyOptions } from '@sapphire/decorators';
import { Args, Command } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { getWaifu } from '../../api/functions/getWaifu.js';
import type { PyraCommandOptions } from '#root/typings/index.js';


@ApplyOptions<PyraCommandOptions>({
	description: 'Show a waifu',
	aliases: ['w', 'wa'],
	usage: ';waifu [id]'
})
export class UserCommand extends Command {
	public override async messageRun(message: Message, args: Args) {
		const id = await args.pick('string').catch(() => 'r');
		return message.reply(getWaifu(id));
	}
}
