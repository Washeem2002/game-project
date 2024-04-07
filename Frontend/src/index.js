import React, { useEffect, useState } from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {Routes,Route,Navigate} from "react-router-dom";
import "./CSS/index.css";
import Navbar from "./Components/navbar";
import ALLRoutes from "./Routes/allRoutes";

import { Appcontext } from "./context/context";

const App=()=>{
    
    
    return(
        <>
        <Router>
        <Appcontext>
      <Navbar/>
        <ALLRoutes/>
        </Appcontext>
        </Router> 
        
         </> 
    )
}
ReactDOM.render(<App/>,document.getElementById('root'));