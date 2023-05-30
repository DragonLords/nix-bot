import { VoiceChannel } from "discord.js";
import { joinVoiceChannel, createAudioPlayer, createAudioResource, entersState, StreamType, AudioPlayerStatus, VoiceConnectionStatus, DiscordGatewayAdapterImplementerMethods, DiscordGatewayAdapterLibraryMethods, VoiceConnection } from "@discordjs/voice";
import { createDiscordJSAdapter } from './adapter';

export class VocalConnection {
    static hasConnection:boolean=false;
    static connection:VoiceConnection|null=null;
    static async JoinVocal(channel: VoiceChannel) {
        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: createDiscordJSAdapter(channel)
        });
        this.hasConnection=true;
        try {
            entersState(connection, VoiceConnectionStatus.Ready, 30e3).then((e)=>{
                console.log(e.state);
            });
            this.connection=connection;
            return connection;
        } catch (error) {
            console.log(error);
            connection.destroy();
            throw error;
        }
    }

    static async LeaveVocal(){
        if(this.connection!=null){
            this.connection.destroy();
            return "disconnected from voice channel!"
        }else{
            return "not connected to any voice channel!";
        }
    }
}

export const Connect=(channel:VoiceChannel)=>{

}