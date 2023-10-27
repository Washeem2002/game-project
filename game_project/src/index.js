import React, { useEffect, useState } from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {Routes,Route,Navigate} from "react-router-dom";
import "./index.css";
import Navbar from "./navbar";
import ALLRoutes from "./Routes/allRoutes";
import Login from "./login";

const App=()=>{
    
    
    return(
        <>
        <Router>
        <Navbar/>
        <ALLRoutes/>
        </Router> 
        
         </> 
    )
}
ReactDOM.render(<App/>,document.getElementById('root'));