import { validateSession } from '../lib/session.mjs';
import express from 'express';

const router = express.Router()

router.get('/logs', validateSession, async (req, res) => {
    res.json([
        {time: Date.now(), message: 'Test log', detail: 'This is not implemented yet.'},
        {time: Date.now(), message: 'Test log 2', detail: 'still not.'},
        {time: Date.now(), message: 'Test log 3'}
    ]);
});

export default router;
