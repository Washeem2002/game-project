import {React,useContext,useEffect,useState} from "react";
import "./slide.css";
import "./card.css";
import { Mycontext } from "./context/context";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";

const Wishlist=()=>{
  const{mass,setmass}=useContext(Mycontext);
    const[data2,setdata2]=useState([])
   
    useEffect(()=>{
        
        const user_id=JSON.parse(localStorage.getItem("tokken1"))._id;
  
        fetch("/api/wishlist_find",{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },body:JSON.stringify({
            user_id
          })
        }).then((result)=>{return result.json()}).then((result)=>{setdata2(result)})

       
     },[])
      
    
    
     const remove_wishlist=(id)=>{
        const user_id=JSON.parse(localStorage.getItem("tokken1"))._id;
        fetch("/api/wishlist_remove",{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },body:JSON.stringify({
            user_id,id
          })
        }).then((result)=>{return result.json()}).then((result)=>{if(result.status){
          setdata2((data2)=>data2.filter(item => item._id !== id));
          setmass("Game is removed from wishlist");
        }})
        
        
        
        
       }
    
    
    return (
        <div className="conatiner-slider min-h-[calc(100vh-12px)] sm:min-h-[calc(100vh-45px)] flex flex-col h-full items-center  jus  overflow-hidden pt-5 text-white" >
        <div className="gent  w-full sm:max-w-[1209px]   bg-black"><div className="naam flex flex-1 text-[30px] sm:text-[50px] max-w-[909px] justify-between "><div> Wishlist</div></div></div>
        <div className="gent  w-full sm:max-w-[1209px]  flex flex-col md:flex-row justify-center gap-x-2 bg-black relative">
        <div  className="conti-sub    w-full flex flex-col gap-y-5 justify-center flex-1 ">
           {
            (data2.map((arr,i)=>{
              
              
                return (<div  className="card-container  relative   rounded-[10px] shrink-0 flex bg-black border-2 p-3" >
                <div className="card-img-cont relative w-fit shrink-0 rounded-[4px]  ">
                    <img className=" w-[90px] h-[120px] sm:w-[150px] sm:h-[190px]  object-fit rounded-[2px] " src={`${arr.img}`} />
                </div>
                <div className=" flex-1 flex flex-col">
                     <div className="nam text-white text-[17px] font-[500] bg-transparent w-full px-3 text-ellipsis overflow-hidden ..."><span className=" text-sm sm:text-lg"> {arr.name}</span></div>
                     <div className="pric flex items-center bg-transparent px-3 text-sm"><div className=" bg-transparent prices flex-grow flex gap-2 py-3"><div>{arr.discount}%</div><span className=" bg-transparent text-slate-400 line-through   font-[500] " >₹{arr.price}</span><span className="bg-transparent font-[500] text-white ">₹{arr.price-(arr.price*arr.discount/100)}</span></div></div>
                    
        
                </div>
                <div className="absolute top-[-5px] right-[5px] text-[30px]" onClick={()=>{remove_wishlist(arr._id)}}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
            </div>)
            }))
            }         
        </div>
       
        </div>
        
        
    </div>
    )
}
export default Wishlist;