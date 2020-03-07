import RRB from 'redis-request-broker';
import dotenv from 'dotenv';
dotenv.config();
const Client = RRB.Client;
const client = new Client('downloader:get');
client.connect();

/**
 * Add the image path to a meme
 * @param meme 
 */
export async function addImage(meme) {  
    try {
        if(!meme || ! meme._id) 
            throw "No meme id found";
        
        const memeId = meme._id;
        const meta = await client.request({ memeId });
        console.log("meme meta got:", meta);
        meme.image = meta;
    }
    catch (error) {
        console.log("failed to download meme image", error);
    }
}