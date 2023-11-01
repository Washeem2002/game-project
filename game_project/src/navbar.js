import {React,useState,useRef, useEffect, useContext} from "react";
import "./nav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faChevronDown,faUser,faSearch,faCartShopping,faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Mycontext } from "./context/context";
import Toast from "./toast";
const Navbar=()=>{
    const {mass,setmass}=useContext(Mycontext);
    const navigate=useNavigate();
    let open=false;
    const ref=useRef(null);
    const menuref=useRef(null);
    const menuref2=useRef(null);
    const menuref3=useRef(null);
    const menuref4=useRef(null);
    const menuref5=useRef(null);
    const menuref6=useRef(null);
    const menuref7=useRef(null);
    const menuref8=useRef(null);
    
   
    const [on,seton]=useState(false);
    const [on2,seton2]=useState(false);
    const [on3,seton3]=useState(false);
    const [on4,seton4]=useState(false);
    const [search,setsearch]=useState(false);
    const [searchdata,setsearchdata]=useState([]);
    const [searchcon,setsearchcon]=useState(false);
    const [searchvar,setsearchvar]=useState("");
    const [user,setuser]=useState(null);
    
    const ope=()=>{
       seton(!on);
       if(on2===true)
       {
        seton2(false);
       }
       if(on3===true)
       {
        seton3(false)
       }
    } 
    
   
    useEffect(()=>{
        const t=(e)=>{
            if(window.innerWidth<1024 && on && !ref.current.contains(e.target) && !menuref.current.contains(e.target))
            {
                seton(false);
                
                
            }
            if(window.innerWidth>1024 && on3  && !menuref4.current.contains(e.target) && !menuref5.current.contains(e.target))
            {
                seton3(!on3);
                
                
            }
            if( window.innerWidth>1024 && on2  && !menuref2.current.contains(e.target) && !menuref3.current.contains(e.target))
            {
                seton2(!on2);
                
                
            }
           
           if(on4 &&   !menuref6.current.contains(e.target) && !menuref7.current.contains(e.target))
           {
            seton4(false);
           }
           if(!menuref8.current.contains(e.target))
           {
            setsearchcon(false)
           }
            
            
        }
        document.addEventListener("mousedown",t);
        return ()=>{
            document.removeEventListener("mousedown",t)
        }
    },[on,on2,on3,on4,searchdata])
    const close=()=>{
       seton(false);
       seton2(false);
       seton3(false)
       seton4(false)
       
        
       
    
        

    }
    const acc=()=>{
        const data=localStorage.getItem('tokken1');

        if(data)
        {   
            if(user===null)

           { 
            setuser(JSON.parse(localStorage.getItem("tokken1")));
           seton4(!on4);
        }
        else
        {
            seton4(!on4);
        }
            
        }
        
    }
    const logout=()=>{
        seton4(false);
        setuser(null);
        localStorage.clear('tokken1');
        navigate('/login')
    }
    const searchfound=(e)=>{

        const field=e.target.value;
        setsearchvar(e.target.value);
        if(field.length==0)
        {
            setsearchdata([]);
            setsearchcon(false);
            return
        }
        else{
            setsearchcon(true);
        }
        const limit=5;
        fetch("/api/search",{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({field,limit})
         }).then((res)=>{return res.json()}).then((res)=>{console.log(res);setsearchdata(res)})

    }
    
       
    return (
        <>
        <header className=" flex flex-col items-center  w-full h-fit fixed bg-black  z-50 ">
        <div className="contai flex flex-row flex-grow w-full  items-center ovetflow-scroll py-[3px] px-[5px] relative border-b border-gray-200 bg-white text-black">
            <div ref={menuref} className="option-hide block mr-4 lg:hidden" onClick={ope}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></div>
            <Link to="/" className="mr-6 flex-grow lg:flex-grow-0"><div className="logo  text-teal-600 text-[20px] items-center " >GAMECART</div></Link>
          { (on || window.innerWidth>1024) &&( <div ref={ref} className="fields shrink-0 flex-grow absolute bg-white border-2 rounded-[4px] lg:border-0 lg:rounded-[0px] left-[0px] p-2  h-[90vh] lg:h-fit top-[37px] sm:top-[45px] z-40 bg-black min-w-[250px] lg:static lg:p-0 lg:min-h-full overflow-auto no-scrollbar">
                <ul className="flex flex-col shrink-0  text-lg/10 h-fit lg:flex-row">
                    
                    <li ref={menuref3} className="w-fit mb-3 lg:mr-5 lg:mb-0 zim" onClick={()=>{seton2(!on2)}}><a>Genre{on2===false?<FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[15px]"/>:<FontAwesomeIcon icon={faChevronUp} className="ml-1 text-[15px]"/>}</a></li>
                  { (on2)&& (<div ref={menuref2} className=" min-w-[150px] pl-[4px] fields gen  static bg-white text-black lg:absolute lg:top-[47px] lg:left-[160px]">
                        <ul className=" flex flex-col text-black text-[20px]/10 ">

                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/genra?gen=action&sort=0&price=10000">Action</Link></li>
                        
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/genra?gen=adventure&sort=0&price=10000">Adventure</Link></li>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/genra?gen=shooter&sort=0&price=10000">Shooter</Link></li>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/genra?gen=sport_racing&sort=0&price=10000">Sports & Racing</Link></li>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/genra?gen=rpg&sort=0&price=10000">RPG</Link></li>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/genra?gen=horror&sort=0&price=10000">Horror</Link></li>
                        </ul>
                    </div>)}
                    

                    <li ref={menuref5} className=" w-fit  mb-3 lg:mr-5 lg:mb-0 zim" onClick={()=>{seton3(!on3)}}><a>Official-Partners{on3===false?<FontAwesomeIcon icon={faChevronDown} className="ml-1 text-[15px]"/>:<FontAwesomeIcon icon={faChevronUp} className="ml-1 text-[15px] text-orange-400"/>}</a></li>
                    { (on3)&& (<div ref={menuref4} className=" min-w-[150px] pl-[4px] fields gen off_gen static bg-white lg:absolute lg:top-[47px] lg:left-[330px]">
                        <ul className=" flex flex-col text-[20px]/10 ">
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/brand/ea">EA</Link></li>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/brand/psyonic">Psyonic</Link></li>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/brand/2k">2K</Link></li>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/brand/ubisoft">UBISOFT</Link></li>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/brand/microsoft">Microsoft</Link></li>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/brand/Bllizzard">Blizzard</Link></li>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/brand/remedy">Remedy</Link></li>
                        </ul>
                    </div>)}
                </ul>
            </div>)}
        
           
            
            <form ref={menuref8} onSubmit={(e)=>{e.preventDefault();navigate(`/search?field=${searchvar}`);setsearchcon(false);searchdata([]);setsearchvar("")}} className="search mr-[6px] text-[15px] w-[300px] relative sm:text-lg hidden sm:block"><input type="text" placeholder="Search..." className="bg-white border-2 border-red-900 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   block w-full p-1.5 pr-[29px] dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" onChange={(e)=>{searchfound(e)}}></input><FontAwesomeIcon icon={faSearch} className="w-[15px] h-[15px] absolute right-[10px] top-[50%] translate-y-[-50%] "></FontAwesomeIcon>
           {(searchcon) && (<div className="absolute w-full  h-fit bg-white ">
                
                {(searchdata.length!=0) && (<>{(searchdata.map((arr,i)=>{return <div onClick={()=>{navigate(`/buy/${arr._id}`);setsearchcon(false);searchdata([]);setsearchvar("")}} className="w-full py-[10px] px-[5px]  flex border-b-2 border-black ">
                     <div className="card-img-cont relative w-fit shrink-0 rounded-[4px]  ">
                    <img className=" w-[50px] h-[70px]   object-fit rounded-[2px] " src={`${arr.img}`}/>
                    </div>
                    <div className="text-[20px]  flex-1  flex  px-[7px] items-center ">{arr.name}</div>
                </div>}))}
                <button  className=" w-full h-[40px] bg-green-900 flex items-center justify-center" type="submit">
                  Submit     
                </button></>)}
                {
                  (searchdata.length==0) && (  <div  className=" w-full h-[40px]  flex items-center justify-center" >
                    No search found
             </div>)
                }                
                </div>)}</form>
            <div className="cart text-[15px] mr-[6px] sm:text-lg block sm:hidden" onClick={()=>{setsearch(!search)}}> <button className="  sm:border-2  px-[6px] py-[6px] sm:py-[7px] sm:px-[7px]  flex items-center text-[14px] rounded-full "><FontAwesomeIcon icon={faSearch} className="w-[20px] h-[20px] " ></FontAwesomeIcon><span></span></button></div>
            <Link to="/cart"><div className="cart text-[15px] mr-[6px] sm:text-lg "><button className="  sm:border-2  px-[6px] py-[6px] sm:py-[7px] sm:px-[7px]  flex items-center text-[14px] rounded-full "><FontAwesomeIcon icon={faCartShopping} className="w-[20px] h-[20px] " ></FontAwesomeIcon><span></span></button></div></Link>
            <div className="cart text-[15px] sm:text-lg " ><button ref={menuref6} className="  sm:border-2  px-[6px] py-[6px] sm:py-[7px] sm:px-[7px]  flex items-center text-[14px] rounded-full bg-black" onClick={acc}><FontAwesomeIcon icon={faUser} className="w-[20px] h-[20px] text-white" ></FontAwesomeIcon><span></span></button></div>
            { (on4) && (<div ref={menuref7} className=" min-w-[150px] pl-[4px] fields gen off_gen  bg-white absolute top-[40px] lg:top-[47px] right-0">
                        <ul className=" flex flex-col text-[20px]/10 ">
                        <div className="w-full mb-3 lg:mr-5 text-black " >Hi! {user.name}</div>
                        <div className="w-full mb-3 lg:mr-5 text-black border-b-[2px]" >{user.email}</div>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/buyknow">Orders</Link></li>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={close}><Link to="/wishlist">WishList</Link></li>
                        <li className="w-fit mb-3 lg:mr-5 " onClick={logout}>Logout</li>
                        </ul>
                    </div>)}
            
            
            
        </div>
   {(search) && (<form ref={menuref8} onSubmit={(e)=>{e.preventDefault();navigate(`/search?field=${searchvar}`);setsearch(false);setsearchcon(false);searchdata([]);setsearchvar("")}}  className="search p-[3px] text-[15px] w-full  relative sm:text-lg block sm:hidden bg-white flex gap-2"><input type="text" placeholder="Search..." className="bg-white border-2 border-red-900 text-black text-sm h-[40px] rounded-lg focus:ring-blue-500 focus:border-blue-500   block w-full p-1.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" onChange={(e)=>{searchfound(e)}} required></input><button className="w-[45px] h-[40px] border-2 rounded-lg border-slate-600 flex justify-center items-center text-black" ><FontAwesomeIcon icon={faSearch} className="w-[20px] h-[20px]"></FontAwesomeIcon></button>
   
   {(searchcon) && (<div className="absolute w-full  h-fit bg-white top-[100%] right-0">
                
                {(searchdata.length!=0) && (<>{(searchdata.map((arr,i)=>{return <Link to={`/buy/${arr._id}`} onClick={()=>{setsearch(false);setsearchdata("");setsearchcon(false);}}> <div  className="w-full py-[10px] px-[5px]  flex border-b-2 border-black ">
                     <div className="card-img-cont relative w-fit shrink-0 rounded-[4px]  ">
                    <img className=" w-[50px] h-[70px]   object-fit rounded-[2px] " src={`${arr.img}`}/>
                    </div>
                    <div className="text-[20px]  flex-1  flex  px-[7px] items-center text-black">{arr.name}</div>
                </div></Link>}))}
                <button  className=" w-full h-[40px] bg-green-900 flex items-center justify-center" type="submit">
                       Submit
                </button></>)}
                {
                  (searchdata.length===0) && (  <div  className=" w-full h-[40px]  flex items-center justify-center text-black" >
                    No search found
             </div>)
                }                
                </div>)}
   
   
   
   
   </form>)}
   <Toast></Toast>
    </header>
   
    <div className=" h-[35px] sm:h-[50px] bg-black"></div>
    
    
    
       
    </>)
    
}
export default Navbar;