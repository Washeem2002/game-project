const Router=require("express");
const app=Router();
const User=require("../models/auth");

app.post("/user",(req,res)=>{
    User.findOne({_id:req.body.id},{name:1,email:1} ).then((result)=>{ 
     res.json(result);
     
 })});
 module.exports=app;