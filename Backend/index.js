const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');
const path=require('path');
require('dotenv').config();
const fetch=require("./routes/fetch");
const gamefilter=require("./routes/gamefilter");
const register=require("./routes/register");
const login=require("./routes/login");
const cart=require("./routes/cart");
const cartfind=require("./routes/cartfind");
const cart_remove=require("./routes/cartremove");
const wishlist=require("./routes/wishlist");
const wishlist_find=require("./routes/wishlistfind");
const wishlist_remove=require("./routes/wishlistremove");
const brand=require("./routes/brand");
const search=require("./routes/search");
const gamefind=require("./routes/gamefind");
const review=require("./routes/review");
const buy=require("./routes/buy");
const buyknpw=require("./routes/buyknow");
const user=require("./routes/userdata")
const PORT=process.env.PORT || 3001;

const app=express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use("/image",express.static(path.join(__dirname,"./image")));
app.use("/image2",express.static(path.join(__dirname,"./image/gameimg")));

mongoose.connect(process.env.MONGO_URL,{dbName:"games"}).then(()=>{console.log("connected")})

  

app.use(fetch);
app.use(gamefilter);
app.use(register);
app.use(login);
app.use(cart);
app.use(cartfind);
app.use(cart_remove);
app.use(wishlist);
app.use(wishlist_find);
app.use(wishlist_remove);
app.use(brand);
app.use(search);
app.use(gamefind);
app.use(review);
app.use(buy);
app.use(buyknpw);
app.use(user);
app.use(express.static(path.join(__dirname,"../Frontend/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Frontend/build/index.html"));
})
app.listen(PORT,()=>{
    console.log("server is running")
})