import { getMongoDb } from './mongo.mjs'

export async function getAllUsers() {
    try {
        const res = await getMongoDb().collection(process.env.MONGO_USERS_COLLECTION).find();
        return await res.toArray();
    }
    catch (error) {
        console.log(error);
    }
    return [];
}