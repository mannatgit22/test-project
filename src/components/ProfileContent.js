import React from "react";
import Topbar from "./Topbar";
import "../css/signin.css";
import { useState,useEffect } from "react";
import { Navigate } from "react-router-dom";
import profile from "../assets/profile.png";

function ProfileContent()
{
    const [image , setImage] = useState("");
    const[isEditing ,setIsEditing] = useState(false);
    const[userProfile , setUserProfile] = useState({
        name : "",
        email : "",
        password : "",
        role : "",
        number : "",
        address : "",
        state : "",
        zipcode : ""
    });

    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem("signin")) || {     
            profilePic : "",   
            name : "",
            email : "",
            password : "",
            role : "",
            number : "",
            address : "",
            state : "",
            zipcode : ""
        };
        setUserProfile(storedProfile);
    },[]);
    const handleEdit = () =>
    {
        setIsEditing(true);
    };
    const handleSave = (e) =>
    {
        e.preventDefault();
        if (!userProfile.profilePic){
            userProfile.profilePic = profile;
        }
        localStorage.setItem("signin",JSON.stringify(userProfile));
        setIsEditing(false);
    };
    const handleChange = (e) => {
        const{name,value} = e.target;
        setUserProfile((prevProfile) => ({...prevProfile , [name]:value,}));
    };
    const handleImageChange = (e) =>
    {
        setImage(e.target.files[0]);
        const file = e.target.files[0];
        const reader = new FileReader()
        reader.onloadend = () =>{
            setUserProfile({...userProfile, profilePic : reader.result });
        };
        if(file) {
            reader.readAsDataURL(file);
        }
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
            <button className = "button"  onClick = {handleHome} ></button> 
            {isEditing? (
                <div className="grid-container">
                <form>
                    <div className="grid-item1">
                    <br />
                    <img src = {userProfile.profilePic} className = "image" alt = "Profile" />
                    <label htmlFor = "upload" ><i className="fa-solid fa-plus icon"></i></label>
                    <input type = "file" accept = "image/jpeg , image/jpg , image/png" id = "upload" className="display" name = "file" onChange={handleImageChange}/>
                </div>
                <div className="grid-item2">
                    <label htmlFor="name" className= "input">Name</label>
                    <br />
                    <input type = "text" id = "name" placeholder = "Name" className="input1" name = "name" value = {userProfile.name ? userProfile.name : "Hritesh Kumar"} onChange={handleChange} required/>
                    <br /><br/>
                    <label htmlFor="Email" className="input">Email</label>
                    <br />
                    <input type = "text" id = "Email" placeholder = "xyz@gmail.com" className="input1" name = "email" value = {userProfile.email? userProfile.email : "xyz@gmail.com"} onChange={handleChange} required/>
                    <br /><br/>
                    <label htmlFor="password" className="input">Password</label>
                    <br />
                    <input type = "password" id = "password" placeholder = "**********" className="input1" name = "password" value = {userProfile.password? userProfile.password : "************"} onChange={handleChange} required/>
                    <br /><br/>
                    
                    <label htmlFor="number" className="input">Phone Number</label>
                    <br />
                    <input type = "text" id = "number" placeholder = "0123456789" className="input1" name = "number" value = {userProfile.number? userProfile.number : "0123456789"} onChange={handleChange} required />
                    <br /><br/>
                    <label htmlFor="address" className="input">Address</label>
                    <br />
                    <input type = "text" id = "address" placeholder = "xyz street...." className="input1" name = "address" value = {userProfile.address? userProfile.address : "XYZ"} onChange={handleChange} required />
                    <br /><br/>
                    <div className="ok">
                        <span>
                            <label htmlFor="state" className="input grid-item3">State</label>
                            <br />
                            <input type = "text" id = "state" placeholder = "Odisha" className="grid-input1 grid-item3" name = "state" value = {userProfile.state? userProfile.state : "Odisha"} onChange={handleChange} required />
                            <br /><br/>
                        </span>
                        <span>
                            <label htmlFor="zipcode" className="input grid-item3">Zip Code</label>
                            <br />
                            <input type = "text" id = "zipcode" placeholder = "751024" className="grid-input1 grid-item3" name = "zipcode" value = {userProfile.zipcode? userProfile.zipcode : "123456"} onChange={handleChange} required />
                            <br /><br/>
                        </span>
                    </div>
                    <br/>
                    <button onClick={handleSave} className = "signin" >Save changes</button>
                </div>
                </form>
            </div>
            ):(
            <div className="grid-container">
                <form>
                    <div className="grid-item1">
                    <br />
                    <img src = {userProfile.profilePic} className = "image" alt = "Profile" />
                    <label htmlFor = "upload" hidden><i className="fa-solid fa-plus icon"></i></label>
                    <input type = "file" accept = "image/jpeg , image/jpg , image/png" id = "upload" className="display" name = "file"  readOnly/>
                </div>
                <div className="grid-item2">
                    <button className="edit" onClick={handleEdit}>Edit  <i className="fa-solid fa-pen"></i></button>
                    <label htmlFor="name" className= "input">Name</label>
                    <br />
                    <input type = "text" id = "name" placeholder = "Name" className="input1" name = "name" value = {userProfile.name ? userProfile.name : "Hritesh Kumar"} readOnly required/>
                    <br /><br/>
                    <label htmlFor="Email" className="input">Email</label>
                    <br />
                    <input type = "text" id = "Email" placeholder = "abc@gmail.com" className="input1" name = "email" value = {userProfile.email? userProfile.email : "xyz@gmail.com"} readOnly required/>
                    <br /><br/>
                    <label htmlFor="password" className="input">Password</label>
                    <br />
                    <input type = "password" id = "password" placeholder = "**********" className="input1" name = "password" value = {userProfile.password? userProfile.password : "***********"} readOnly required/>
                    <br /><br/>
                    <label htmlFor = "genre" className = "input">Role</label>
                    <br />
                    <input type = "text" className = "input1" name = "role" value = {userProfile.role? userProfile.role : "Normal/Admin"} onChange={handleChange} required/> 
                    <br /><br />
                    <label htmlFor="number" className="input">Phone Number</label>
                    <br />
                    <input type = "text" id = "number" placeholder = "0123456789" className="input1" name = "number" value = {userProfile.number? userProfile.number : "0123456789"}required readOnly />
                    <br /><br/>
                    <label htmlFor="address" className="input">Address</label>
                    <br />
                    <input type = "text" id = "address" placeholder = "xyz street...." className="input1" name = "address" value = {userProfile.address? userProfile.address : "XYZ"} readOnly required />
                    <br /><br/>
                    <div className="ok">
                        <span>
                            <label htmlFor="state" className="input grid-item3">State</label>
                            <br />
                            <input type = "text" id = "state" placeholder = "Odisha" className="grid-input1 grid-item3" name = "state" value = {userProfile.state? userProfile.state : "Odisha"} readOnly required />
                            <br /><br/>
                        </span>
                        <span>
                            <label htmlFor="zipcode" className="input grid-item3">Zip Code</label>
                            <br />
                            <input type = "text" id = "zipcode" placeholder = "751024" className="grid-input1 grid-item3" name = "zipcode" value = {userProfile.zipcode? userProfile.zipcode : "123456"} readOnly required />
                            <br /><br/>
                        </span>
                    </div>
                    <br/>
                </div>
                </form>
            </div>)}
        </>
    )
}

export default ProfileContent;