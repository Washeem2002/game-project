const Router=require("express");
const app=Router();
const User=require("../models/auth");
const game=require("../models/game");
app.post("/api/wishlist_find",(req,res)=>{
    User.findOne({_id:req.body.user_id},{wishlist:1}).then((result)=>{
        console.log(123);
     game.find({_id:{$in:result.wishlist}}).then((resu)=>{res.json(resu)})
    });
  })
module.exports=app;