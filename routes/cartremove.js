const Router=require("express");
const app=Router();
const User=require("../models/auth");
const game=require("../models/game");
app.post("/api/cart_remove",(req,res)=>{
    console.log(req.body.user_id)
    User.updateOne({_id:(req.body.user_id)},{$pull:{cart:req.body.id}}).then((result)=>{ console.log(4);res.json({"status":result.acknowledged})})
  })
module.exports=app;  