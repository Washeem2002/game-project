const Router=require("express");
const app=Router();

const User=require("../models/auth");
const game=require("../models/game");
app.post("/api/cart_find",(req,res)=>{

 
    User.findOne({_id:req.body.id},{cart:1}).then((result)=>{
     game.find({_id:{$in:result.cart}},{"review":0}).then((resu)=>{console.log(3);res.json(resu)})
    });
  });
  module.exports=app;