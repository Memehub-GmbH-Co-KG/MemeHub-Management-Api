import { getOrCreateSession } from '../lib/session.mjs';
import { isUserAuthorized } from '../db/auth.mjs';
import express from 'express';
import TelegramLogin from 'node-telegram-login';

const MySiteLogin = new TelegramLogin(process.env.BOT_TOKEN);
const router = express.Router()


async function onLegalTelegramUser(req, res, next, login_data) {
    const isAuthorized = await isUserAuthorized(login_data);
    if (!isAuthorized) {
        res.sendStatus(403);
        return;
    }

    req.session = getOrCreateSession(login_data);
    next();
}

function onIllegalTelegramUser(req, res, next) {
    res.sendStatus(403);
}

router.get('/login', MySiteLogin.customMiddleware(onLegalTelegramUser, onIllegalTelegramUser), async (req, res) => {
    res.send(req.session);
});

export default router;
