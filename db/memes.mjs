import { getMongoDb } from './mongo.mjs'

export async function getMemes(amount, olderThan, newerThan) {
    try {
        if (amount > 100) 
            throw 'Maximum amount exceeded.';

        const date = {};
        if (olderThan) date.$lt = olderThan;
        if (newerThan) date.$gt = newerThan;
        const where = {};
        if (date.$lt || date.$gt)
            where.post_date = date;
        const res = await getMongoDb().collection(process.env.MONGO_MEMES_COLLECTION).find(where, {
            limit: amount,
            sort: [['post_date', -1]]
        });
        return await res.toArray();
    }
    catch (error) {
        console.log(error);
    }
    return [];
}