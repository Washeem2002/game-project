import Home from "../home";
import Cart from "../cart";
import Gameview from "../games";
import Buy from "../buy";
import Wishlist from "../wishlish";
import Login from "../login";
import Register from "../reguster";
import BrandView from "../brand_view";
import {Routes,Route} from "react-router-dom";
import ResetScroll  from "../resetscroll";
import SearchView from "../search";
import Review from "../review";
import FullReview from "../fullreview";
import Buyknow from "../buyknow";
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