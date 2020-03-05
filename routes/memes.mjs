import { validateSession } from '../lib/session.mjs';
import express from 'express';
import { getMemes } from '../db/memes.mjs';

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

export default router;
