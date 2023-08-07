import { ApplyOptions } from '@sapphire/decorators';
import { Args, Command } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { getWaifu } from '../../api/functions/getWaifu.js';

@ApplyOptions<Command.Options>({
	description: 'Show a waifu',
	aliases: ['w', 'wa'],
	enabled: true
})
export class UserCommand extends Command {
	public override async messageRun(message: Message, args: Args) {
		const id = await args.pick('string').catch(() => 'r');
		return message.reply(getWaifu(id));
	}
}
