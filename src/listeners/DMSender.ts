import { Client } from "discord.js";

const meID="209257679820947456";
const gID="936822189263560715";

export const SendDM=async(client:Client)=>{
    client.guilds.fetch(gID).then((guild)=>{
        guild.members.fetch(meID).then((me)=>{
            me.send("Hello <3!");
        });
    })
}