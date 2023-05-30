import { Client, TextChannel } from 'discord.js';
import Fastify from 'fastify';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { DailyData } from '../@Types/Daily';
import { Static, Type } from '@sinclair/typebox';
import cors from '@fastify/cors'

let channel: TextChannel | null = null;
const server = Fastify().withTypeProvider<TypeBoxTypeProvider>();
let client: Client;
export const init = async(clientLocal: Client) => {
    const channelID = "1085292811370377226";
    const guildID = "936822189263560715";
    
    client = clientLocal;
    client.guilds.fetch(guildID).then((g) => {
        g.channels.fetch(channelID).then((c) => {
            channel = c as TextChannel;
        });
    });

    await server.register(cors, { 
        // put your options here
    })

    server.get('/ping', async (request, reply) => {
        // await ExecuteUpdateGameInfo(client);
        return 'pong\n'
    });

    server.post<{ Body: UserType }>(
        '/connection', {
        schema: {
            body: User,
            response: {
                200: User
            },
        },
    }, (request, reply) => {
        console.log(request);
        // const { uid, username } = request.body;
        // reply.status(200).send({ uid, username });
        ExecuteUpdateGameInfo(client,JSON.stringify(request.body));
    }
    )

    server.listen({ port: 8080 }, (err, address) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`Server listening at ${address}`)
    });
}

const ExecuteUpdateGameInfo = async (client: Client,json:string="") => {
    await channel?.send(`${json}`);
}

const User = Type.Object({
    uid: Type.String(),
    username: Type.String()
})

type UserType = Static<typeof User>