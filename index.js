import express from 'express';
import connect from './src/config/database.js';

import router from './src/routes/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app=express();

const PORT=process.env.PORT;


app.use(express.urlencoded({ extended:false}));

app.use(express.json());

app.use('/api',router);
app.all('*',(req,res)=>{
    res.status(404).send('page not found')
})
app.listen(PORT,async()=>{
    connect();
});