import { CommandInteraction, Client, ApplicationCommandType, Interaction, SlashCommandBuilder, CacheType } from 'discord.js';
import { Command } from "src/listeners/Command";
import { CommandInt, CommandData } from '../listeners/Command';
import { VocalConnection } from '../Vocal/VocalConnection';


export const Leave: Command = {
    name: "leave",
    description: "Leave current channel",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        // const content = "Left the voice channel!";

        const content=await VocalConnection.LeaveVocal();

        await interaction.followUp({
            content: content,
            ephemeral: true
        });
    }
};
