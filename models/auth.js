const mongoose=require('mongoose');
const User=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    cart:{type:Array},
    wishlist:{type:Array},
    buy:{type:Array}
},{collection:"UserData"})
const model=mongoose.model('UserData',User);
module.exports=model