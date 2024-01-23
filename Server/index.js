const express= require("express");
const app=express();
const PORT=8000;
const dotenv=require('dotenv').config();
const cors=require("cors")
app.use(cors());
app.use(express.json());

const connectDb=require("./Db/Db")
connectDb();

app.post("/register",(req,res)=>{
    const{username,password}=req.body;
res.json({requestData:{username,password}})
})
app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
})