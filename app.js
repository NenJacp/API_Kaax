import database from './src/core/database.js';
import usersRouter from './src/modules/Users/users.routes.js';
import plantsRouter from './src/modules/Plants/plants.routes.js';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

database();

app.use(express.json());

app.use('/kaax/users', usersRouter);
app.use('/kaax/plants', plantsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log('escuchando en puerto ', PORT
    )
})