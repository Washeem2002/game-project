const Router=require("express");
const app=Router();
const User=require("../models/auth");
const game=require("../models/game");
app.post("/review",(req,res)=>{
   const pid=req.body.id2;
   const id1=req.body.id1;
   const title=req.body.title;
   const star=req.body.star;
   const view=req.body.view;

   console.log(pid)
   User.findOne({_id:req.body.id1,"buy2._id":pid}).then((user)=>{
    if(user!==null){

      
     
     game.findOne({"_id":pid,"review._id":id1}).then((result)=>{
      
         if(result===null)
         {
          game.updateOne({"_id":pid},
           {
           $push:{
            review:{
               "_id":id1,
               "star":star,
               "name":user.name,
               "title":title,
               "view":view,
               "like":0,
               "dislike":0,
               "date":new Date()




            }
           },
           $inc: { "totalreview": 1,"totalstar":star } 


           }
          
          
          
          
          
          ).then((result)=>{console.log(result);res.json({status:"true"})})
         }
         else
         {
     
          game.updateOne({"_id":pid,"review._id":id1},
          
          {
          
           $set:{
            "review.$.title":title,
            "review.$.view":view,
            "review.$.like":0,
            "review.$.dislike":0,
            "review.$.date":new Date()
           },
          

          }
          
          
          
          ).then((result)=>{console.log(result);res.json({status:"updated"})}).catch((err)=>{console.log(err)})

         }





     }).catch((err)=>{console.log(err)});
      
      }
   else
   {  console.log("not")
      res.json({status:"false"});
   }
   
   })

    
  
    
 


});
module.exports=app;