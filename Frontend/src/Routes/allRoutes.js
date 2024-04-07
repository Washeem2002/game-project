import Home from "../pages/home";
import Cart from "../pages/cart";
import Gameview from "../pages/games";
import Buy from "../pages/buy";
import Wishlist from "../pages/wishlish";
import Login from "../pages/login";
import Register from "../pages/register";
import BrandView from "../pages/brand_view";
import {Routes,Route} from "react-router-dom";
import ResetScroll  from "../Components/resetscroll";
import SearchView from "../Components/search";
import Review from "../pages/review";
import FullReview from "../pages/fullreview";
import Buyknow from "../pages/buyknow";
const ALLRoutes=()=>{
    return(
        <>
        <ResetScroll>
         <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/buy/:pid" element={<Buy/>}></Route>
            <Route path="/genra" element={<Gameview/>}></Route>
            <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
            <Route path="/login" exact element={<Login/>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/brand/:id" element={<BrandView></BrandView>}></Route>
            <Route path="/search" element={<SearchView></SearchView>}></Route> 
            <Route path="/review" element={<Review></Review>}></Route> 
            <Route path="/treview/:pid" element={<FullReview></FullReview>}></Route> 
            <Route path="/buyknow" element={<Buyknow></Buyknow>}></Route>

         </Routes>
        </ResetScroll>
        
        </>
    )

}
export default ALLRoutes;