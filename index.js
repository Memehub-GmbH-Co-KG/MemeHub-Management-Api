import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import login from './routes/login.mjs';
import hello from './routes/hello.mjs';
import users from './routes/users.mjs';
import memes from './routes/memes.mjs';
import logs from './routes/logs.mjs';

// Setup
const app = express()
app.use(cors());
app.use(bodyParser());

// Routes
app.use(login);
app.use(hello);
app.use(users);
app.use(memes);
app.use(logs);

// Listen
app.listen(3030);