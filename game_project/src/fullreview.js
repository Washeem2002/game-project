import {React,useContext,useEffect,useState} from "react";

import "./slide.css"
import "./card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faStar,faChevronLeft,faChevronRight,faThumbsUp,faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import star from "./testim/star.jpg"
import Slide from "./slider";
import Brand from "./brand";
import { useParams,useNavigate } from "react-router-dom";
import { Mycontext } from "./context/context";




const FullReview=()=>{
  const navigate=useNavigate();
   
    const id=useParams();
    
    const[data,setdata]=useState([]);
    
    
    const[rview,setrview]=useState([]);
    const[rate,setrate]=useState(0);


    
    useEffect(()=>{
        const rev="cart";
      fetch("/api/gamefind",{
         method:"POST",
         headers:{
           'Content-Type':"application/json"
         },body:JSON.stringify({
           id,rev
         })
       }).then((res)=>{return res.json()}).then((res)=>{setdata(res);setrview(res.review);setrate(res.totalstar===0?0:Math.round(res.totalstar/res.totalreview))})
    },[id])
    
  
    
   
    
    
    return (
        < >
        
        <div className="supcontainer bg-stone-950 py-5 min-h-[calc(100vh-12px)] sm:min-h-[calc(100vh-45px)]">
        {/* <div className="title flex justify-center ml-[2px] mb-[6px]"><span className="w-[1109px] text-[30px]">On Sale</span></div> */}
        <div className="sup-sub w-full flex  flex-col items-center px-[4px]">
    
       
     
        <div className="tim2 subcontainer sm:max-w-[1109px] h-fit w-full pb-2 flex flex-col sm:mt-[30px] sm:mb-[25px] ">
         <div className="w-full border-b-1 mb-2 flex justify-between"><div ><span className="text-white text-[18px] sm:text-[25px]">{data.name}</span></div><div><span className="text-white text-[12] sm:text-[20px]">Rating and Reviews</span></div></div>
         
         <div className="spec-detail w-full h-fit bg-neutral-900 mt-[10px]">
          <div className="pl-4 p-3 text-white text-m border-b-[2px] border-teal-5 w-full flex justify-between">
          <div className="Stars flex ">
               <div className={`star ${rate>=1?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className={`star ${rate>=2?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className={`star ${rate>=3?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className={`star ${rate>=4?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className={`star ${rate>=5?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white ml-2  bg-teal-700 py-[1px] px-[6px] rounded">{rate}<FontAwesomeIcon icon={ faStar}   /></div>

               </div>
               <a><button className="text-white ml-2  bg-teal-700 py-[2px] px-[4px] rounded" onClick={()=>{navigate(`/review?id=${data._id}&name=${data.name}&rate=${rate}`)}}>Rate product</button></a>
               
            
            
            </div>  
         {rview.map((arr,idx)=>{return (<div className="s flex p-[20px] m-[20px] flex-col text-white mt-3 mb-3 border-b-[5px] border-white">
            <div className=" flex items-center  h-fit">
             <div className=" w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] rounded-full bg-teal-900 text-[12px] sm:text-[20px] relative"><FontAwesomeIcon icon={faUser} className="  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></FontAwesomeIcon></div>
             <div className="  text-[19px] pl-[8px] my-auto">{arr.name}</div>
             <div className="  my-auto ml-[10px] text-[12px] sm:text-[20px] px-[5px] bg-teal-900 rounded">{arr.star}<FontAwesomeIcon icon={ faStar}   /></div>

            </div>
            <div className=" revew-detail w-full text-white pl-[35px] mt-[12px]   h-fit ">
             
               <h2 className="mb-[5px] text-lg break-words font-bold">{arr.title}</h2>
               <div className="w-full overflow-hidden break-words px-[10px]">{arr.view}</div>

            </div >
            <div className=" revew-detail w-full text-white pl-[48px] mt-[12px] flex gap-[10px]  h-fit text-[15px] text-white-900">
             <div>{((arr.date).split('T'))[0]}</div>
             <button><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> <span>{arr.like}</span></button>
             <button><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon> <span>{arr.dislike}</span></button>
            </div >



         </div>)})}
         {
          (rview.length===0)&&(
            <div className="s flex p-[20px] m-[20px] flex-col text-white mt-3 mb-3 border-b-[5px] border-white">
            
           
            <div className="w-full text-[25px]">Give a First Review</div>



         </div>
          )
         }
       
         

     
        

         </div>
         
        </div>
        
        </div>
    </div>
   
    

        </>
    )
}
export default FullReview;