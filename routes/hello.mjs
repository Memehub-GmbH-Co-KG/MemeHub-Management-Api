import { validateSession } from '../lib/session.mjs';
import express from 'express';

const router = express.Router()

router.get('/hello', validateSession, (req, res) => {
    res.send('world from server');
});

export default router;
