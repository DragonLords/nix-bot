import * as path from 'path';
const assets=path.join(__dirname,'../Assets/');

declare let Assets:string;

Assets=assets;

declare global {
    namespace NodeJS{
        interface GlobalData{
            Assets:'';
        }
    }
}