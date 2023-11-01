const Router=require("express");
const app=Router();
const User = require('../models/auth');
app.post("/api/register",(req,res)=>{
  
    User.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      address:req.body.add,
      cart:[],
      wishlist:[],
      buy:[],
      buy2:[]
    }).then(()=>{ 
      
      User.find({email:req.body.email},{_id:1,name:1,email:1}).then((result)=>{res.json({status:true,tokken1:result})})
    
    
    }).catch((err)=>{ console.log(err);res.json({status:false,tokken:err})})
    });
    module.exports=app;