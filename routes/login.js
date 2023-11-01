const Router=require("express");
const app=Router();
const User=require("../models/auth");

app.post("/api/login",(req,res)=>{
    User.findOne({email:req.body.email,password:req.body.password},{_id:1,name:1,email:1} ).then((result)=>{ 
     
     if(result!=null){
        console.log(result)
     res.json({status:true,tokken1:result})
}
    else
    {
        
     res.json({status:false,tokken1:result})
    }
 })});
 module.exports=app;