import { ActivityOptions, ActivityType, Client } from "discord.js";

export const BasePresence = (client: Client) => {
    const playing: ActivityOptions = {
        type: ActivityType.Playing,
        name: "Nix!"
    };
    const streaming: ActivityOptions = {
        type: ActivityType.Streaming,
        name: "Nix! :hearts:"
    };
    const competing: ActivityOptions = {
        type: ActivityType.Competing,
        name: "Nix!"
    };
    const watching: ActivityOptions = {
        type: ActivityType.Watching,
        name: "Nix!"
    };
    const listening: ActivityOptions = {
        type: ActivityType.Listening,
        name: "Nix!"
    };


    client.user!.setActivity(listening);
    console.log('activity updated!');
}