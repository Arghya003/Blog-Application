const express= require("express");
const app=express();
const PORT=8000;
const dotenv=require('dotenv').config();
const cors=require("cors")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRoutes =require("./Routes/userRoutes")

const connectDb=require("./Db/Db")
connectDb();

app.use("/",userRoutes)
app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
})