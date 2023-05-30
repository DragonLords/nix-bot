import * as fs from 'fs';
import { log } from "console";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config({path:path.resolve(__dirname,"../Assets/Data/.env")});
const token=process.env.BOT_TOKEN;
const webhookURL=process.env.webhookURL;
import { Client, IntentsBitField, Collection, GatewayIntentBits, TextChannel, Events } from 'discord.js';
import ready from './listeners/ready';
import interactionCreate from './listeners/interactionCreate';
import { CreateWebhook } from './webhook/webhook';
import { BasePresence } from './listeners/BasePresence';
import { SendDM } from './listeners/DMSender';
import { init } from './listeners/HTTPListener';
import { Ghoster } from './listeners/Ghoster';


const allIntents=new IntentsBitField(32767);
const intentsNix=[
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildVoiceStates
];

const client=new Client({
    intents:intentsNix
});


ready(client);
interactionCreate(client);
client.login(token);
client.once(Events.ClientReady,()=>{
    BasePresence(client);
    //SendDM(client);
    init(client);
    // Ghoster(client);
});
// CreateWebhook();

//友達が欲しい…

/// Overkill:
/// if 150% health in 1 hit
/// then give more reward