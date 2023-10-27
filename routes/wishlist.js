const Router=require("express");
const app=Router();
const User=require("../models/auth");
const game=require("../models/game");
app.post("/api/wishlist",(req,res)=>{
  console.log(req.body)
  User.updateOne({_id:(req.body.data)},{$addToSet:{wishlist:req.body.id}}).then((result)=>{
   
  }).catch((err)=>{console.log(err)})
// User.updateOne({ _id: new ObjectId(req.body.data) }, { $push:{cart:"cdsvxf"} });
})
module.exports=app;