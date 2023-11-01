import {React,useEffect,useState} from "react";
import img0 from "./logo/Hogwarts Legacy Logo Vector.png"
import img1 from "./logo/04112022_97aa2bdb9fbf485d8eca0eac62e7b1ce.png"
import img2 from "./logo/fortnite-png-27038.png"
import img3 from "./logo/EA Sport FIFA 23.png"
import img4 from "./logo/Star Wars Jedi Survivor.png"
import "./slide.css"
import "./card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Slide from "./slider";
import Brand from "./brand";
import { useNavigate } from "react-router-dom";

const data=[{"_id":"65419e3b31808546c2cc39b0",name:"Hogwarts",tim:img0,png:"https://cdn2.unrealengine.com/egs-hogwarts-legacy-carousel-thumb-1200x1600-a012b7811415.jpg?h=128&quality=medium&resize=1&w=96",image:"https://cdn2.unrealengine.com/egs-hogwarts-legacy-carousel-desktop-v3-1248x702-d5639baf4870.jpg?h=720&quality=medium&resize=1&w=1280",mobile_image:"https://cdn2.unrealengine.com/egs-hogwarts-legacy-carousel-mobile-1200x1600-0d0105d6667e.jpg?h=854&quality=medium&resize=1&w=640"},{"_id":"65398b87158d49ee702035f4",name:"Aliens",tim:img1,logo:"./logo/04112022_97aa2bdb9fbf485d8eca0eac62e7b1ce.png",png:"https://cdn2.unrealengine.com/egs-aliens-dark-decent-carousel-thumb-1200x1600-a06fe2218b7f.jpg?h=128&quality=medium&resize=1&w=96",image:"https://cdn2.unrealengine.com/egs-aliens-dark-decent-carousel-desktop-2560x1440-bb5385fcc6fb.jpg?h=720&quality=medium&resize=1&w=1280",mobile_image:"https://cdn2.unrealengine.com/egs-aliens-dark-decent-carousel-mobile-1200x1600-f58220cdaf8f.jpg?h=854&quality=medium&resize=1&w=640"},{"_id":"65419c8831808546c2c9dd4e",name:"Fortnite",tim:img2,png:"https://cdn2.unrealengine.com/25br-unison-witcher2-1p-egs-315x399-315x399-15eb34f5c10e.jpg?h=128&quality=medium&resize=1&w=96",image:"https://cdn2.unrealengine.com/25br-unison-witcher2-1p-egs-1248x702-1248x702-d382d7c0ecb4.jpg?",mobile_image:"https://cdn2.unrealengine.com/25br-unison-witcher2-1p-egs-1200x1600-thumb-1200x1600-4bf3ff00b50f.jpg?h=854&quality=medium&resize=1&w=640"},{"_id":"65398b87158d49ee702035dc",name:"FIFA 23",tim:img3,png:"https://cdn2.unrealengine.com/egs-fifa-23-womens-world-cup-carousel-thumb-1200x1600-1e0a4cf1f2e2.jpg?h=128&quality=medium&resize=1&w=96",image:"https://cdn2.unrealengine.com/egs-fifa-23-womens-world-cup-carousel-desktop-1920x1080-400538513d51.jpg?h=720&quality=medium&resize=1&w=1280",mobile_image:"https://cdn2.unrealengine.com/egs-fifa-23-womens-world-cup-carousel-mobile-1200x1600-e22572422b2e.jpg?h=854&quality=medium&resize=1&w=640"},{"_id":"6541a44431808546c2d4cbbc",name:"STARS WARS",tim:img4,png:"https://cdn2.unrealengine.com/egs-jedi-survivor-carousel-thumb-1200x1600-39ccbedd37be.jpg?h=128&quality=medium&resize=1&w=96",image:"https://cdn2.unrealengine.com/egs-jedi-survivor-carousel-desktop-1280x702-e064efcb1338.jpg?h=720&quality=medium&resize=1&w=1280",mobile_image:"https://cdn2.unrealengine.com/egs-jedi-survivor-carousel-mobile-1200x1600-1c09f31797fd.jpg?h=854&quality=medium&resize=1&w=640"}]
const Home=()=>{
    const navigate=useNavigate();

    const[tstart,settstart]=useState(null);
    const[tend,settend]=useState(null);
    const[mstart,setmstart]=useState(null);
    const[mend,setmend]=useState(null);
    const[idx,setidx]=useState(0);
    useEffect(()=>{
        const data=localStorage.getItem('tokken1');
           if(data){
        
           }else{
            navigate("/login")
           }
     },[])
    useEffect(()=>{
        const id= setTimeout(()=>{
             setidx((idx+1)%(data.length))
         },4000);
          return ()=>{clearTimeout(id)};
     },[idx]);
    
     const onTouchStart=(e)=>{
        settend(null);
        settstart(e.targetTouches[0].clientX);
     }
     const onTouchMove=(e)=>{
        
        settend(e.targetTouches[0].clientX)
     };
     const onMouseUp=(e)=>{
        setmend(null);
        setmstart(e.clientX);
     }
     const onMouseDown=(e)=>{
        e.preventDefault();
        setmend(e.clientX);
     }
     
     useEffect(()=>{
           if(tstart!=null && tend!=null)
           {
                if(tend-tstart>50)
                 {
                    setidx((idx-1)<0?data.length-1:idx-1);
                    settstart(null);
                    settend(null);
                 }
                 else if(tend-tstart<-50)
                 {
                    setidx((idx+1)%data.length);
                    settstart(null);
                    settend(null);
                 }
                
            
           }
     },[tstart,tend])
     useEffect(()=>{
        if(mstart!=null && mend!=null)
        {
             if(mend-mstart>100)
              {
                setidx((idx+1)%data.length);
                setmstart(null);
                setmend(null);
              }
              else if(mend-mstart<-100)
              {
                
                 setidx((idx-1)<0?data.length-1:idx-1);
                 setmstart(null);
                 setmend(null);
              }
             
         
        }
  },[mstart,mend])
    return (
        < >
        
        <div className="supcontainer bg-stone-950 py-5 text-white">
        {/* <div className="title flex justify-center ml-[2px] mb-[6px]"><span className="w-[1109px] text-[30px]">On Sale</span></div> */}
        <div className="sup-sub w-full flex justify-center px-[4px]">
        <div className="subcontainer sm:max-w-[1109px] flex ">
            <div className="imag w-full  overflow-hidden   sm:rounded-[20px] relative" onMouseUp={onMouseUp} onMouseDown={onMouseDown} onTouchStart={onTouchStart} onTouchMove={onTouchMove} >
            <div className="dots flex absolute top-[60px] w-full justify-center gap-5 bg-transparent"><div  className={`dot w-[5px] h-[5px] rounded-full ${idx===0?"bg-green-600":"bg-white"} `}></div><div  className={`dot w-[5px] h-[5px] rounded-full ${idx===1?"bg-green-600":"bg-white"} `}></div><div  className={`dot w-[5px] h-[5px] rounded-full ${idx===2?"bg-green-600":"bg-white"} `}></div><div  className={`dot w-[5px] h-[5px] rounded-full ${idx===3?"bg-green-600":"bg-white"} `}></div><div  className={`dot w-[5px] h-[5px] rounded-full ${idx===4?"bg-green-600":"bg-white"} `}></div></div>
                <div className="imgt t h-auto overflow-hidden  "><img src={data[idx].image}  className=" w-full aspect-video" alt=""/></div>
                <div className="imgt hidden q h-auto overflow-hidden  "><img src={data[idx].mobile_image}  className=" w-full aspect-video" alt=""/></div>
                <div className="detail absolute w-full h-full  top-0  ">
                     
                    <div className="deatil2 relative w-full h-full  bg-transparent">
                        <div className="wishlist bg-transparent absolute right-4 top-4"><FontAwesomeIcon icon={faPlus} className=" bg-transparent text-[30px]"></FontAwesomeIcon></div>
                       <div className="title bg-transparent absolute top-1/4 left-[9px]  w-fit h-fit"><img src={data[idx].tim} className=" w-[200px] h-[100px]  bg-transparent text-white" alt="not found"/></div>
                       <div className="shop absolute bottom-3 left-5 bg-transparent ">
                        <div className="discount   bg-transparent mb-2">Save upto -27%</div>
                        <div className="discount  bg-transparent mb-2">Starting <span className="line-through bg-transparent"> ₹2,999.00</span><span className=" bg-transparent"> ₹1,999.00</span></div>
                        <div className="button rounded-[4px] overfolw-hidden bg-transparent" onClick={()=>{navigate(`/buy/${data[idx]._id}`)}}><button className="w-[100px] h-[35px] border-2 border-black sm:w-[160px] sm:h-[50px] rounded-[6px] bg-white mr-3 text-slate-950">BUY NOW</button></div>
                       </div>


                    </div>
                </div>
            </div>
        
        <div className=" ml-[20px] list flex w-fit h-full ">
            <ul className="felx-1 flex flex-col  justify-between p-[6px]">
                { data.map((arr,i)=>{
               return <li className={`w-[160px] h-[70px] flex items-center ${idx===i?"bg-slate-900":""} overflow-hidden justify-center p-[6px] rounded-[4px] border-2`} onClick={()=>{setidx(i)}}><span><img src={arr.png} className="object-cover w-[50px] h-[50px]"alt="" srcset=""/></span><button className=" rounded-[4px] w-full h-full ">{arr.name}</button></li>})
                 }
                </ul>
        </div>
        </div>
        </div>
    </div>
  
    <Slide genre={"Game on Sale"}></Slide>
    <Brand/>
    <Slide genre={"Lowest of All"}/>

        </>
    )
}
export default Home;