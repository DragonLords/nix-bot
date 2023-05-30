declare global{
    namespace NodeJs{
        interface ProcessEnv {
            BOT_TOKEN:string;
            CLIENT_ID:number;
            PUBLIC_KEY:string;
            webhookURL:string;
        }
    }
}

export {}