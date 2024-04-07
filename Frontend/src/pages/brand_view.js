import {React,useContext,useEffect,useState} from "react";
import "../CSS/slide.css";
import "../CSS/card.css";
import "../CSS/game.css";
import { Mycontext } from "../context/context";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping,faPlus} from "@fortawesome/free-solid-svg-icons";
import { useParams ,Link, useNavigate} from "react-router-dom";
const BrandView=()=>{

    
    const navigate=useNavigate();
    const{mass,setmass}=useContext(Mycontext);
   
     const {id}=useParams()
     const [data,setdata]=useState([]);
     
     
     
     useEffect(()=>{
      fetch(`/api/brand?id=${id}`,{
        method:"GET",
        headers:{
          'Content-Type':"application/json"
        }
      }).then((result)=>{return result.json()}).then((result)=>{setdata(result)})
      },[id])
     
      
      const cart =(id)=>{
        setmass("adding to the cart please wait..");
        const data=JSON.parse(localStorage.getItem("tokken1"))._id;
  
        fetch("/api/cart",{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },body:JSON.stringify({
            data,id
          })
        }).then((resu)=>{return resu.json()}).then((resu)=>{
          if(resu===null)
          { 
           
            localStorage.clear('tokken1');
            setmass("invalid user..");
              navigate("/login");
          }
          else
          {
             setmass("Game added to the cart");
          }
        })
      }
      const wishlist =(id)=>{
        
        const data=JSON.parse(localStorage.getItem("tokken1"))._id;
  
        fetch("/api/wishlist",{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },body:JSON.stringify({
            data,id
          })
        }).then((res)=>{return res.json()}).then((res)=>{
          if(res.status)
          {
            setmass("Game is added to wishlist");
            
          }
          else
          {
            localStorage.clear('tokken1');
            setmass("invalid user..");
              navigate("/login");
          }
        })
      }
   
    
    return (
        <div className="conatiner-slider w-full flex flex-col h-full min-h-screen items-center  pt-[17px] overflow-hidden  text-white" >
        <div className="gent  w-full sm:max-w-[930px] my-2 sm:my-4 flex  bg-black"><div className="naam flex flex-1 text-[50px]  w-full justify-center "><div>Games</div></div></div>
        <div className='gent gen2  w-full sm:max-w-[1209px] h-full flex flex-col-reverse lg:flex-row lg:justify-center  gap-x-8 bg-black relative'>
        <div  className="conti-sub w-fit h-fit lg:max-w-[909px]  grid grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-center game-grid" >
           {
            (data.map((arr,i)=>{
                return (<div  className="card-container  w-full  rounded-[4px] shrink-0 flex flex-col justify-center items-center" >
                <div className="card-img-cont relative w-fit border-2 rounded-[4px] p-1">
                <Link to={`/buy/${arr._id}`}><img className="w-[155px] h-[230px] sm:w-[200px] sm:h-[280px]  object-fit rounded-[2px] game-image" src={`${arr.img}`}/></Link>
                     <div className="bye absolute w-full h-fit top-1 left-0 bg-transparent  rounded-[10px]">
                         <div className="bye-content top-0 relative bg-transparent w-full h-full">
                           {(arr.discount!=0) &&(<div className="dicount bg-black absolute top-3 right-[-8px] p-[3px] text-lg text-[30px] text-white font-medium w-[80px] rounded-r-[3px] rounded-l-[3px] bg-opacity-[70%] flex justify-center">{arr.discount}%</div>)}
                           <span className="absolute top-1 left-1 bg-transparent" onClick={()=>{wishlist(arr._id)}}> <FontAwesomeIcon icon={faPlus}  className="bg-transparent fa-solid fa-plus text-[30px] font-black text-black-500  "/></span>
                            
                        </div> 
                    </div> 
                </div>
                <div className="dat w-full ">
                     <a href="###"><div className="nam text-white text-[17px] font-[500] bg-transparent w-[150px] truncate "> {arr.name}</div></a>
                     <div className="pric flex items-center bg-transparent"><div className=" bg-transparent prices flex-grow flex flex-col"><span className="bg-transparent text-slate-400 line-through   font-[500]  ">₹{arr.price}</span><span className="bg-transparent font-[500] text-white ">{(arr.price - arr.price*arr.discount/100)===0?"free":`₹${(arr.price - arr.price*arr.discount/100)}`}</span></div><button onClick={()=>{cart(arr._id)}} className="add-cart  w-[60px] h-[40px] bg-orange-400 p-2 text-center rounded-[4px] text-white-[400] text-[20px] font-[400]"><FontAwesomeIcon icon={faCartShopping} className="fa-solid fa-cart-shopping bg-transparent" /> </button></div>
                     
        
                </div>
            </div>)
            }))
            }
             {(data.length===0) &&(<div className="w-full flex justify-center item-center text-center text-[25px]"><h1>Loading...</h1></div>)}     
              
        </div>
        
       
        </div>
        
        
    </div>
    )
}
export default BrandView;