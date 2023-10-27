import {React,useEffect,useState,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate } from "react-router-dom";
const Login=()=>{
  const navigate=useNavigate();
  const [pass,setpass]=useState("password");
  const [email,setemail]=useState();
  const [password,setpassword]=useState();
  useEffect(()=>{
    const data=localStorage.getItem("tokken1");
    if(data)
    {
      navigate("/")
    }
   
  },[])
  const login=(e)=>{
    e.preventDefault();
    fetch("/api/login",{
  method:"POST",
  headers:{
    'Content-Type':"application/json"
  },body:JSON.stringify({
    email,password
  })
}).then((rsp)=>{return rsp.json()}).then((rsp)=>{
  
    if(rsp.status){
      localStorage.setItem("tokken1",JSON.stringify(rsp.tokken1))
      console.log(localStorage.getItem("tokken1"));
      navigate("/")
    }
    else{
        alert("check paaword and email");
    }
})
  }
    return(
        <>
        <div className="w-full  h-[calc(100vh-12px)] sm:h-[calc(100vh-45px)] overflow-hidden bg-black flex justify-center items-center">

          <form onSubmit={login} className="w-full  max-w-[400px] h-fit flex flex-col gap-5 bg-black">
               <div className="w-full p-y-2 h-fit text-3xl text-white tracking-wider bg-black flex justify-center">Welcome back!</div>
               <div className="w-full p-y-2 h-fit  bg-black flex justify-center"><input type="email" placeholder="Email" className="bg-gray-50 border-4 border-red-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" required onChange={(e)=>{setemail(e.target.value)}}></input></div>
               <div className="w-full p-y-2 h-fit  bg-black flex justify-center relative"><input type={pass} placeholder="Password" className="bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" required onChange={(e)=>{setpassword(e.target.value)}}></input><FontAwesomeIcon icon={pass==="password"?faEye:faEyeSlash}  className="bg-transparent fa-solid fa-plus text-[20px] font-black text-black-500 absolute top-[50%] translate-y-[-50%] right-[5px]" onClick={(e)=>{e.preventDefault();setpass(pass==="password"?"text":"password")}}/></div>
               <div className="w-full p-y-2 h-fit  bg-black text-[20px] text-white"> <input type="checkbox" className="w-4 h-4 mr-2"></input>Remember me !</div>
               <div className="w-full p-y-2 h-fit  bg-black flex justify-center text-[25px]"><button type="submit" className=" w-full  bg-white rounded py-2">LOGIN</button></div>
               <div className="w-full p-y-2 h-fit  bg-black flex justify-center text-[20px] text-white"><div className="">Dont't have a account? <Link to="/register" className="text-blue-900">Register</Link></div></div>

          </form>


        </div>
        
        </>
    )
}
export default Login;