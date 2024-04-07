import {React,useContext,useEffect,useState} from "react";

import "../CSS/slide.css"
import "../CSS/card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faStar,faChevronLeft,faChevronRight,faThumbsUp,faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import star from "../testim/star.jpg"
import Slide from "../Components/slider";
import Brand from "./brand";
import { useParams ,useSearchParams,useLocation,useNavigate} from "react-router-dom";
import { Mycontext } from "../context/context";
const Review=()=>{
    const navigate=useNavigate();
    const{mass,setmass}=useContext(Mycontext);
    const[star,setstar]=useState(1);
    const[sstar,setsstar]=useState(1);
    const[name,setname]=useState("");
    const[rate,setrate]=useState(0);
    const[id2,setid2]=useState("");
    const[title,settitle]=useState("");
    const[view,setview]=useState("");
    const [ asd,setSearchParams] = useSearchParams();
    const location = useLocation();
    useEffect(()=>{
         setname(asd.get("name"));
         setrate(asd.get("rate"));
         setid2(asd.get("id"));
    },[location])


    const review=(e)=>{
        e.preventDefault();
        const id1=JSON.parse(localStorage.getItem("tokken1"))===null?null:JSON.parse(localStorage.getItem("tokken1"))._id;
        
        const star=sstar; 
        if(id1!==null){
        fetch("/review",{
           method:"POST",
           headers:{
             'Content-Type':"application/json"
           },body:JSON.stringify({
             id1,id2,star,title,view
           })
         }).then((result)=>{return result.json()}).then((result)=>{
           if(result.status==="true")
           {
            setmass("Thanks for Rating the Game");
           }
           else if(result.status==="updated")
           {
            setmass("Review has beed updated")
           }
           else
           {
            setmass("please buy the game first")
           }
           navigate(-1);


         })}
         else{
          setmass("Sorry!! Please login First");
         }
      }
return(
<>

<div className="supcontainer bg-stone-950 py-1 h-[calc(100vh-12px)] sm:h-[calc(100vh-45px)] overflow-hidden ">
        {/* <div className="title flex justify-center ml-[2px] mb-[6px]"><span className="w-[1109px] text-[30px]">On Sale</span></div> */}
        <div className="sup-sub w-full h-full flex  flex-col items-center px-[4px]">
        
        <div className="tim2 subcontainer sm:max-w-[1109px] h-full w-full pb-2 flex flex-col mt-[5px] mb-[25px] ">
         <div ><span className="text-white text-[20px]">Rating and Reviews</span></div>
        <div className="w-full h-fit ">
        <div className="w-full h-fit p-3 border-b-[5px] flex" ><div className="text-white text-[15px]">{name}</div> <div className=" rate my-auto ml-[10px] text-[16px] px-[3px] text-white bg-teal-900 rounded">{rate}<FontAwesomeIcon icon={ faStar} className="text-[10px] text-white" /></div></div>
        <form className="mt-[3px] flex flex-col" onSubmit={review}>
           <div className="w-full p-2 pb-2 h-fit border-b-[2px]">
            <div className="w-full text-white text-[20px] ">Rate this product</div>
            <div className="Stars flex text-[15px] sm:text-[20px] mt-2 px-[10px]">
               <div className={`star ${star>=1||sstar>=1?"text-green-500":"text-white"} mr-1 w-fit h-fit`}><FontAwesomeIcon icon={ faStar} onClick={()=>{setsstar(1)}}  onMouseOver={()=>{setstar(1)}} onMouseOut={()=>{setstar(0)}}/></div>
               <div className={`star ${star>=2||sstar>=2?"text-green-500":"text-white"} mr-1 w-fit h-fit`}><FontAwesomeIcon icon={ faStar} onClick={()=>{setsstar(2)}}  onMouseOver={()=>{setstar(2)}} onMouseOut={()=>{setstar(0)}}/></div>
               <div className={`star ${star>=3||sstar>=3?"text-green-500":"text-white"} mr-1 w-fit h-fit`}><FontAwesomeIcon icon={ faStar}  onClick={()=>{setsstar(3)}} onMouseOver={()=>{setstar(3)}} onMouseOut={()=>{setstar(0)}}/></div>
               <div className={`star ${star>=4||sstar>=4?"text-green-500":"text-white"} mr-1 w-fit h-fit`}><FontAwesomeIcon icon={ faStar} onClick={()=>{setsstar(4)}}  onMouseOver={()=>{setstar(4)}} onMouseOut={()=>{setstar(0)}}/></div>
               <div className={`star ${star>=5||sstar>=5?"text-green-500":"text-white"} mr-1 w-fit h-fit`}><FontAwesomeIcon icon={ faStar}  onClick={()=>{setsstar(5)}} onMouseOver={()=>{setstar(5)}} onMouseOut={()=>{setstar(0)}}/></div>
               
      
              

               </div>
           </div>
           <div className="w-full p-2 pb-2 flex-1 h-full ">
            <div className="w-full text-white text-[20px] ">Review this product</div>
            <div className="w-full p-2 pb-2 h-fit">
            <div className="w-full text-[15px] text-white mb-[2px]">Title</div>
            <input className="w-full text-sm  text-white mb-[20px] outline-none bg-transparent  p-2.5" type="text" placeholder="Review title..." onChange={(e)=>{settitle(e.target.value)}} required></input>
            <div className="w-full text-[15px] text-white mb-[2px] ">Discription</div>
            <textarea  rows="4" class="block p-2.5 w-full text-sm text-white bg-transparent  outline-none resize-none" placeholder="Discription..." onChange={(e)=>{setview(e.target.value)}}></textarea>
            </div>
            
           </div>
           <button  className=" w-full  text-center  static   pt-[10px] pb-[10px]  rounded font-[500] text-lg text-white  border border-white-500" type="submit" >
                      Submit
                    </button>
        </form>

        </div>
         
        </div>
        
        </div>
    </div>
</>



)


};
export default Review;