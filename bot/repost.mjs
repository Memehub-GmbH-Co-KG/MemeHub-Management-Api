import RRB from 'redis-request-broker';
import dotenv from 'dotenv';
dotenv.config();
const Client = RRB.Client;
const client = new Client('bot:repost');

export async function markMemeAsRepost(memeId, isRepost) {
    // TODO
    console.log("not implemented. is repost:", memeId, isRepost);
    throw 'not implemented';
}