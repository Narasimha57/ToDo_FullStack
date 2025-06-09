import mongoose from "mongoose";
import express from 'express'
import cors from 'cors';
import connectDB from "./connectDB.js";
import router from "./routes/CreateUser.js";
const app= express()
const PORT= 5000 || process.env.PORT
app.use(cors());

connectDB()

app.get('/',(req, res)=>{
    res.send("Hello World this is backend")
} )

app.use(express.json())
app.use('/todo/', router)

app.listen(PORT, ()=>console.log(`server listening on ${PORT}`))