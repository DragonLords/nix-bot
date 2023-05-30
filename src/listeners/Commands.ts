import { Command, CommandData } from './Command';
import { ApplicationCommand, Client, Collection, IntentsBitField } from 'discord.js';
import path from 'path';
import * as fs from 'fs';
import { Hello } from '../Commands/Hello';
import { type } from 'os';


let commandsList:Command[]=[];

export default async(client:Client):Promise<void>=>{
    const commandsPath=path.join(__dirname,'../',"./Commands");
    const commandFiles=fs.readdirSync(commandsPath).filter(file=>file.endsWith(".ts"));
    for(const file of commandFiles){
        const filePath=path.join(commandsPath,file);
        const command=require(filePath);
        commandsList.push(command);
        // console.log(command);
        // const c=new Collection([command.data.name,command]);
        // await client.application!.commands.set(command.data.name,command);
    }
    let commandsFinal:Command[]=[];
    // console.log(commandsList);
    
    commandsList.map((e)=>{
        type ObjectKey=keyof typeof e;
        const key:string=Object.keys(e)[0];
        const myVar=key as ObjectKey;
        commandsFinal.push(e[myVar] as Command);
    })
    commandsList=commandsFinal;
    // commandsList=[Hello];
    // console.log(commandsList.length)
    // console.log(commandsList);
    await client.application!.commands.set(commandsFinal);
}
// console.log(commandsList);
export {commandsList};