const Router=require("express");
const app=Router();

const game=require("../models/game");
app.post("/api/search",(req,res)=>{
    console.log(req.body.field)
    game.aggregate([
        {
          $addFields: {
            lowername: {
              $toLower: "$name" // Use "$name" to reference the "name" field
            }
          }
        },
        {
          $match: {
            lowername: { $regex: req.body.field.toLowerCase() }
          }
        },
        {$project:{"review":0}},
      ]).limit(req.body.limit).then((result)=>{res.json(result)}).catch((err)=>{console.log(err)})
    
  })
module.exports=app;