import {React,useEffect,useState,useRef, useContext} from "react";
import "./slide.css"
import "./card.css"
import { Mycontext } from "./context/context";
import { Link } from "react-router-dom";




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
const Cart=()=>{
   
     const{mass,setmass}=useContext(Mycontext);
     const [data2,setdata2]=useState([]);
     const [price,setprice]=useState(0);
     const [actprice,setactprice]=useState(0);
     
     useEffect(()=>{
        
        const id=JSON.parse(localStorage.getItem("tokken1"))._id;
  
        fetch("/api/cart_find",{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },body:JSON.stringify({
            id
          })
        }).then((result)=>{return result.json()}).then((result)=>{setdata2(result);
         
        
        
        
        
        
        })
         
        
        
        
        
        },[])
        useEffect(()=>{

          let pr=0;
          let actpr=0;
          for(let i=0;i<data2.length;i++)
          {
            pr+=(data2[i]).price;
            actpr+=(data2[i]).price-((data2[i]).price*(data2[i]).discount/100);
          }
          setprice(pr);
          setactprice(actpr);
        
        },[data2])
        
       


     
    
     const remove_cart=(id)=>{
      
      const user_id=JSON.parse(localStorage.getItem("tokken1"))._id;
      fetch("/api/cart_remove",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },body:JSON.stringify({
          user_id,id
        })
      }).then((result)=>{return result.json()}).then((result)=>{
        if(result.status){
          setdata2((data2)=>data2.filter(item => item._id !== id));
          setmass("Game is removed from cart")
          

        }


      })
      
     }; 
      const buy=()=>{
      const id="cart";
      const data=JSON.parse(localStorage.getItem("tokken1"))._id;
      
      fetch("/api/buy",{
         method:"POST",
         headers:{
           'Content-Type':"application/json"
         },body:JSON.stringify({
           data,id
         })
       }).then((result)=>{return result.json()}).then((result)=>{
         
        if(result.status)
        {setmass("Thank you for buying")}
        })
    }
    
 
    
    
    return (
        <div className="min-h-[calc(100vh-12px)] sm:min-h-[calc(100vh-45px)] bg-black cart w-full flex flex-col h-full items-center  jus pb-4 overflow-hidden  text-white " >
        <div className="gent  w-full sm:max-w-[1209px]  pt-2 pb-5 bg-black"><div className="naam flex flex-1 text-[20px] sm:text-[30px] max-w-[909px] justify-between "><div> My Cart</div></div></div>
        <div className="gent  w-full sm:max-w-[1209px]  flex flex-col md:flex-row justify-center gap-x-2 bg-black relative">
        <div  className="conti-sub   max-w-[900px] w-full flex flex-col gap-y-5 justify-center flex-1 ">
           {
            (data2.map((arr,i)=>{
              
              
                return (<div  className="card-container  relative   rounded-[10px] shrink-0 flex bg-black border-2 p-3" >
               <Link to={`/buy/${arr._id}`}><div className="card-img-cont relative w-fit shrink-0 rounded-[4px]  ">
                    <img className=" w-[90px] h-[120px] sm:w-[150px] sm:h-[190px]  object-fit rounded-[2px] " src={`${arr.img}`} />
                </div></Link> 
                <div className=" flex-1 flex flex-col">
                <Link to={`/buy/${arr._id}`}> <div className="nam text-white text-[17px] font-[500] bg-transparent w-full px-3 text-ellipsis overflow-hidden ..."><span className=" text-sm sm:text-lg"> {arr.name}</span></div>
                     <div className="pric flex items-center bg-transparent px-3 text-sm"><div className=" bg-transparent prices flex-grow flex gap-2 py-3"><div>{arr.discount}%</div><span className=" bg-transparent text-slate-400 line-through   font-[500] " >₹{arr.price}</span><span className="bg-transparent font-[500] text-white ">₹{arr.price-(arr.price*arr.discount/100)}</span></div></div></Link>
                    
        
                </div>
                <div className="absolute top-[-5px] right-[5px] text-[30px]" onClick={()=>{remove_cart(arr._id)}}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
            </div>)
            }))
            }         
        </div>
        <div className=" w-full h-fit mt-[30px] md:max-w-[300px] md:mt-0 bg-black  border-2 rounded-[10px] p-2">
        
                    
                    <div className="w-fit  py-3 " >Price Details</div>
                    <div  className=" min-w-[150px] pl-[4px] fields gen  static bg-black ">
                        
                        <div className="w-full py-2 flex justify-between px-4"><div>Price ({data2.length} Items)</div><div>{price}</div></div>
                        <div className="w-full py-2 flex justify-between px-4"><div>Discount</div><div>{price-actprice}</div></div> 
                        <div className="w-full py-2 flex justify-between px-4"><div>Delivery Charges</div><div>FREE</div></div>
                        <hr></hr>
                        <div className="w-full py-2 flex justify-between px-4 text-lg"><div>TOTAL</div><div>{actprice}</div></div>
                        
                    </div>
                   
                    
                  
                    
                    <button className=" min-w-[150px] py-3  text-center text-lg static border-2 rounded-[4px] mt-5 " onClick={()=>{buy()}}>
                       CHECK OUT
                    </button>
                    
                
        </div>
        </div>
        
        
    </div>
    )
}
export default Cart;