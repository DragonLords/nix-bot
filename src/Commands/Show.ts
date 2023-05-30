import { CommandInteraction, Client, ApplicationCommandType, Interaction, SlashCommandBuilder, CacheType } from 'discord.js';
import { Command } from "src/listeners/Command";
import path from 'path';
import * as fs from 'fs';
import { randomInt } from 'crypto';


export const Show: Command = {
    name: "show",
    description: "Show me ^ω^",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const imgPath:string=path.join(__dirname,'../../Assets/pfp/');
        const imgs:Array<string>=fs.readdirSync(imgPath);
        const randomImg:string=`${imgPath}${imgs[randomInt(imgs.length)]}`;
        const content:string=`stuff`;
        

        await interaction.followUp("-");
        await interaction.deleteReply();
        await interaction.followUp({
            content: content,
            ephemeral: true,
            files:[randomImg]
        });
    }
};