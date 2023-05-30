import { Channel, EmbedBuilder, TextChannel, WebhookClient } from "discord.js";
import * as fs from 'fs';
import path from 'path';
const url='https://discord.com/api/webhooks/1083103130796966018/fgMp3P8jEVscIzQi6U_3w7i63Xc3-vzkTQH2k_Xk60LGl1W5fE7Hz2qzaQvmh4eELPiX';

export const CreateWebhook=()=>{
    const webhookclient=new WebhookClient({id:'1083103130796966018',token:'fgMp3P8jEVscIzQi6U_3w7i63Xc3-vzkTQH2k_Xk60LGl1W5fE7Hz2qzaQvmh4eELPiX'});

    const embed=new EmbedBuilder()
        .setTitle('Some title')
        .setColor(0x00fff);

    // channel.createWebhook();
    webhookclient.send({
        content:'Webhook test!',
        username:'Nix-username',
        avatarURL:'',
        embeds:[embed]
    });
}