const mongoose=require('mongoose');
const game=new mongoose.Schema({
    
    "name": String,
    "price": Number,
    "discount": Number,
    "dateofrel": Number,
    "img": String
  },{collection:"game-data"});
  const model=mongoose.model('game-data',game);
module.exports=model