const Router=require("express");
const app=Router();

const User=require("../models/auth");
const game=require("../models/game");
app.post("/api/buyknow",(req,res)=>{

    const id=req.body.data;
    User.findOne({_id:id},{buy:1}).then((result)=>{
     game.find({_id:{$in:result.buy}},{"review":0,img2:0}).then((resu)=>{console.log(resu);res.json(resu)})
    });
  });
  module.exports=app;