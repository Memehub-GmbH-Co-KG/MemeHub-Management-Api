import uuidAll from 'uuid';

const uuid = uuidAll.v4;
const sessions = {};

export function getOrCreateSession(user) {
    for (const [session, userid] of Object.entries(sessions)) {
        if (userid !== user.id)
            continue;

        return session;
    }

    const session = uuid();
    sessions[session] = user.id;
    return session;
}

export function isValidSession(session) {
    return session in sessions;
}

export function validateSession(req, res, next) {
    const session = req.header('session');
    if (!isValidSession(session)) {
        res.sendStatus(403);
        return;
    }

    next();
}