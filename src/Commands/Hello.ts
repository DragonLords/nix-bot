import { CommandInteraction, Client, ApplicationCommandType, Interaction, SlashCommandBuilder, CacheType } from 'discord.js';
import { Command } from "src/listeners/Command";
import { CommandInt, CommandData } from '../listeners/Command';


export const Hello: Command = {
    name: "hello",
    description: "Return a greetings",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello There!";

        await interaction.followUp({
            content: content,
            ephemeral: true
        });
    }
};
