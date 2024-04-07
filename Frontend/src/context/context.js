import { createContext, useState } from "react";
const Mycontext=createContext(null);
const Appcontext=({children})=>{
    const[mass,setmass]=useState("");
    const[user,setuser]=useState(null);

    return (
        <Mycontext.Provider value={{mass,setmass,user,setuser}}>

            {children}
        </Mycontext.Provider>

    )
}
export  {Mycontext,Appcontext};