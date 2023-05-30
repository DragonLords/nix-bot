import { Activity, ActivityOptions, ActivityType, ApplicationCommandType, Client, ClientPresence, CommandInteraction, PresenceManager, PresenceUpdateStatus, RichPresenceAssets, Status } from "discord.js";
import { Command } from "src/listeners/Command";

export const ChangePresence: Command = {
    name: "change-presence",
    description: "chnage presence Command",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        let content:string=client.user?"presence updated":"other";
        const activity:ActivityOptions={
                type:ActivityType.Playing,
                // text:"Watching something!",
                // status:Status.Idle
        };
        activity.name="Nix!";

        client.user!.setActivity(activity);

        await interaction.followUp({
            content:"-",
            ephemeral:true
        });
        await interaction.deleteReply();
        await interaction.followUp({
            content: content,
            ephemeral: true
        });
    }
}