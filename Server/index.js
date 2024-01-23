const express= require("express");
const app=express();
const PORT=8000;


app.get("/",(req,res)=>{
    res.send("Welcome to the Blog Application")
})
app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
})