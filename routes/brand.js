const {Router}=require('express');
const app=Router();
const game=require('../models/game');
app.get("/api/brand",(req,res)=>{
    const id = req.query.id;
    console.log(id);
    
    game.find({publisher:id}).then((result)=>{res.json(result)}).catch((err)=>{console.log(err)})
  })
  
module.exports=app;