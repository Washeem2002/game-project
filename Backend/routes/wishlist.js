const Router=require("express");
const app=Router();
const User=require("../models/auth");
const game=require("../models/game");
app.post("/api/wishlist",(req,res)=>{
  
  User.updateOne({_id:(req.body.data)},{$addToSet:{wishlist:req.body.id}}).then((result)=>{
   res.json({status:true})
  }).catch((err)=>{res.json({status:false})})
// User.updateOne({ _id: new ObjectId(req.body.data) }, { $push:{cart:"cdsvxf"} });
})
module.exports=app;