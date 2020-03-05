import express from 'express';
import cors from 'cors';
import login from './routes/login.mjs';
import hello from './routes/hello.mjs';
import users from './routes/users.mjs';
import memes from './routes/memes.mjs';

// Setup
const app = express()
app.use(cors());

// Routes
app.use(login);
app.use(hello);
app.use(users);
app.use(memes);

// Listen
app.listen(3030);