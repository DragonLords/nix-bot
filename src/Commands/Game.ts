import { CommandInteraction, Client, ApplicationCommandType, Interaction, SlashCommandBuilder, CacheType } from 'discord.js';
import { Command } from "src/listeners/Command";
import { CommandInt, CommandData } from '../listeners/Command';


export const Game: Command = {
    name: "game",
    description: "game command",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Game command in developement!";

        await interaction.followUp({
            content: content,
            ephemeral: true
        });
    }
};
