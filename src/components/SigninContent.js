import React from "react";
import Topbar from "./Topbar";
import profile from "../assets/profile.png";
import "../css/signin.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function SigninContent()
{
    const [image , setImage] = useState("");
    // localStorage["image"] = {profile};
    const handleImageChange = (e) =>
    {
        setImage(e.target.files[0]);
        const file = e.target.files[0];
        const reader = new FileReader()
        reader.onloadend = () =>{
            setUserSignin({...userSignin, profilePic : reader.result });
        };
        if(file) {
            reader.readAsDataURL(file);
        }
    };


    const [userSignin, setUserSignin] = useState({
        profilePic : "",
        name : "",
        email : "",
        password : "",
        role : "",
        number : "",
        address : "",
        state : "",
        zipcode : ""
    });
    let name,value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserSignin({...userSignin , [name]:value});
    };

    const [goToNext , setGoToNext] = useState(false);
    if (goToNext)
    {
        return <Navigate to = "/profile" />
    }
    const handleSigin = (e) =>
    {
        e.preventDefault();
        if (!userSignin.profilePic){
            userSignin.profilePic = profile;
        }
        localStorage.setItem ("signin",JSON.stringify(userSignin));
        return setGoToNext(true);
    }
    return (
        <>
            <Topbar />
            <div className="grid-container">
                <form onSubmit={handleSigin}>
                    <div className="grid-item1">
                    <br />
                    <img src = {userSignin.profilePic ? userSignin.profilePic : profile} className = "image" alt = "Profile" />

                    <label htmlFor = "upload" ><i className="fa-solid fa-plus icon" ></i></label>
                    <input type = "file" accept = "image/jpeg , image/jpg , image/png" id = "upload" className="display" name = "file" onChange={handleImageChange}/>
                </div>
                <div className="grid-item2">
                    <label htmlFor="name" className= "input">Name</label>
                    <br />
                    <input type = "text" id = "name" placeholder = "Name" className="input1" name = "name" onChange={handleInput} value = {userSignin.name} required/>
                    <br /><br/>
                    <label htmlFor="Email" className="input">Email</label>
                    <br />
                    <input type = "text" id = "Email" placeholder = "xyz@gmail.com" className="input1" name = "email" onChange={handleInput} value = {userSignin.email} required/>
                    <br /><br/>
                    <label htmlFor="password" className="input">Password</label>
                    <br />
                    <input type = "password" id = "password" placeholder = "**********" className="input1" name = "password" onChange={handleInput} value = {userSignin.password} required/>
                    <br /><br/>
                    
                    <label htmlFor="number" className="input">Phone Number</label>
                    <br />
                    <input type = "text" id = "number" placeholder = "0123456789" className="input1" name = "number" onChange={handleInput} value = {userSignin.number}required />
                    <br /><br/>
                    <label htmlFor="address" className="input">Address</label>
                    <br />
                    <input type = "text" id = "address" placeholder = "xyz street...." className="input1" name = "address" onChange={handleInput} value = {userSignin.address} required />
                    <br /><br/>
                    <div className="ok">
                        <span>
                            <label htmlFor="state" className="input grid-item3">State</label>
                            <br />
                            <input type = "text" id = "state" placeholder = "Odisha" className="grid-input1 grid-item3" name = "state" onChange={handleInput} value = {userSignin.state} required />
                            <br /><br/>
                        </span>
                        <span>
                            <label htmlFor="zipcode" className="input grid-item3">Zip Code</label>
                            <br />
                            <input type = "text" id = "zipcode" placeholder = "751024" className="grid-input1 grid-item3" name = "zipcode" onChange={handleInput} value = {userSignin.zipcode} required />
                            <br /><br/>
                        </span>
                    </div>
                    <br/>
                    <button type="submit" className = "signin" >Sign-in</button>
                </div>
                </form>
            </div>
        </>
    )
}

export default SigninContent;