const Router=require("express");
const app=Router();
const User=require("../models/auth");
const game=require("../models/game");


app.post("/api/buy",(req,res)=>{
  console.log(req.body.data);
     if(req.body.id!="cart")
     {
        User.updateOne({_id:(req.body.data)},{$addToSet:{buy:req.body.id,"buy2":{_id:req.body.id}}}).then((result)=>{
          console.log(result);
           game.updateOne({_id:req.body.id}, {$inc: { buy: 1 }}).then((result)=>{res.json({"status":result.acknowledged})}).catch((err)=>{console.log(err)})


            
           }).catch((err)=>{ console.log(err);res.json({status:false})}) 
    
    }
    else
    {
      // start
      
     console.log(req.body.data)

      User.findOne({_id:req.body.data},{cart:1}).then((result)=>{
        const object=(result.cart).map((value)=>{
            return {_id:value}
        })
        User.updateOne({_id:(req.body.data)},{$addToSet:{buy:{ $each: result.cart },"buy2":{ $each: object }}}).then((resu)=>{
          console.log(result)
           game.updateMany({_id:{$in:result.cart}},{$inc:{buy:1}}).then((result)=>{res.json({"status":result.acknowledged})}).catch((err)=>{res.json({status:false})})
          
            
           }).catch((err)=>{res.json({status:false})})

       }).catch((err)=>{console.log(err);res.json({status:false})});






      //end

    }
  // User.updateOne({ _id: new ObjectId(req.body.data) }, { $push:{cart:"cdsvxf"} });
  })
module.exports=app;