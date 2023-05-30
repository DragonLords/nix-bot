import { ChatInputApplicationCommandData, Client, CommandInteraction, SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder, Interaction, ApplicationCommandType } from 'discord.js';

export interface Command extends ChatInputApplicationCommandData {
    run:(client:Client,interaction:CommandInteraction)=>void;
}

export interface CommandInt {
    data: CommandData;
    run:(interaction:CommandInteraction)=>Promise<void>;
}

export interface CommandData {
    name:String;
    description:String;
    type:ApplicationCommandType;
}