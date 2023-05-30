import { Activity, ActivityOptions, ActivityType, ApplicationCommandType, Client, ClientPresence, CommandInteraction, EmbedBuilder, PresenceManager, PresenceUpdateStatus, RichPresenceAssets, Status, WebhookClient } from "discord.js";
import { Command } from "src/listeners/Command";

export const WebhookTest: Command = {
    name: "webhook",
    description: "webhook Command",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const webhookclient=new WebhookClient({id:'1083103130796966018',token:'fgMp3P8jEVscIzQi6U_3w7i63Xc3-vzkTQH2k_Xk60LGl1W5fE7Hz2qzaQvmh4eELPiX'});
        let content:string=client.user?"presence updated":"other";

        const embed=new EmbedBuilder()
        .setTitle('Some title')
        .setColor(0x00fff);

        // channel.createWebhook();
        webhookclient.send({
            content:'Webhook test!',
            username:'Nix',
            avatarURL:'',
            embeds:[embed]
        });

        await interaction.followUp({
            content:"-",
            ephemeral:true
        });
        await interaction.deleteReply();
    }
}