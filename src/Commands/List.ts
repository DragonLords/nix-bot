import { CommandInteraction, Client, ApplicationCommandType, Interaction, SlashCommandBuilder, CacheType } from 'discord.js';
import { Command } from "src/listeners/Command";
import * as fs from "fs";
import path from "path";
import * as walk from "walk";

export const Hello: Command = {
	name: "hello",
	description: "Return a greetings",
	type: ApplicationCommandType.ChatInput,
	run: async (client: Client, interaction: CommandInteraction) => {
		const content = "Hello There!";
		const elements:string[]=fs.readdirSync(path.join(__dirname,"../../Assets/images/"));
		
		

		await interaction.followUp({
			content: content,
			ephemeral: true
		});
	}
};

const Testing=()=>{
	const assetsPath:string=path.join(__dirname,"../../Assets/images");
	let files:string[] = [];
	let walker=walk.walk(assetsPath);
	walker.on('file',(root, stat, next)=>{
		files.push(root + '/' + stat.name);
		next();
	});
	walker.on('end',()=>{
		files.forEach((element,index)=>{
			files[index]=element.replaceAll("\\","/");
		})
		console.log(files);
		
		const data:FileData = {
			files:files
		};
		
		fs.writeFileSync(path.join(assetsPath,"./base.json"),JSON.stringify(data,null,4));
	});
}

Testing();

interface FileData {
	files:string[];
}