const Router=require("express");
const app=Router();
const User=require("../models/auth");
const game=require("../models/game");


app.post("/api/cart",(req,res)=>{
  
    User.updateOne({_id:(req.body.data)},{$addToSet:{cart:req.body.id}}).then((result)=>{
    res.json("ok");
    }).catch((err)=>{res.json(null)})
  // User.updateOne({ _id: new ObjectId(req.body.data) }, { $push:{cart:"cdsvxf"} });
  })
module.exports=app;