import React, { useEffect, useState,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import { Mycontext } from "./context/context";
const Toast=()=>{
    const {mass,setmass}=useContext(Mycontext);
    const [on,seton]=useState(false);
    useEffect(()=>{
        
         const time=setTimeout(()=>{
            setmass("");
         },3000)
         return(()=>{
            clearTimeout(time);
         })
    },[mass]);
    
    return(
        <>{(mass.length!=0)&&(<div className={`w-[270px] h-[40px]  absolute right-[50%] translate-x-[50%] z-100 top-[50px] ${(mass.includes("removed"))||((mass.includes("check"))||(mass.includes("please"))||(mass.includes("Please")))?"bg-red-500":"bg-green-500"} rounded`}>
            <div className="w-full h-full flex flex-1 px-2 ">
                <div className="w-full h-full text-[15px] text-black flex  flex items-center">

                {mass}


                </div><div className=" h-full text-[17px] text-black flex  flex items-center">

                  <FontAwesomeIcon icon={faXmark} className="text-[28px]" onClick={()=>{setmass("")}}></FontAwesomeIcon>


               </div>


            </div>
            
            </div>)}</>
    )
}
export default Toast;