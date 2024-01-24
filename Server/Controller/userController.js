
const User= require("../Model/userSchema");


const registerUser= async(req,res)=>{
    try{
        const {username,password}=req.body;
        const userDoc=await User.create({username,password})
        res.json(userDoc)
        console.log(userDoc)
    }
    catch(e){
        res.status(400).json(e);
    }

}


module.exports={registerUser}
