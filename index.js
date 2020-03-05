import express from 'express';
import cors from 'cors';
import login from './routes/login.mjs';
import hello from './routes/hello.mjs';
import users from './routes/users.mjs';

// Setup
const app = express()
app.use(cors());

// Routes
app.use(login);
app.use(hello);
app.use(users);

// Listen
app.listen(3030);