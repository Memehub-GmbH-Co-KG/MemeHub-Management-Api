import MongoDb from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoDb.MongoClient(process.env.MONGO_URL);
let mongo = undefined;

client.connect(function (err) {
    if (err)
        throw err;

    console.log('Connected successfully to mongo db.');

    mongo = client.db(process.env.MONGO_DB);
});

export function getMongoDb() {
    if (mongo === undefined)
        throw new Error('Not connected to mongo db')
    return mongo;
}

process.on('beforeExit', async function () {
    await client.close();
})