import {React,useEffect,useState,useRef} from "react";
import "./extra.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus,faCartShopping,faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons";
import ea from "./logo/EA_logo_logotype.png";
import pysonic from "./logo/psyonics.png";
import xbox from "./logo/Xbox_Game_Studios.svg.png"
import ubisoft from "./logo/ubisoft-black.avif"
import bill from "./logo/bill.avif"
import rem from "./logo/remedy_new_logo.jpg"
import k from "./logo/2kgames.avif"
import { Link } from "react-router-dom";
const Brand=()=>{
    const data=[{name:"ea",logo:ea,deals:"17"},{name:"psyonic",logo:pysonic,deals:"2"},{name:"microsoft",logo:xbox,deals:"3"},{name:"ubisoft",logo:ubisoft,deals:"23"},{name:"Bllizzard",logo:bill,deals:"10"},{name:"remedy",logo:rem,deals:"20"},{name:"2k",logo:k,deals:"33"}]
    const [isDragging,setisDragging]=useState(false);
    const [startX,setstartX]=useState(0);
    const [scrollleft,setscrollleft]=useState(0);
    const [move,setmove]=useState(0);
    const[link,setlink]=useState(true);
    const[link2,setlink2]=useState(false);
    const ref=useRef();
    const ref2=useRef();
    const[sc,setsc]=useState(false)
    const p=(e)=>{
        setisDragging(true);
        setstartX(e.pageX-ref.current.offsetLeft);
        setscrollleft(ref.current.scrollLeft);
        console.log(ref2.current.offsetWidth);
        setlink2(true);
        setlink(true);

    }
    const q=(e)=>{
        if(!isDragging) return;
        e.preventDefault();
        const x=e.pageX-ref.current.offsetLeft;
        const scroll=x-startX;
        ref.current.scrollLeft=scrollleft-scroll;
        setmove(scrollleft-scroll);
        setlink(false);
    }
    const r=(e)=>{
      e.preventDefault()
      if(link===false)
      {
        setlink2(false);
      }
        setisDragging(false);
        let t=0;
        if(ref.current.scrollLeft%ref2.current.offsetWidth>ref2.current.offsetWidth/2)
        {
          t=(ref2.current.offsetWidth-ref.current.scrollLeft%ref2.current.offsetWidth);
        }
        else
        {
          t=-1*(ref.current.scrollLeft%ref2.current.offsetWidth);
        }
        ref.current.scrollTo({
            left: ref.current.scrollLeft +t,
            behavior: 'smooth',
          });
    }
    const s=()=>{
        let t=0;
        if(ref.current.scrollLeft%ref2.current.offsetWidth>ref2.current.offsetWidth/2)
        {
          t=(ref2.current.offsetWidth-ref.current.scrollLeft%ref2.current.offsetWidth);
        }
        else
        {
          t=-1*(ref.current.scrollLeft%ref2.current.offsetWidth);
        }
        ref.current.scrollTo({
            left: ref.current.scrollLeft +t,
            behavior: 'smooth',
          });
    }
    
    const left=(e)=>{
        e.preventDefault();
        // if(set<0)
        // {
            
        //     setset(set+1);
        //     console.log(set);
        // }
        ref.current.scrollTo({
            left: ref.current.scrollLeft +ref2.current.offsetWidth,
            behavior: 'smooth',
          });

    }
    const right=(e)=>{
      e.preventDefault();
        ref.current.scrollTo({
            left: ref.current.scrollLeft -ref2.current.offsetWidth,
            behavior: 'smooth',
          });

    }
    const rt=(e)=>{
      e.preventDefault();
      let t=0;
        if(ref.current.scrollLeft%ref2.current.offsetWidth>ref2.current.offsetWidth/2)
        {
          t=(ref2.current.offsetWidth-ref.current.scrollLeft%ref2.current.offsetWidth);
        }
        else
        {
          t=-1*(ref.current.scrollLeft%ref2.current.offsetWidth);
        }
        ref.current.scrollTo({
            left: ref.current.scrollLeft +t,
            behavior: 'smooth',
          });
    }
  
    return(
        <div className="container-ben w-full py-2 flex flex-col items-center  pb-5 text-white" onMouseMove={(e)=>{e.preventDefault()}}>
           <div className="gent  w-full sm:max-w-[1109px] mb-4 flex items-center "><div className="naam flex-1 text-[20px]">Official parteners</div><div className="cross-buoon text-[10px]"><FontAwesomeIcon icon={faAngleLeft} className="text-[20px] btn bg-blue-700 py-[9px] px-[12px] rounded-[50%] mr-2 "  onClick={right}   /><FontAwesomeIcon icon={faAngleRight} className="text-[20px] bg-blue-700 py-[9px] px-[12px] rounded-[50%]" onClick={left} /></div></div> 
        <div ref={ref} onMouseDown={p} onMouseMove={q} onMouseUp={r} onMouseLeave={r} onTouchEnd={(e)=>{sc?rt(e):console.log("false");setsc(false)}} onScrollCapture={(e)=>{setsc(true)}} className="ben-sub w-full max-w-[1109px] bg-black flex overflow-x-scroll no-scrollbar">
            {
                data.map((idx)=>{
                   return(
                    <div ref={ref2} className="logo w-[260px] h-[110px] relative pr-[10px] flex justify-center bg-white-800  border-3 border-blue-800" >
               <Link to={link2?`/brand/${idx.name}`:null}> <div className="logo-size w-[240px] h-[110px] flex justify-center items-center bg-white rounded-[6px] "><img src={idx.logo} className="bg-transparent w-[130px] h-[30px]" alt="" /></div></Link>
                
                
            </div>
                   )
                })
            }
            
            
           



        </div>
    </div>
    )
}
export default Brand;