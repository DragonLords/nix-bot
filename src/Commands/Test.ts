import { CommandInteraction, Client, ApplicationCommandType, Interaction, SlashCommandBuilder, CacheType } from 'discord.js';
import { Command } from "src/listeners/Command";
import { CommandInt, CommandData } from '../listeners/Command';


export const Test: Command = {
    name: "test",
    description: "Testing command",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Test :hearts:";

        await interaction.followUp({
            content: content,
            ephemeral: true
        });
    }
};
