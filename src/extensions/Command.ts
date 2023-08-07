import { Command } from "@sapphire/framework";

import type { PyraCommandOptions, PyraCommmandJSON } from '#root/typings/index.js'
import type { PieceContext } from "@sapphire/framework";

export default abstract class PyraCommandExtends extends Command {
    public examples: Readonly<string[]> = [];
    public usage!: Readonly<string>;

    protected constructor(context: PieceContext, options: PyraCommandOptions) {
        super(context, options);
        this.examples = options.examples ?? [""]
        this.usage = options.usage ?? ""
    }
    // eslint-disable-next-line
    public override toJSON(): PyraCommmandJSON {
        return {
            ...super.toJSON(),
            examples: this.examples,
            usage: this.usage,
        };
    }
}