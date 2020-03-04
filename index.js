import express from 'express';
import cors from 'cors';
import login from './routes/login.mjs';
import hello from './routes/hello.mjs';

// Setup
const app = express()
app.use(cors());

// Routes
app.use(login);
app.use(hello);

// Listen
app.listen(3030);