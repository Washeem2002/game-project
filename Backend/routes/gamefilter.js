const {Router}=require('express');
const app=Router();
const game=require('../models/game');
app.post('/game',(req,res)=>{
    const gen=(req.body.gen)||[];
    const sort=req.body.sort;
    const price=parseInt(req.body.price);
    
    let quer=[];
    for (let i=0;i<gen.length;i++)
    {
      if(gen[i]!=="")
      {
        quer.push(gen[i]==="sport_racing"?"sport&racing":gen[i]);
      }
    }
    if(quer.length!=0)
    {
          if(sort==="1" || sort==="2"|| sort==="4")
          { 
          
                const t=sort==="1"?-1:1;
                const p=sort==="4"?0:-1;
                
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
                  $match: {
                    genre: { $all: quer },
                    discount:{$gt:p},
                    discountedPrice:{$lt:price}
                  }
                },
                {$project:{"review":0}},
                {
                  $sort: { discountedPrice: t } // 1 for ascending order, -1 for descending
                }
              ]).then((result)=>{
                
              
              
              res.json(result);
            }).catch((err)=>{
              console.log(err)
            })
          }
      
      else if(sort==="3")
      {
        game.aggregate([
          {
            $addFields:{
              discountedPrice:{
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
            }},
            {
              $match:{
                genre: { $all: quer },
                discountedPrice:{$eq:0}
              }
            },
            {$project:{"review":0}},
          
          ]).then((result)=>{res.json(result)}).catch((err)=>{
            
            console.log(err)
          })
      }
      else{
        game.aggregate([
          {
            $addFields:{
              discountedPrice:{
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
            }},
            {
              $match:{
                genre: { $all: quer },
                discountedPrice:{$lt:price}
              }
            },
            {$project:{"review":0}},
          
          ]).then((result)=>{
              
              res.json(result);
            }).catch((err)=>{
              console.log(err)
            }) 
          }
      
      
      
  }
  else
  {
    if(sort==="1" || sort==="2"|| sort==="4")
  
    { 
      
      const t=sort==="1"?-1:1;
      const p=sort==="4"?0:-1;
      
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
        $match: {
         
          discount:{$gt:p},
          discountedPrice:{$lt:price}
        }
      },
      {$project:{"review":0}},
      {
        $sort: { discountedPrice: t } // 1 for ascending order, -1 for descending
      }
    ]).then((result)=>{
     
    res.json(result);
  }).catch((err)=>{
    console.log(err)
  })}
  
  else if(sort==="3")
  {
    game.aggregate([
      {
        $addFields:{
          discountedPrice:{
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
        }},
        {
          $match:{
            
            discountedPrice:{$eq:0},
            discountedPrice:{$lt:price}
          }
        },
        {$project:{"review":0}},
      
      ]).then((result)=>{res.json(result)}).catch((err)=>{
        console.log(err)
      })
  }
  else{
    game.aggregate([
      {
        $addFields:{
          discountedPrice:{
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
        }},
        {
          $match:{ 
            
            discountedPrice:{$lt:price}
          }
        },
        {$project:{"review":0}},
      
      ]).then((result)=>{
        
        res.json(result);
      }).catch((err)=>{
        console.log(err)
      }) 
  }
  
  }
  });
  module.exports=app;