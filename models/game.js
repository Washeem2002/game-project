const { ObjectId } = require('mongodb');
const mongoose=require('mongoose');
const review=new mongoose.Schema({
  "_id":{type:String},
  "name":{type:String},
  "star":{type:Number},
  "title":{type:String},
  "view":{type:String},
  "like":{type:Number},
  "dislike":{type:Number},
  "date":{type:Date}
})
const game=new mongoose.Schema({
    "img2":{type:Array},
    "name": {type:String},
    "price": {type:Number},
    "discount":{type: Number},
    "dateofrel": {type:Date},
    "totalstar":{type:Number,default:0},
    "totalreview":{type:Number,default:0},
    "img": {type:String},
    "publisher":{type:String},
    "genre":{type:Array},
    "review":[review]
  },{collection:"game-data"});
  const model=mongoose.model('game-data',game);
module.exports=model