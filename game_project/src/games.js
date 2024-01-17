import {React,useContext,useEffect,useState} from "react";
import "./slide.css"
import "./card.css"
import "./game.css"
import { useLocation,useHistory ,useSearchParams,Link, useNavigate} from "react-router-dom";
import { Mycontext } from "./context/context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faChevronDown,faUser,faSearch,faCartShopping,faChevronUp,faPlus,faFilter} from "@fortawesome/free-solid-svg-icons";
const Gameview=()=>{
    const{mass,setmass}=useContext(Mycontext);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let [ asd,setSearchParams] = useSearchParams();
    
  const navigate=useNavigate()
 

 
    
    console.log(searchParams.delete('gen'))
   
     const [on1,seton1]=useState(true);
     const [on2,seton2]=useState(false);
     const [on3,seton3]=useState(false);
     const [on4,seton4]=useState(false);
     const [on5,seton5]=useState(false);
     const [data,setdata]=useState([]);
     const  [act,setact]=useState(false);
     const  [adv,setadv]=useState(false);
     const  [spt,setspt]=useState(false);
     const  [sho,setsho]=useState(false);
     const  [rpg,setrpg]=useState(false);
     const  [hor,sethor]=useState(false); 
     const  [dis,setdis]=useState(true);
     const  [click,setclick]=useState(false); 
     const  [sort,setsort]=useState(0);
     const  [price,setprice]=useState(10000);
     const  [mess,setmess]=useState(true)
       
  
   const submit=()=>{
    let gen="";
        if(act)
        {
            gen=gen+("action ");
        }
        if(adv){
            gen=gen+"adventure ";
        }
        if(spt){
            gen+="sport_racing "
        }
        if(sho)
        {
            gen+="shooter "
        }
        if(rpg)
        {
            gen+="rpg "
        }
        if(hor)
        {
            gen+="horror"
        }
        seton2(false);
        seton3(false);
        seton4(false);
        window.scrollTo(0, 0);
         // Update the query parameter
         setSearchParams({"gen": gen,"sort":sort,"price":price})
   }


   //clear filter
   const clear=()=>{
    setact(false);
    setadv(false);
    setspt(false);
    setsho(false);
    setrpg(false);
    sethor(false);
    setsort(0);
    setprice(10000);
    
    setSearchParams({"gen":"","sort":0,"price":10000});

   }

     useEffect(()=>{
        
        if(window.innerWidth<1024)
        {
            seton5(true);
        }

        setmess(true);
        setdata([]);
        let gen=asd.get("gen").split(" ")||[];
        let sort=asd.get("sort");
        let price=asd.get("price");
        console.log(gen)
        fetch("/game",{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({gen:gen,sort:sort,price:price})
         }).then((res)=>{return res.json()}).then((res)=>{
          setdata(res);
          setmess(false) 
        })
        
        const genk=asd.get("gen");

        setact(genk.includes("action")?true:false);
        setadv(genk.includes("adventure")?true:false);
        setspt(genk.includes("sport_racing")?true:false);
        setsho(genk.includes("shooter")?true:false);
        setrpg(genk.includes("rpg")?true:false);
        sethor(genk.includes("horror")?true:false);
        setprice((Number)(asd.get("price")));
        setsort((Number)(asd.get("sort")));
        
         
         
         console.log(act)
     },[location])
      
     const cart =(id)=>{
      setmass("adding to the cart please wait..");
      
      const data=JSON.parse(localStorage.getItem("tokken1"))===null?null:JSON.parse(localStorage.getItem("tokken1"))._id;
      if(data){
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
      })}
      else
      {
        setmass("Sorry!! Please login First");
      }
    }
    const wishlist =(id)=>{
      
      setmass("adding to the Wishlist please wait..");
      const data=JSON.parse(localStorage.getItem("tokken1"))===null?null:JSON.parse(localStorage.getItem("tokken1"))._id;
      if(data){
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
      })}
      else
      {
        setmass("Sorry!! Please login First");
      }
    }
   
    
    return (
        <div className="conatiner-slider w-full flex flex-col h-full min-h-screen items-center  pt-[17px] overflow-hidden  text-white" >
        <div className="gent  w-full sm:max-w-[648px] lg:max-w-[1209px] mb-8 flex  bg-black"><div className="naam flex flex-1 text-[20px] ml-2 lg:ml-0 lg:max-w-[909px] justify-between "><div>Games</div><div className=" hidden  lg:mr-10 lg:block"><FontAwesomeIcon icon={faFilter} className="fa-solid fa-cart-shopping bg-transparent mr-2" />filter</div><div className="mr-2 lg:hidden" onClick={()=>{seton5(!on5);seton1(!on1);}}><FontAwesomeIcon icon={faFilter} className="fa-solid fa-cart-shopping bg-transparent mr-2" />filter</div></div></div>
        <div className='gent gen2  w-full sm:max-w-[1209px] h-full flex flex-col-reverse lg:flex-row lg:justify-center  gap-x-8 bg-black relative'>
        <div  className="conti-sub w-fit h-fit lg:max-w-[909px]  grid grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-center game-grid">
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
                     <div className="pric flex items-center bg-transparent"><div className=" bg-transparent prices flex-grow flex flex-col"><span className="bg-transparent text-slate-400 line-through   font-[500]   ">₹{arr.price}</span><span className="bg-transparent font-[500] text-white ">{(arr.price - arr.price*arr.discount/100)===0?"free":`₹${(arr.price - arr.price*arr.discount/100)}`}</span></div><button onClick={()=>{cart(arr._id)}} className="add-cart  w-[60px] h-[40px] bg-orange-400 p-2 text-center rounded-[4px] text-white-[400] text-[20px] font-[400]"><FontAwesomeIcon icon={faCartShopping} className="fa-solid fa-cart-shopping bg-transparent" /> </button></div>
                     
        
                </div>
            </div>)
            }))
            }    
               {(data.length===0) &&(<div className=" flex justify-center item-center text-center text-[25px]"><h1>{(!mess && data.length===0)?"Result not found...":"Loading..."}</h1></div>)}
        </div>
        
        { (!on5 )&&(<div className="filter w-full h-fit max-w-[909px] lg:max-w-[305px] bg-black flex-1   lg:w-full border-2 rounded-[7px] p-2">
        <ul className="flex   text-lg/10 h-fit flex-col">
                    
                    <li  className="w-fit mb-3 pl-3 " onClick={()=>{seton2(!on2)}}><a >GenreGenre{on2===false?<FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[15px]"/>:<FontAwesomeIcon icon={faChevronUp} className="ml-1 text-[15px]"/>}</a></li>
                    <div  className=" min-w-[150px] pl-[4px] fields gen text-white  static bg-black ">
                        { (on2) && (<ul className=" flex flex-col text-[20px]/10 border-b-4 py-2">
                        <li className={`w-full mb-3 lg:pr-5 ${( act)?"border-2 rounded-[5px]":""}` }  onClick={()=>{setact(!act)}}><a >Action</a></li>
                        
                        <li className={`w-full mb-3 lg:pr-5 ${( adv)?"border-2 rounded-[5px]":""}` } onClick={()=>{setadv(!adv)}}><a >Adventure</a></li>
                        <li className={`w-full mb-3 lg:pr-5 ${( sho)?"border-2 rounded-[5px]":""}` } onClick={()=>{setsho(!sho)}}><a >Shooter</a></li>
                        <li className={`w-full mb-3 lg:pr-5 ${( spt)?"border-2 rounded-[5px]":""}` } onClick={()=>{setspt(!spt)}}><a>Sports & Racing</a></li>
                        <li className={`w-full mb-3 lg:pr-5 ${( hor)?"border-2 rounded-[5px]":""}` } onClick={()=>{sethor(!hor)}}><a >Horror</a></li>
                        <li className={`w-full mb-3 lg:pr-5 ${( rpg)?"border-2 rounded-[5px]":""}` } onClick={()=>{setrpg(!rpg)}}><a >RPG</a></li>
                        </ul>) }
                    </div>
                   
                    <li  className=" w-fit  mb-3 pl-3 " onClick={(e)=>{e.preventDefault();seton3(!on3)}}>Sort{on3===false?<FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[15px]"/>:<FontAwesomeIcon icon={faChevronUp} className="ml-1 text-[15px]"/>}</li>
                    <div className=" min-w-[150px] pl-[4px] fields gen off_gen static bg-black  border-stone-400">
                       { (on3)&& (<ul className=" flex flex-col text-[20px]/10 border-b-4 py-2">
                        <li className={`w-full mb-3 lg:mr-5 ${sort===1?"border-2 rounded-[5px]":""} `} onClick={()=>{sort===1?setsort(0):setsort(1)}}><a >Price High to Low</a></li>
                        <li className={`w-full mb-3 lg:mr-5 ${sort===2?"border-2 rounded-[5px]":""} `} onClick={()=>{sort===2?setsort(0):setsort(2)}}><a >Price Low to High</a></li>
                        <li className={`w-full mb-3 lg:mr-5 ${sort===3?"border-2 rounded-[5px]":""} `} onClick={()=>{sort===3?setsort(0):setsort(3)}}><a >Free</a></li>
                        <li className={`w-full mb-3 lg:mr-5 ${sort===4?"border-2 rounded-[5px]":""} `} onClick={()=>{sort===4?setsort(0):setsort(4)}}><a >Discounted</a></li>
                        </ul>) }
                    </div>
                    <li  className="w-fit mb-3 pl-3"  onClick={(e)=>{e.preventDefault();seton4(!on4)}}>Price {on4===false?<FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[15px]"/>:<FontAwesomeIcon icon={faChevronUp} className="ml-1 text-[15px]"/>} </li>
                    <div  className=" min-w-[150px] pl-[4px] fields gen  static bg-black ">
                        {(on4) && (<ul className=" flex flex-col text-[20px]/10 ">
                        <li className={`w-full mb-3 lg:mr-5 ${price===1000?"border-2 rounded-[5px]":""} `} onClick={()=>{price===1000?setprice(10000):setprice(1000)}}><a >Under Rs.1000</a></li>
                        
                        <li className={`w-full mb-3 lg:mr-5 ${price===2000?"border-2 rounded-[5px]":""} `} onClick={()=>{price===2000?setprice(10000):setprice(2000)}}><a >Under Rs.2000</a></li>
                        <li className={`w-full mb-3 lg:mr-5 ${price===3000?"border-2 rounded-[5px]":""} `} onClick={()=>{price===3000?setprice(10000):setprice(3000)}}><a >Under Rs.3000</a></li>
                        <li className={`w-full mb-3 lg:mr-5 ${price===4000?"border-2 rounded-[5px]":""} `} onClick={()=>{price===4000?setprice(10000):setprice(4000)}}><a >Under Rs.4000</a></li>
                        

                        </ul>) }
                    </div>
                    <div  className=" min-w-[150px] pl-[4px]  text-center  static border-2 rounded-[3px] mt-5 " onClick={submit}>
                       Submit
                    </div>
                    <div  className=" min-w-[150px] pl-[4px]  text-center  static border-2 rounded-[3px] mt-5 " onClick={clear}>
                       CLEAR
                    </div>
                </ul>
        </div>)}
        </div>
        
        
    </div>
    )
}
export default Gameview;