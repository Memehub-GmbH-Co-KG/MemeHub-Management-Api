import { validateSession } from '../lib/session.mjs';
import express from 'express';
import { getMemes } from '../db/memes.mjs';
import { markMemeAsRepost } from '../bot/repost.mjs';

const router = express.Router()

router.get('/memes', validateSession, async (req, res) => {
    let amount = parseInt(req.query.amount);
    const olderThan = req.query.olderThan;
    const newerThan = req.query.newerThan;
    if (typeof amount !== 'number' || amount < 0 || amount > 50)
        amount = 20;
    const memes = await getMemes(amount, olderThan, newerThan);
    res.json(memes);
});

router.post('/memes/:id/repost', validateSession, async (req, res) => {
    try {
        await markMemeAsRepost(req.params.id, req.body.isRepost);
    }
    catch (error) {
        return res.status(500);
    }
    res.status(200);
});

export default router;
