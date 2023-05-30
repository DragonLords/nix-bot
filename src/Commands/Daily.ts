import { CommandInteraction, Client, ApplicationCommandType, Interaction, SlashCommandBuilder, CacheType } from 'discord.js';
import { Command } from "src/listeners/Command";
import { CommandInt, CommandData } from '../listeners/Command';
import path from 'path';
import { UserData } from '../@Types/User';
import * as sqlite from 'sqlite-ts';
import { open } from 'sqlite'
import sqlite3 from 'sqlite3';

const pathToDB=path.join(__dirname,"../../Assets/Data/db.sqlite");


export const Daily: Command = {
    name: "daily",
    description: "collect the daily from discord",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Daily command not finished yet!";
        const user:UserData={
            username: interaction.user.username,
            uid:parseInt(interaction.user.id)
        }

        console.log(user);
        await openDB();

        const guild=interaction.guild;
        const DLords=interaction.user;
        (await DLords.createDM()).send("Hello <3!");

        await interaction.followUp({
            content: content,
            ephemeral: true
        });
    }
};

const openDB=async()=>{
    const db=await open({
        filename: pathToDB,
        driver: sqlite3.Database
    });
}

/*
https://www.wallpaperflare.com/search?wallpaper=Ägir+%28Azur+Lane%29
https://devilchan.com/friedrich-der-grosse-azur-lane-wallpapers-c5093
*/