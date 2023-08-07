import type { CommandJSON, CommandOptions } from "@sapphire/framework";

export interface PyraCommandOptions extends CommandOptions {
    examples?: string[];
    usage?: string;
}

export interface PyraCommmandJSON extends CommandJSON {
    examples: string | Readonly<string[]>;
    usage: string;
}