import { Message, PermissionString } from 'discord.js';
import DiscordClient from '../../client/client';

export default abstract class BaseCommand {
	constructor(
		private name: string,
		private category: string,
		private aliases: Array<string>,
		private description: string,
		private usage: Array<string>,
		private cooldown: number,
		private permissions?: { user?: PermissionString[], bot?: PermissionString[] },
	) {}

	getName(): string {
		return this.name;
	}
	getCategory(): string {
		return this.category;
	}
	getAliases(): Array<string> {
		return this.aliases;
	}
	getDescription(): string {
		return this.description;
	}
	getUsage(): Array<string> {
		return this.usage;
	}
	getCooldown(): number {
		return this.cooldown;
	}
	getPermissions(): { user?: PermissionString[]; bot?: PermissionString[] } {
		return this.permissions
	}

	abstract run(
		client: DiscordClient,
		message: Message,
		args: Array<string> | null,
		flags: String[]
	);
}
