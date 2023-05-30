import axios, { AxiosResponse } from 'axios';
import { CommandInteraction, Client, ApplicationCommandType, Interaction, SlashCommandBuilder, CacheType } from 'discord.js';
import { Command } from "src/listeners/Command";
import { CommandInt, CommandData } from '../listeners/Command';


export const Debug: Command = {
    name: "debug",
    description: "debug Command",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content:string="check console";
        // const res:AxiosResponse=await axios.get('http://localhost:8888/aponia/debug');
        // console.log(res.data);
        // const content = `${axios.get('http://localhost:8888/aponia/debug').then((e)=>e)}`;
        // const content = `${fetch('http://localhost:8888/aponia/debug').then((e)=>e.json())}`;
        await interaction.followUp("-");
        await interaction.deleteReply();
        await interaction.followUp({
            content: content,
            ephemeral: true
        });
    }
};

//https://act.hoyoverse.com/puzzle/bh3/pz_TmDmQaBWwx/index.html?game_biz=bh3_global&invitation_code=105195556EJ&video_id=0005&region=usa01