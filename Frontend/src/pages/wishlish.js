import {React,useContext,useEffect,useState} from "react";
import "../CSS/slide.css";
import "../CSS/card.css";
import { Mycontext } from "../context/context";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faStar} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Wishlist=()=>{
  const{mass,setmass}=useContext(Mycontext);
    const[data2,setdata2]=useState([]);
    const navigate=useNavigate();
    const[mess,setmess]=useState(true);
   
    useEffect(()=>{
        
        const user_id=JSON.parse(localStorage.getItem("tokken1"))._id;;
        setdata2([]);
        fetch("/api/wishlist_find",{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },body:JSON.stringify({
            user_id
          })
        }).then((result)=>{return result.json()}).then((result)=>{
        if(result===null)
        {
          localStorage.clear('tokken1');
          setmass("invalid user..");
            navigate("/login");
        }
        else
        {
          setdata2(result);
          setmess(false);
        }
        
        
        
        })

       
     },[])
      
    
    
     const remove_wishlist=(id)=>{
        const user_id=JSON.parse(localStorage.getItem("tokken1"))._id;;
        
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
              
              const rate=(arr.totalstar===0?0:Math.round(arr.totalstar/arr.totalreview));
                return (<div  className="card-container  relative   rounded-[10px] shrink-0 flex bg-black border-2 p-3" >
                <Link to={`/buy/${arr._id}`}> <div className="card-img-cont relative w-fit shrink-0 rounded-[4px]  ">
                    <img className=" w-[90px] h-[120px] sm:w-[150px] sm:h-[190px]  object-fit rounded-[2px] " src={`${arr.img}`} />
                </div></Link>
                <div className=" pl-3 flex-1 flex flex-col">
                <Link to={`/buy/${arr._id}`}> <div className="nam text-white text-[17px] font-[500] bg-transparent w-full  text-ellipsis overflow-hidden ..."><span className=" text-sm sm:text-lg"> {arr.name}</span></div>
                <div className="Stars flex text-[12px] sm:text-[18px]">
               <div className={`star ${rate>=1?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className={`star ${rate>=2?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className={`star ${rate>=3?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className={`star ${rate>=4?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className={`star ${rate>=5?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white ml-2  bg-teal-700 py-[3px] sm:py-[1px] px-[6px] rounded">{rate}<FontAwesomeIcon icon={ faStar}   /></div>

               </div>
        
                     
                     <div className="pric flex items-center bg-transparent  text-sm"><div className=" bg-transparent prices flex-grow flex gap-2 py-1"><div>{arr.discount}%</div><span className=" bg-transparent text-slate-400 line-through   font-[500] " >₹{arr.price}</span><span className="bg-transparent font-[500] text-white ">₹{arr.price-(arr.price*arr.discount/100)}</span></div></div></Link>
                     
                </div>
                <div className="absolute top-[-5px] right-[5px] text-[30px]" onClick={()=>{remove_wishlist(arr._id)}}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
            </div>)
            }))
            }   
             {(data2.length===0) &&(<div className=" flex justify-center item-center text-center text-[25px]"><h1>{(!mess && data2.length===0)?"Wishlist is Empty":"Loading..."}</h1></div>)}       
        </div>
       
        </div>
        
        
    </div>
    )
}
export default Wishlist;