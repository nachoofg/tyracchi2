import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import type { PyraCommandOptions } from '#root/typings/index.js';
import type { Message } from 'discord.js';

@ApplyOptions<PyraCommandOptions>({
	description: 'Show the ms',
	aliases: ['pong', 'p'],
})
export class UserCommand extends Command {
	public override async messageRun(message: Message) {
		return message.reply(`Pong! (gateway: ${message.client.ws.ping})`);
	}
}
