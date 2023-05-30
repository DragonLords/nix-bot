import { Client, Interaction, CommandInteraction } from 'discord.js';
import { commandsList } from './Commands';

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            await handleSlashCommand(client, interaction);
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    //handle slash command here
    const slashCommand=commandsList.find(c=>c.name===interaction.commandName);
    // const slashCommand = await client.application!.commands.fetch();
    // console.log(slashCommand);
    // console.log(interaction.commandName);
    if (!slashCommand) {
        interaction.followUp({ content: "An error has occured" });
        return;
    }

    await interaction.deferReply();
    slashCommand.run(client,interaction);
}