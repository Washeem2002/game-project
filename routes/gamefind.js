const Router=require("express");

const app=Router();
const User=require("../models/auth");
const game=require("../models/game");
app.post("/api/gamefind",(req,res)=>{
   const {pid}=req.body.id;
      game.findById({_id:(pid)}).then((result)=>{
         
          res.json(result);
      }).catch((err)=>{
        console.log(err);
      });
  });
  module.exports=app;