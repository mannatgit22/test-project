import "../css/topbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Navigate } from "react-router-dom";

function Topbar()

{
    const [goToHome , setGoToHome] = useState(false);
    if(goToHome)
    {
        return (<Navigate to = "/home"/>);
    }
    const handleHome = (e) => {
        e.preventDefault();
        return (setGoToHome(true));
    }
    return(
        <>
            <div className="topbar">
             
            <h1 className="sitename"><button className = "button" style = {{cursor : "pointer", padding : "13px"}} onClick = {handleHome} >B.planet</button></h1>

            <div className="gridbox-item2">
                    <Link to="/contact" className="contact" style = {{marginTop : "40px"}}>Contact us</Link>
                   
                    <br /><br /><br />
                </div>
            </div>
        </>
    )
}

export default Topbar;