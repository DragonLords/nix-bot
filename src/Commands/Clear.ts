import { CommandInteraction, Client, ApplicationCommandType, Interaction, SlashCommandBuilder, CacheType } from 'discord.js';
import { Command } from "src/listeners/Command";
import { CommandInt, CommandData } from '../listeners/Command';


export const Clean: Command = {
    name: "clean",
    description: "Clean command",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Cleaning! :hearts:";

        await interaction.followUp({
            content: content,
            ephemeral: true
        });
    }
};
