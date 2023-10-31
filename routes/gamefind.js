const Router=require("express");

const app=Router();
const User=require("../models/auth");
const game=require("../models/game");
app.post("/api/gamefind",(req,res)=>{
   const {pid}=req.body.id;
   const rev=req.body.rev||"no";
   if(rev==="no")
   {
      game.findById({_id:(pid)},{"review":{$slice:5}}).then((result)=>{
         
         console.log(result)
          res.json(result);
      }).catch((err)=>{
        console.log(err);
      });
   }
   else
   {
      game.findById({_id:(pid)},{name:1,totalreview:1,totalstar:1,review:1,_id:1}).then((result)=>{
         
         console.log(result)
          res.json(result);
      }).catch((err)=>{
        console.log(err);
      });
   }
      
  });
  module.exports=app;