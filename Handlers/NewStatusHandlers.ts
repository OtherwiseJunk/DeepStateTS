import { mastodon } from "masto";
import { RandomizationUtilities as Random } from "../Utilities/RandomizationUtilities.ts";
import fs from 'node:fs';
import path from 'node:path';


export class NewStatusHandlers{
    static SecretMalarkeyLevel = '0 - You\'ve found a secret malarkey level, Sonny! There is absolutely NO MALARKEY HERE! Great job, Tiger.:./Media/MalarkeyLevel/secret.jpg';
    static MalarkeyLevels = [
        '1 - Minimal. Cool as a cucumber, kiddo.:./Media/MalarkeyLevel/1.jpg',
        '2 - Mild. Right on, Skippy.:./Media/MalarkeyLevel/2.jpg',
        '3 - Mellow. You\'re alright, sport.:./Media/MalarkeyLevel/3.jpg',
        '4 - Moderate. Careful there, chief.:./Media/MalarkeyLevel/4.jpg',
        '5 - Moronic. You\'re outta line, pal!:./Media/MalarkeyLevel/5.jpg',
        '6 - Menacing. Watch it, Buster!:./Media/MalarkeyLevel/6.jpg',
        '7 - MONSTROUS. Get outta here, Jack!:./Media/MalarkeyLevel/7.jpg'
    ]
    static async MalarkeyLevel(status: mastodon.v1.Status, masto : mastodon.Client){
        if(status.content.toLowerCase().includes('malarkey level')){
            let malarkeyLevel = Random.percentChance(5) ? this.SecretMalarkeyLevel : Random.sample<string>(this.MalarkeyLevels).split(':');
            let attachment = await masto.v2.mediaAttachments.create({
                file: new Blob([fs.readFileSync(malarkeyLevel[1])]),
                description: `A Malarkey level indicator set to ${malarkeyLevel[0].substring(0,1)}`
            });
            masto.v1.statuses.create({
                inReplyToId: status.id,
                status: malarkeyLevel[0],
                mediaIds: [attachment.id]
            });
        }
    }
}
