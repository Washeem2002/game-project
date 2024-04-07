const Router=require("express");
const app=Router();
const User=require("../models/auth");
const game=require("../models/game");
app.post("/api/wishlist_find",(req,res)=>{
  
    User.findOne({_id:req.body.user_id},{wishlist:1}).then((result)=>{
       
     game.find({_id:{$in:result.wishlist}},{"review":0}).then((resu)=>{res.json(resu)})
    }).catch((err)=>{res.json(null)});
  })
module.exports=app;