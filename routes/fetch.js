const {Router}=require('express');
const app=Router();
const game=require('../models/game');
app.post("/fetch",(req,res)=>{
   const genre=req.body.genre;
   console.log(genre)
   if(genre==="Game on Sale")
   {
    game.find().sort({discount:-1}).limit(10).then((result)=>{
        console.log(5);
          res.json(result);
      }).catch((err)=>{
          console.log(err)
      })}
      else if(genre==="Lowest of All")
      {
        game.aggregate([
                
          {
            $addFields: {
              discountedPrice: {
                $subtract: [
                  "$price",
                  {

                    $divide: [
                      { $multiply: ["$price", "$discount"] },
                      100
                    ]




                  }
                ]
              }
            }
          },
          
          {
            $sort: { discountedPrice: 1 } // 1 for ascending order, -1 for descending
          }
        ]).limit(10).then((result)=>{
          console.log(5);
            res.json(result);
        }).catch((err)=>{
            console.log(err)
        })
      }
      else
      {
        
        game.find({genre:genre}).limit(10).then((result)=>{
          console.log(5);
            res.json(result);
        }).catch((err)=>{
            console.log(err)
        })
      }

  });
  module.exports=app;