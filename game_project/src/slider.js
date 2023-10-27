import {React,useEffect,useState,useRef} from "react";
import "./slide.css"
import "./card.css"

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus,faCartShopping,faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Slide=()=>{
     
     const tim=[{name:"Dead Island 2",link:"https://cdn1.epicgames.com/offer/236c74b4cd2e4e3099cbe2ebdc9686fd/EGS_DeadIsland2_DeepSilverDambusterStudios_S2_1200x1600-efc5201842cf642eb45f73227cd0789b?h=480&quality=medium&resize=1&w=360"},{name:"Immortals Fenyx Rising Standard Edition",link:"https://cdn1.epicgames.com/4b35838425c74992ad42e1276b2161ca/offer/IFR_EPIC_STD_Store_Portrait_1200x1600_UK-1200x1600-160024289fd98b6a67a4dec9fadf9774.jpg?h=480&quality=medium&resize=1&w=360"},{name:"Valorant",link:"https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S2_1200x1600-b911781672bac23a556586fb92c42983?h=480&quality=medium&resize=1&w=360"},{name:"RDR 2",link:"https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=480&quality=medium&resize=1&w=360"},{name:"Elden Ring",link:"https://fanatical.imgix.net/product/original/ef0033b4-d92b-43f6-9cec-c169d4e9a5cb.jpeg?auto=compress,format&w=360&fit=crop&h=480"},{name:"Last of Us 2",link:"https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S2_1200x1600-41d1b88814bea2ee8cb7986ec24713e0?h=480&quality=medium&resize=1&w=360"},{name:"Dishonored®: Death of the Outsider",link:"https://cdn1.epicgames.com/offer/87c84bc5f43d4fe69ad8f3ccde0594b0/EGS_DishonoredDeathoftheOutsider_ArkaneStudios_S2_1200x1600-acb1abddb047a40709f270fa623f1f02?h=480&quality=medium&resize=1&w=360"},{name:"Marvel’s Spider-Man: Miles Morales",link:"https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S2_1200x1600-58989e7116de3f70a2ae6ea56ee202c6?h=480&quality=medium&resize=1&w=360"},{name:"Far Cry 6 Standard Edition",link:"https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=480&quality=medium&resize=1&w=360"},{name:"Gotham Knights",link:"https://cdn1.epicgames.com/offer/05057ec2d5ea43c3b0701cc1518e0577/EGS_GothamKnights_WarnerBrosGamesMontreal_S2_1200x1600-5a46b442e57afa637f013bbc09fe5487?h=480&quality=medium&resize=1&w=360"}]
                    
    // eslint-disable-next-line no-use-before-define
    const[link,setlink]=useState(true);
    const[link2,setlink2]=useState(false);
    const [data,setdata]=useState([]);
    const[set,setset]=useState(0);
    const [isDragging,setisDragging]=useState(false);
    const [startX,setstartX]=useState(0);
    const [scrollleft,setscrollleft]=useState(0);
    const [move,setmove]=useState(0);
    const ref=useRef();
    const ref2=useRef();
    const p=(e)=>{
      e.preventDefault();
      console.log(e)
        setisDragging(true);
         setstartX(e.pageX-ref.current.offsetLeft||e.touches[0].clientX-ref.current.offsetLeft);
        
        setscrollleft(ref.current.scrollLeft);
        console.log(ref2.current.offsetWidth);
        setlink2(true);
        setlink(true);

    }
    
    const q=(e)=>{
      e.preventDefault();
        if(!isDragging) return;
        
        
        const x=e.pageX-ref.current.offsetLeft;  
        const scroll=x-startX;
        ref.current.scrollLeft=scrollleft-scroll;
        setmove(scrollleft-scroll);
        setlink(false);
    }
   
    const r=(e)=>{
      e.preventDefault();
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
  useEffect(()=>{
    const data=localStorage.getItem('tokken1');
    if(data){
    fetch("/fetch").then((resu)=>{return resu.json()}).then((resu)=>{setdata(resu)});}
  },[])
    
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
    
    
    return (
        <div className="conatiner-slider w-full flex flex-col items-center pb-4 overflow-hidden text-white " onMouseMove={(e)=>{e.preventDefault()}}>
        <div className="gent  w-full sm:max-w-[1109px] mb-4 flex items-center bg-black"><div className="naam flex-1 text-[20px]">Game for sale</div><div className="cross-buoon text-[10px]"><FontAwesomeIcon icon={faAngleLeft} className="text-[20px] btn bg-blue-700 py-[9px] px-[12px] rounded-[50%] mr-2 " onClick={right} /><FontAwesomeIcon icon={faAngleRight} className="text-[20px] bg-blue-700 py-[9px] px-[12px] rounded-[50%]" onClick={left}/></div></div> 
        
        
        <div ref={ref}  onMouseDown={p} onMouseMove={q} onMouseUp={r} onMouseLeave={r}  className="conti-sub w-full sm:max-w-[1109px] flex gap-0 overflow-hidden no-scrollbar ">
           {
            data.map((arr,i)=>{
                return (<div ref={ref2} className="card-container  w-fit  pr-0 rounded-[4px] shrink-0 " style={{transform:`translateX(${set*100}%)`}}>
                <div className="card-img-cont relative w-fit border-2 rounded-[4px] pr-1">
                  <Link to={link2?`/buy/${arr._id}`:null}> <img className="w-[155px] h-[230px] sm:w-[200px] sm:h-[280px]  object-fit rounded-[2px]" src={`${arr.img}`} /></Link>
                     <div className="bye absolute w-full h-fit top-1 left-0 bg-transparent  rounded-[10px]">
                         <div className="bye-content top-0 relative bg-transparent w-full h-full">
                            {(arr.discount!==0) && (<div className="dicount bg-black absolute top-3 right-[-8px] p-[3px] text-lg text-[30px] text-white font-medium w-[80px] rounded-r-[3px] rounded-l-[3px] bg-opacity-[70%] flex justify-center">{arr.discount}%</div>)}
                           <button className="absolute top-1 left-1 bg-transparent" onClick={()=>{wishlish(arr._id)}}> <FontAwesomeIcon icon={faPlus}  className="bg-transparent fa-solid fa-plus text-[30px] font-black text-black-500  "/></button>
                           
                        </div> 
                    </div> 

                </div>
                <div className="dat w-full ">
                     <div className="nam text-white text-[17px] font-[500] bg-transparent w-[150px] truncate "> {arr.name}</div>
                     <div className="pric flex items-center bg-transparent"><div className=" bg-transparent prices flex-grow flex flex-col"><span className=" bg-transparent text-slate-400 line-through   font-[500] " >₹{arr.price}</span><span className="bg-transparent font-[500] text-white ">₹{(arr.price - ((arr.price*arr.discount)/100))===0?"free":(arr.price - (arr.price*arr.discount)/(100))}</span></div><button onClick={()=>{cart(arr._id)}} className="add-cart  w-[60px] h-[40px] bg-orange-400 p-2 text-center rounded-[4px] text-white-[400] text-[20px] font-[400]" ><FontAwesomeIcon icon={faCartShopping} className="fa-solid fa-cart-shopping bg-transparent"  /> </button></div>
                     
        
                </div>
            </div>)
            })
            }         
        </div>
        
        
    </div>
    )
}
export default Slide;