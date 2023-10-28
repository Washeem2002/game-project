import { createContext, useState } from "react";
const Mycontext=createContext(null);
const Appcontext=({children})=>{
    const[mass,setmass]=useState("");
    

    return (
        <Mycontext.Provider value={{mass,setmass}}>

            {children}
        </Mycontext.Provider>

    )
}
export  {Mycontext,Appcontext};