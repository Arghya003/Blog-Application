const express=require("express");
const Router=express.Router();
const {registerUser} = require("../Controller/userController")




Router.post("/register",registerUser)

module.exports=Router;