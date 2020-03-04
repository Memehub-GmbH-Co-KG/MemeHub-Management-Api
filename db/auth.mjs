import { getMongoDb } from './mongo.mjs'

export async function isUserAuthorized(user) {
    const id = parseInt(user.id);
    if (!id)
        return false;

    try {
        const res = await getMongoDb().collection(process.env.MONGO_USERS_COLLECTION).findOne({
            _id: id,
            ['rights.management']: true
        });

        if (res && res._id && res._id.toString() === user.id)
            return true;
    }
    catch (error) {
        console.log(error);
    }
    return false;
}