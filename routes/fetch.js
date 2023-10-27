const {Router}=require('express');
const app=Router();
const game=require('../models/game');
app.get("/fetch",(req,res)=>{
    game.aggregate([
      {
        $match: {
          genre: { $all: ['action', 'adventure'] }
        }
      },
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
  });
  module.exports=app;