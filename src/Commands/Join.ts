import { CommandInteraction, Client, ApplicationCommandType, Interaction, SlashCommandBuilder, CacheType, Channel, Collection, VoiceChannel } from 'discord.js';
import { Command } from "src/listeners/Command";
import { CommandInt, CommandData } from '../listeners/Command';
import * as js from 'discord.js'
import { Connect,VocalConnection } from '../Vocal/VocalConnection'

export const Join: Command = {
    name: "join",
    description: "join the channel",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        let content = `Joined :${interaction.user.username}!`;
        let channelToJoin:VoiceChannel;
        const user=interaction.user;
        const vcs:Collection<string,js.GuildBasedChannel>=interaction.guild!.channels.cache.filter(c=>c.type===js.ChannelType.GuildVoice);
        // content+=`\n${vcs.at(0)?.name}`;
        vcs.map(async (e)=>{
            const vc:js.VoiceChannel=e as js.VoiceChannel;
            const members=e.members;
            let hasUser:boolean=false;
            // vc.members.each((e)=>{
            //     if(e.id===user.id){
            //         hasUser=true;
            //     }
            // })
            if(vc.members.has(user.id)){
                content+=`\n${vc.members.has(user.id)}`;
                if(vc.joinable){
                    content+="\ncan join the voice channel";
                    VocalConnection.JoinVocal(vc);
                }else{
                    content+="\ncan't join the voice channel";
                }
                return;
            }
        });
        
        // content+=`\n${user.username}`;

        await interaction.followUp({
            content: content,
            ephemeral: true
        });

    }
};
