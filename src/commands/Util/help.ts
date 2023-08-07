import { ApplyOptions } from '@sapphire/decorators';
import { Command, MessageCommand } from '@sapphire/framework';
import { EmbedBuilder, Message } from 'discord.js';

@ApplyOptions<Command.Options>({
	description: 'Show the commands of the bot.',
	aliases: ['commands']
})
export class UserCommand extends Command {
	// @ts-ignore because yes
	public override async messageRun(message: Message, context: MessageCommand.Context) {
		const { client } = this.container;

		if (!client.stores.has('commands')) {
			return message.channel.send('Error al obtener la lista de comandos.');
		}

		const commandsStore = client.stores.get('commands');
		const categories: Map<string, Command[]> = new Map();

		commandsStore.forEach((command) => {
			const categoryName = command.category || 'Sin categoría';
			const categoryCommands = categories.get(categoryName) || [];
			categories.set(categoryName, [...categoryCommands, command]);
		});
		const embed = new EmbedBuilder()
			.setColor('#0099ff')
			.setTitle('Lista de Comandos')
			.setDescription('Aquí está la lista de comandos disponibles:')
			.setTimestamp();

		categories.forEach((commands, categoryName) => {
			const commandList = commands.map((command) => `\`${command.name}\``).join(', ');
			embed.addFields({ name: categoryName, value: commandList });
		});

		await message.reply({ embeds: [embed] });
	}
}
