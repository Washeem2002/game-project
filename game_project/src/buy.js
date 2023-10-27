import {React,useEffect,useState} from "react";

import "./slide.css"
import "./card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faStar,faChevronLeft,faChevronRight,faThumbsUp,faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import star from "./testim/star.jpg"
import Slide from "./slider";
import Brand from "./brand";
import { useParams } from "react-router-dom";




const Buy=()=>{
    const id=useParams();
    const[show,setshow]=useState(false);
    const[i,seti]=useState(0);
    const[data,setdata]=useState([]);
    const[imgdata,setimgdata]=useState([]);
    const[gen,setgen]=useState("");
    useEffect(()=>{
      fetch("/api/gamefind",{
         method:"POST",
         headers:{
           'Content-Type':"application/json"
         },body:JSON.stringify({
           id
         })
       }).then((res)=>{return res.json()}).then((res)=>{setdata(res);setimgdata(res.img2);return res}).then((res)=>{
         
         const tim=res.genre;
         var st="";
         for(var i=0;i<tim.length;i++)
         {
            st+=(tim[i]+",");
         }
         setgen(st)
         
         });
       
    },[])
    const wishlish =(id)=>{
      const data=JSON.parse(localStorage.getItem("tokken1"))._id;

      fetch("/api/wishlist",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },body:JSON.stringify({
          data,id
        })
      })
    }
    const cart =(id)=>{
      const data=JSON.parse(localStorage.getItem("tokken1"))._id;

      fetch("/api/cart",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },body:JSON.stringify({
          data,id
        })
      })
    }
    
    
    return (
        < >
        
        <div className="supcontainer bg-stone-950 py-5 ">
        {/* <div className="title flex justify-center ml-[2px] mb-[6px]"><span className="w-[1109px] text-[30px]">On Sale</span></div> */}
        <div className="sup-sub w-full flex  flex-col items-center px-[4px]">
        <div className=" tim subcontainer sm:max-w-[1109px] flex  ">
            <div className="imag w-fit  h-fit overflow-hidden  relative sm:rounded-[20px] relative shrink-0"  >
           
                 <div className="imgt h-full overflow-hidden  "><img src={`${imgdata[i]}`}  className="image-asp w-[800px] max-h-[450px]" alt=""/></div> 
                <div className="absolute h-full bg-transparent top-[50%] translate-y-[-50%] w-[60px] " onClick={(e)=>{e.preventDefault();seti((i-1)<0?imgdata.length-1:i-1)}} ><div className="relative w-full h-full bg-transparent text-white text-[35px]"><div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></div></div></div>
                <div className="absolute h-full bg-transparent top-[50%] translate-y-[-50%] w-[60px] right-[0]" onClick={(e)=>{e.preventDefault();seti((i+1)%(imgdata.length))}}><div className="relative w-full h-full bg-transparent text-white text-[35px]"><div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></div></div></div>
                
                
            </div>
        
         <div className=" buy-detail sm:ml-[20px] min-h-[370px]  flex w-[300px]  ">
            <div className="product-detail flex flex-col  w-full justify-between">
               <div className="sm:ml-2 flex-1">
               <div className="title  h-fit tracking-wide text-2xl font-semibold text-white ">{data.name}</div>
               <div className="Stars flex ">
               <div className="star text-white mr-1"><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white mr-1"><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white mr-1"><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white mr-1"><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white mr-1"><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white ml-2  bg-teal-700 py-[2px] px-[4px] rounded">4.5</div>

               </div>
                <div className="discription py-[2px]  ">
                  <div className="text-white flex pb-[4px] justify-between dis-text  border-b border-white-500 b"><span>Developer</span><span>{data.publisher}</span></div>
                  <div className="text-white flex pb-[4px] justify-between dis-text   border-b border-white-500 b"><span>Relese Date</span><span>22/2/2018</span></div>
                  <div className="text-white flex  pb-[4px] justify-between dis-text  border-b border-white-500 b"><span>Platform</span><span>Windows/PS5/XBOX</span></div>
                  
                 
                
                  

               </div> 
               </div>
               <div className="sm:ml-2">
                  <div className="model p-[1px] text-[15px] h-fit w-fit bg-teal-800 rounded">Base game</div>
                  <div className="pric flex items-center bg-transparent"><div className=" bg-transparent prices flex-grow flex gap-2 "><span className=" bg-transparent text-slate-400 line-through   font-[200] " >₹{data.price}</span><span className="bg-transparent font-[200] text-white ">₹{data.price-(data.price*data.discount/100)}</span><span className="bg-transparent font-[200] px-2 text-white bg-teal-700 rounded">{data.discount}% </span></div></div>
                  <button className=" w-full  text-center  static  mt-2 pt-[10px] pb-[10px] rounded font-[500] text-lg text-white border border-white-500 bg-blue-700">
                       BUY
                    </button>
                    <button  className=" w-full  text-center  static  mt-2 pt-[10px] pb-[10px]  rounded font-[500] text-lg text-white  border border-white-500" onClick={()=>{cart(data._id)}}>
                       CART
                    </button>
                    <button  className="text-lg w-full  text-center  static  mt-2 pt-[10px] pb-[10px] rounded font-[500] text-white  border border-white-500" onClick={()=>{wishlish(data._id)}}>
                       WISHLIST
                    </button>
               </div>
            </div>
        </div> 
        </div>
        <div className="tim2 subcontainer sm:max-w-[1109px] h-fit w-full pb-2 flex flex-col mt-[30px] ">
         <div ><span className="text-white text-[20px]">About</span></div>
         <div className="spec-detail w-full h-fit bg-neutral-900 mt-[10px]">
           <div className="s flex p-3 text-white mt-3 mb-3"><div className="genr flex-1 border-l-2 border-teal-6 pl-4 min-w-[50px]"><div className="text-teal-200 ">Genre</div><div className="break-words">{gen}</div></div><div className="genr flex-1 border-l-2 border-teal-6 pl-4"><div className="text-teal-200">Feartures</div><div className="text-ellipsis">Singleplayer,Co-ops </div></div></div>
     {  (show) &&  (<div className=" flex flex-col p-3 text-white"><div className="name mb-1 text-lg">{data.name}</div>
          <div>
          After crash-landing on this shape-shifting world, Selene must search through the barren landscape of an ancient civilization for her escape. Isolated and alone, she finds herself fighting tooth and nail for survival. Again and again, she’s defeated – forced to restart her journey every time she dies.
Through fast, relentless gameplay, you’ll discover that just as the planet changes with every cycle, so do the items at your disposal. Every loop offers new combinations, empowering you to push your boundaries and approach combat with a different strategy each time.
Brought to life by stunning visual effects, the dark beauty of the decaying world around you is packed with explosive surprises. From high stakes, bullet hell-fuelled combat, to jaw-dropping twists and turns set across stark and contrasting environments. You’ll explore, discover and fight your way through an unforgiving journey, where mystery stalks your every move.
Designed for extreme replayability, the procedural world of Returnal invites you to dust yourself off in the face of defeat and take on new, evolving challenges with every rebirth.
          </div>
         
         </div>)}

         </div>
         <button  className=" w-full  text-center  static   pt-[10px] pb-[10px]  rounded font-[500] text-lg text-white  border border-white-500" onClick={()=>{setshow(!show)}}>
                       {show?"SHOW LESS":"SHOW MORE"}
                    </button>
        </div>
        <div className="tim2 subcontainer sm:max-w-[1109px] h-fit w-full pb-2 flex flex-col mt-[30px] ">
         <div ><span className="text-white text-[20px]">Specs</span></div>
         <div className="spec-detail w-full h-fit bg-neutral-900 mt-[10px]">
          <div className="pl-4 p-3 text-white text-m border-b-[2px] border-teal-5 w-full">Windows</div>  
         <div className="s flex p-3 text-white mt-3 mb-3"><div className="genr flex-1  pl-4"><div className="text-teal-200 ">Minimum</div></div><div className="genr flex-1  pl-4"><div className="text-teal-200">Recomended</div></div></div>
     
           <div className="s flex p-3 text-white mt-2 mb-2"><div className="genr flex-1  pl-4"><div className="text-teal-200 ">OS</div><div>Windows 10 64-bit</div></div><div className="genr flex-1  pl-4"><div className="text-teal-200">OS</div><div>Windows 10 64-bit </div></div></div>
           <div className="s flex p-3 text-white mt-2 mb-2"><div className="genr flex-1  pl-4"><div className="text-teal-200 ">Processor</div><div>Intel Core i3-4160, 3.6 GHz or AMD equivalent</div></div><div className="genr flex-1  pl-4"><div className="text-teal-200">Processor</div><div>Intel Core i5-4670, 3.4 Ghz or AMD Ryzen 5 1600, 3.2 Ghz</div></div></div>
           <div className="s flex p-3 text-white mt-2 mb-2"><div className="genr flex-1  pl-4"><div className="text-teal-200 ">Memory</div><div>8 GB RAM</div></div><div className="genr flex-1  pl-4"><div className="text-teal-200">Memory</div><div>16 GB RAM </div></div></div>
           <div className="s flex p-3 text-white mt-2 mb-2"><div className="genr flex-1  pl-4"><div className="text-teal-200 ">Storage</div><div>75 GB HDD space</div></div><div className="genr flex-1  pl-4"><div className="text-teal-200">Storage</div><div>75 GB SDD space</div></div></div>
           <div className="s flex p-3 text-white mt-2 mb-2"><div className="genr flex-1  pl-4"><div className="text-teal-200 ">Graphics</div><div>NVIDIA GTX 950 or AMD Radeon RX 470</div></div><div className="genr flex-1  pl-4"><div className="text-teal-200">Graphics</div><div>NVIDIA GTX 1060 6GB or AMD Radeon RX 580 8GB</div></div></div>
           <div className="s flex p-3 text-white mt-2 mb-2"><div className="genr flex-1  pl-4"><div className="text-teal-200 ">Languages Supported</div><div>AUDIO: English, French, Italian, German, Spanish - Spain, Portuguese, Polish, Russian, Portuguese - Brazil, Spanish - Latin America, Japanese, Arabic<br></br>
TEXT: Chinese - Simplified, Chinese - Traditional, Czech, Dutch, Greek, Hungarian, Danish, Finnish, Norwegian, Swedish, Korean</div></div></div>

         </div>
         
        </div>
        <div className="tim2 subcontainer sm:max-w-[1109px] h-fit w-full pb-2 flex flex-col mt-[30px] mb-[25px] ">
         <div ><span className="text-white text-[20px]">Rating and Reviews</span></div>
         <div className="spec-detail w-full h-fit bg-neutral-900 mt-[10px]">
          <div className="pl-4 p-3 text-white text-m border-b-[2px] border-teal-5 w-full flex justify-between">
          <div className="Stars flex text-sm">
               <div className="star text-white mr-1"><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white mr-1"><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white mr-1"><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white mr-1"><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white mr-1"><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white ml-2  bg-teal-700 py-[2px] px-[4px] rounded">4.5</div>

               </div>
               <a><button className="text-white ml-2  bg-teal-700 py-[2px] px-[4px] rounded">Rate product</button></a>
               
            
            
            </div>  
         <div className="s flex p-[20px] m-[20px] flex-col text-white mt-3 mb-3 border-b-[5px] border-white">
            <div className="profile flex items-center  h-fit">
             <div className=" icon w-[40px] h-[40px] rounded-full bg-teal-900 text-[20px] relative"><FontAwesomeIcon icon={faUser} className=" icon2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></FontAwesomeIcon></div>
             <div className=" name text-[19px] pl-[8px] my-auto">Mohd washeem</div>
             <div className=" rate my-auto ml-[10px] text-[20px] px-[5px] bg-teal-900 rounded">4.5</div>

            </div>
            <div className=" revew-detail w-full text-white pl-[48px] mt-[12px]   h-fit ">
             
               <h2 className="mb-[5px] text-lg break-words font-bold">HELL yeh!</h2>
               <div className="w-full overflow-hidden break-words">dfhjuksdfhuidsfhglkfhdsjlksdfffffffffffffffffffffffffffffffffffffffffffffffffffffff</div>

            </div >
            <div className=" revew-detail w-full text-white pl-[48px] mt-[12px] flex gap-[10px]  h-fit text-[15px] text-white-900">
             <div>12/12/23</div>
             <button><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> <span>500</span></button>
             <button><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon> <span>500</span></button>
            </div >



         </div>
         <div className="s flex p-[20px] m-[20px] flex-col text-white mt-3 mb-3 border-b-[5px] border-white">
            <div className="profile flex items-center  h-fit">
             <div className=" icon w-[40px] h-[40px] rounded-full bg-teal-900 text-[20px] relative"><FontAwesomeIcon icon={faUser} className=" icon2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></FontAwesomeIcon></div>
             <div className=" name text-[19px] pl-[8px] my-auto">Mohd washeem</div>
             <div className=" rate my-auto ml-[10px] text-[20px] px-[5px] bg-teal-900 rounded">4.5</div>

            </div>
            <div className=" revew-detail w-full text-white pl-[48px] mt-[12px]   h-fit ">
             
               <h2 className="mb-[5px] text-lg break-words font-bold">HELL yeh!</h2>
               <div className="w-full overflow-hidden break-words">dfhjuksdfhuidsfhglkfhdsjlksdfffffffffffffffffffffffffffffffffffffffffffffffffffffff</div>

            </div >
            <div className=" revew-detail w-full text-white pl-[48px] mt-[12px] flex gap-[10px]  h-fit text-[15px] text-white-900">
             <div>12/12/23</div>
             <button><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> <span>500</span></button>
             <button><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon> <span>500</span></button>
            </div >



         </div>
         <div className="s flex p-[20px] m-[20px] flex-col text-white mt-3 mb-3 border-b-[5px] border-white">
            <div className="profile flex items-center  h-fit">
             <div className=" icon w-[40px] h-[40px] rounded-full bg-teal-900 text-[20px] relative"><FontAwesomeIcon icon={faUser} className=" icon2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></FontAwesomeIcon></div>
             <div className=" name text-[19px] pl-[8px] my-auto">Mohd washeem</div>
             <div className=" rate my-auto ml-[10px] text-[20px] px-[5px] bg-teal-900 rounded">4.5</div>

            </div>
            <div className=" revew-detail w-full text-white pl-[48px] mt-[12px]   h-fit ">
             
               <h2 className="mb-[5px] text-lg break-words font-bold">HELL yeh!</h2>
               <div className="w-full overflow-hidden break-words">dfhjuksdfhuidsfhglkfhdsjlksdfffffffffffffffffffffffffffffffffffffffffffffffffffffff</div>

            </div >
            <div className=" revew-detail w-full text-white pl-[48px] mt-[12px] flex gap-[10px]  h-fit text-[15px] text-white-900">
             <div>12/12/23</div>
             <button><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> <span>500</span></button>
             <button><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon> <span>500</span></button>
            </div >



         </div>
         <div className="s flex p-[20px] m-[20px] flex-col text-white mt-3 mb-3 border-b-[5px] border-white">
            <div className="profile flex items-center  h-fit">
             <div className=" icon w-[40px] h-[40px] rounded-full bg-teal-900 text-[20px] relative"><FontAwesomeIcon icon={faUser} className=" icon2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></FontAwesomeIcon></div>
             <div className=" name text-[19px] pl-[8px] my-auto">Mohd washeem</div>
             <div className=" rate my-auto ml-[10px] text-[20px] px-[5px] bg-teal-900 rounded">4.5</div>

            </div>
            <div className=" revew-detail w-full text-white pl-[48px] mt-[12px]   h-fit ">
             
               <h2 className="mb-[5px] text-lg break-words font-bold">HELL yeh!</h2>
               <div className="w-full overflow-hidden break-words">dfhjuksdfhuidsfhglkfhdsjlksdfffffffffffffffffffffffffffffffffffffffffffffffffffffff</div>

            </div >
            <div className=" revew-detail w-full text-white pl-[48px] mt-[12px] flex gap-[10px]  h-fit text-[15px] text-white-900">
             <div>12/12/23</div>
             <button><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> <span>500</span></button>
             <button><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon> <span>500</span></button>
            </div >



         </div>
         <button  className=" w-full  text-center  static   pt-[10px] pb-[10px]  rounded font-[500] text-lg text-white  border border-white-500" >
                       View All Reviews
                    </button>

     
        

         </div>
         
        </div>
        <Slide/>
        </div>
    </div>
   
    

        </>
    )
}
export default Buy;