import React, { useState } from "react";
// import "../css/description.css";

import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import Topbar from "./Topbar";
import { removeListener } from "@reduxjs/toolkit";
import { useRef } from "react";

function AdminDescription()
{
    const [newData,setNewData] = useState({
        id : "image21",
        pic : "data:image/png;base64,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",
        title : "Title",
        subtitle : "Subtitle",
        guide :"Guide",
        careGuide : {
            water : "Water",
            light : "Light",
            tips : "Tips"
        },
        description : "Description"
    })

    const addProductToLocalStorage = () => {
        // Get the existing data from localStorage
        const storedData = JSON.parse(localStorage.getItem("dataImage")) || [];
    
        // Add the new product to the existing data
        const updatedData = [...storedData, newData];
    
        // Save the updated data back to localStorage
        localStorage.setItem("dataImage", JSON.stringify(updatedData));
      };

    let name,value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value
        setNewData ({...newData , [name]:value});
    };

    const [image , setImage] = useState("");
    const handleImageChange = (e) =>
        {
            setImage(e.target.files[0]);
            const file = e.target.files[0];
            const reader = new FileReader()
            reader.onloadend = () =>{
                setNewData({...newData, pic : reader.result });
            };
            if(file) {
                reader.readAsDataURL(file);
            }
        };

        const [isReadOnly, setIsReadOnly] = useState(true);

        const toggleReadOnly = () => {
            setIsReadOnly(!isReadOnly);
        };
    
        const [goToHome , setGoToHome] = useState(false);
        if(goToHome)
        {
          return (<Navigate to = "/home" />);
        }
        const handleHome = (e) => {
          e.preventDefault();
          return (setGoToHome(true));
        };
        
        

    return (
        <>
             <Topbar /> 
            
            <div className="hero" style = {{display : "grid",overflowWrap:"anywhere", margin : "4vw", justifyContent:"space-evenly"}}>
                <div style = {{gridArea : "1/1/1/1"}}>
                    <input type = "text" id = "title" value = {newData.title} name = "title" style = {{fontSize : "28px"}} onChange = {handleChange} readOnly = {isReadOnly}/><i className="fa-solid fa-pen" style={{padding:"0px 10px"}} onClick = {toggleReadOnly}></i>
                    <br /><br/>
                    <input type = "text" id = "subtitle" name = "subtitle" value = {newData.subtitle} style = {{fontSize : "20px"}} readOnly = {isReadOnly} onChange = {handleChange}/><i className="fa-solid fa-pen" style={{padding:"0px 10px",fontSize : "15px"}} onClick = {toggleReadOnly}></i>
                    <br /><br /><br />
                    <input type = "text" id = "guide" value = {newData.guide} style= {{fontSize : "28px"}} readOnly = {isReadOnly} onChange = {handleChange}/><i className="fa-solid fa-pen" style={{padding:"0px 10px"}} onClick = {toggleReadOnly}></i>
                    <br />
                    <p>&nbsp;</p>
                    <hr />
                    <br />
                    <div style={{display:"grid", gridTemplateColumns:"15vw 30vw 1vw"}}>
                    <input type = "text" id = "water" name = "water" value = {newData.careGuide.water} style = {{fontSize : "20px"}} onChange = {handleChange}/>
                    <input type = "text" id = "water" name = "texts" value = {newData.careGuide.description} style = {{fontSize : "20px",marginLeft:"20px"}} onChange = {handleChange}/>
                    <i className="fa-solid fa-pen" style={{padding:"5px 10px"}} onClick = {toggleReadOnly}></i>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div style={{display:"grid", gridTemplateColumns:"15vw 30vw 1vw"}}>
                    <input type = "text" id = "light" name = "light" value = {newData.careGuide.light} style = {{fontSize : "20px"}} onChange = {handleChange}/>
                    <input type = "text" id = "light" name = "light" value = {newData.careGuide.descriotion} style = {{fontSize : "20px",marginLeft:"20px"}} onChange = {handleChange}/>
                    <i className="fa-solid fa-pen" style={{padding:"0px 10px"}} onClick = {toggleReadOnly}></i>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div style={{display:"grid", gridTemplateColumns:"15vw 30vw 1vw"}}>
                    <input type = "text" id = "id" name="tips" value = {newData.careGuide.tips} style = {{fontSize : "20px"}} onChange = {handleChange}/>
                    <input type = "text" id = "id" name="tips" value = {newData.careGuide.description} style = {{fontSize : "20px",marginLeft:"20px"}} onChange = {handleChange}/>
                    <i className="fa-solid fa-pen" style={{padding:"0px 10px"}} onClick = {toggleReadOnly}></i>
                    </div>
                    <br />
                    <hr />
                    <br /><br /><br />
                    <input type = "text" id = "description" name = "description" value = {newData.description} style = {{fontSize : "28px"}} readOnly = {isReadOnly} onChange = {handleChange}/><i className="fa-solid fa-pen" style={{padding:"0px 10px"}} onClick = {toggleReadOnly}></i>
                    <br/><br/>
                    <textarea rows = "3" placeholder = "Write your Description here" style = {{fontSize : "20px",width : "50vw"}} />
                </div>
                <div style = {{gridArea : "1/2/1/2", marginBottom:"1px" }}>
                    <img src={newData.pic} alt="pic" style = {{height:"40vh", width : "100%", margin:"20vh 3vh 2vh 3vh", border:"1px solid black"}}/>
                    <br />
                    <input type = "file" id = "image" style = {{paddingLeft:"5vw",float : "right"}} onChange={handleImageChange}/>
                </div> 
            </div>
            <button style = {{cursor:"pointer",marginLeft : " 45vw" ,marginBottom:"10px",padding:"10px",border:"2px solid black" ,borderRadius:"30px",fontSize:"20px"}} onClick={addProductToLocalStorage}>Save changes</button>
        </>
    )
}

export default AdminDescription;