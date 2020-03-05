import { validateSession } from '../lib/session.mjs';
import express from 'express';
import { getAllUsers } from '../db/users.mjs';

const router = express.Router()

router.get('/users', validateSession, async (req, res) => {
    res.json(
        await getAllUsers()
    );
});

export default router;
