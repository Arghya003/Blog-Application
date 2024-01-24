const bcrypt =require("bcryptjs")
const User= require("../Model/userSchema");
  const salt = bcrypt.genSaltSync(10);
  const jwt=require("jsonwebtoken")

  const secret = "asdfe45we45w345wegw345werjktjwertkj";

const registerUser= async(req,res)=>{
  
    try{
        const {username,password}=req.body;
        const userDoc=await User.create({username,password:bcrypt.hashSync(password,salt)})
        res.json(userDoc)
        console.log(userDoc)
    }
    catch(e){
        res.status(400).json(e);
    }

}

const loginUser=async (req,res)=>{
     const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  res.json(passOk)
  if (passOk) {
    // logged in
    jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
      if (err) throw err;
   res.cookie("token", token).json({
     id: userDoc._id,
     username,
   });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
}


module.exports={registerUser,loginUser}
