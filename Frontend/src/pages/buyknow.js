import {React,useEffect,useState} from "react";
import "../CSS/slide.css";
import "../CSS/card.css";




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { Link ,useNavigate} from "react-router-dom";

const Buyknow=()=>{
    const navigate=useNavigate();
    const[data2,setdata2]=useState([])
    const[rate,setrate]=useState(0);
    const[mess,setmess]=useState(true);
   
    useEffect(()=>{
        
        const data=JSON.parse(localStorage.getItem("tokken1"))._id;
        setmess([]);
        fetch("/api/buyknow",{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },body:JSON.stringify({
            data
          })
        }).then((arr)=>{return arr.json()}).then((arr)=>{setdata2(arr);setmess(false);setrate(arr.totalstar===0?0:Math.round(arr.totalstar/arr.totalreview))})

       
     },[])
      
    

    
    
    return (
        <div className="conatiner-slider min-h-[calc(100vh-12px)] sm:min-h-[calc(100vh-45px)] flex flex-col h-full items-center  jus  overflow-hidden pt-5 text-white" >
        <div className="gent  w-full sm:max-w-[1209px]   bg-black"><div className="naam flex flex-1 text-[30px] sm:text-[50px] max-w-[909px] justify-between "><div> All Orders</div></div></div>
        <div className="gent  w-full sm:max-w-[1209px]  flex flex-col md:flex-row justify-center gap-x-2 bg-black relative">
        <div  className="conti-sub    w-full flex flex-col gap-y-5 p-3 justify-center flex-1 ">
           {
            (data2.map((arr,i)=>{
              
                const rate=(arr.totalstar===0?0:Math.round(arr.totalstar/arr.totalreview));
                return (<div  className="card-container  relative   rounded-[10px] shrink-0 flex bg-black border-2 p-3" >
                <Link to={`/buy/${arr._id}`}> <div className="card-img-cont relative w-fit shrink-0 rounded-[4px]  ">
                    <img className=" w-[90px] h-[129px] sm:w-[150px] sm:h-[190px]  object-fit rounded-[2px] " src={`${arr.img}`} />
                </div></Link>
                <div className=" flex-1 flex flex-col pl-3">
                <Link to={`/buy/${arr._id}`}> <div className="nam text-white text-[17px] font-[500] bg-transparent w-full  text-ellipsis overflow-hidden ..."><span className=" text-sm sm:text-lg"> {arr.name}</span></div>
                <div className="Stars flex text-[12px] sm:text-[18px]">
               <div className={`star ${rate>=1?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className={`star ${rate>=2?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className={`star ${rate>=3?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className={`star ${rate>=4?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className={`star ${rate>=5?"text-green-500":"text-white"} mr-1`}><FontAwesomeIcon icon={ faStar}   /></div>
               <div className="star text-white ml-2  bg-teal-700 py-[3px] sm:py-[1px] px-[6px] rounded">{rate}<FontAwesomeIcon icon={ faStar}   /></div>

               </div>
                     <div className="pric flex items-center bg-transparent  text-sm"><div className=" bg-transparent prices flex-grow flex gap-2 py-3"><div>{arr.discount}%</div><span className=" bg-transparent text-slate-400 line-through   font-[500] " >₹{arr.price}</span><span className="bg-transparent font-[500] text-white ">₹{arr.price-(arr.price*arr.discount/100)}</span></div></div></Link>
                     <div className=" w-full mt-auto flex justify-center" >
                     <button className="w-full  py-[6px] sm:py-[12px]  text-center  static bg-orange-600 rounded-[3px] mt-auto " onClick={()=>{navigate(`/review?id=${arr._id}&name=${arr.name}&rate=${rate}`)}}>
                       Rate Now
                      </button>
                    </div>
        
                </div>
            </div>)
            }))
            }
             {(data2.length===0) &&(<div className=" flex justify-center item-center text-center text-[25px]"><h1>{(!mess && data2.length===0)?"You are not buy anything yet ":"Loading..."}</h1></div>)}          
        </div>
       
        </div>
        
        
    </div>
    )
}
export default Buyknow;