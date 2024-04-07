import {React,useEffect,useState,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate  } from "react-router-dom";
import { Mycontext } from "../context/context";
import { useContext } from "react";
const Register=()=>{
    const navigate=useNavigate();
    const{mass,setmass,user,setuser}=useContext(Mycontext);
  const [pass,setpass]=useState("password");
  const [name,setname]=useState();
  const [email,setemail]=useState();
  const [add,setadd]=useState();
  const [password,setpassword]=useState();
  const registerUser= (event)=>{
    event.preventDefault();
fetch("/api/register",{
  method:"POST",
  headers:{
    'Content-Type':"application/json"
  },body:JSON.stringify({
    name,email,password,add
  })
}).then((rsp)=>{return rsp.json()}).then((rsp)=>{
  
    if(rsp.status){
      
      localStorage.setItem("tokken1",JSON.stringify(rsp.tokken1));
      setuser(rsp.tokken1);
      console.log(localStorage.getItem("tokken1"));
      navigate("/login")
    }
    else{
      setmass("check your email,it is already registured");
    }
})

  }
    return(
        <>
        <div className="w-full  h-[calc(100vh-12px)] sm:h-[calc(100vh-45px)] overflow-hidden bg-black flex justify-center items-center">

          
            <form onSubmit={(registerUser)} className="w-full  max-w-[400px] h-fit flex flex-col gap-5 bg-black">
               <div className="w-full p-y-2 h-fit text-3xl text-white tracking-wider bg-black flex justify-center">Create a account</div>
               <div className="w-full p-y-2 h-fit  bg-black flex justify-center"><input type="text" placeholder="UserName" className="bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" onChange={(e)=>{setname(e.target.value)}} required></input></div>
               <div className="w-full p-y-2 h-fit  bg-black flex justify-center"><input type="email" placeholder="Email" className="bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  onChange={(e)=>{setemail(e.target.value)}} required></input></div>
               <div className="w-full p-y-2 h-fit  bg-black flex justify-center"><input type="text" placeholder="Address" className="bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" onChange={(e)=>{setadd(e.target.value)}} required></input></div>
              
               <div className="w-full p-y-2 h-fit  bg-black flex justify-center relative"><input type={pass} placeholder="Password" className="bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  onChange={(e)=>{setpassword(e.target.value)}} required></input><FontAwesomeIcon icon={pass==="password"?faEye:faEyeSlash}  className="bg-transparent fa-solid fa-plus text-[20px] font-black text-black-500 absolute top-[50%] translate-y-[-50%] right-[5px]" onClick={(e)=>{e.preventDefault();setpass(pass==="password"?"text":"password")}}/></div>
               
               <div className="w-full p-y-2 h-fit  bg-black flex justify-center text-[25px]"><button type="submit" className="w-full  bg-white rounded py-2">Register</button></div>
               <div className="w-full p-y-2 h-fit  bg-black flex justify-center text-[20px] text-white"><div className="">Have an account? <Link to="/login" className="text-blue-900">Login</Link></div></div>
               </form>
          


        </div>
        
        </>
    )
}
export default Register;