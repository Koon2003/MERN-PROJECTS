//console.log("21/4/2024");
//import { sum } from "./calculations.js";
//
//console.log(`3 plus 2 is ${sum(3, 2)}`);

import express from 'express';
import * as dotenv from 'dotenv';
import { usersRouter, studentsRouter } from './routes/index.js';
import dbConnect from './database/database.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Route
app.use(express.json());
app.use('/users', usersRouter);
app.use('/students', studentsRouter);

app.get('/', (req, res) => {
    res.send("Response from root route, HAHA");
});

app.listen(port, async (req, res) => {
    await dbConnect();
    console.log(`App is listening to port: ${port}`);
});
