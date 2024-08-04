import React from "react" ;
import "../css/contact.css";
import { useState , useEffect} from "react";
import { Navigate } from "react-router-dom";
import imageData from "../store/data.json";







function ContactContent()
{
    const [dataImage , setDataImage] = useState(imageData);
    localStorage.setItem("dataimage",JSON.stringify(dataImage));
    const [userProfile, setUserProfile] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        number: "",
        address: "",
        state: "",
        zipcode: ""
    });
    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem("signin")) || {
            profilePic: "",
            name: "",
            email: "",
            password: "",
            role: "",
            number: "",
            address: "",
            state: "",
            zipcode: ""
        };
        setUserProfile(storedProfile);
    }, []);






    const [goToHome , setGoToHome] = useState(false);
    if(goToHome)
    {
        return (<Navigate to = "/home"/>);
    }
    const handleHome = (e) => {
        e.preventDefault();
        return (setGoToHome(true));
    }


    
        
    
    if(userProfile.role === "Admin User"){
    return (
        <>
            <h1 className="sitename"><button className = "button" style = {{cursor : "pointer", padding : "13px"}} onClick = {handleHome} >B.planet</button></h1>
            <h1 className = "contactheading">Contact us</h1>
            <div className="grid-container1">
                <div className="i1">
                    <p className="h1">Stay Updated</p>
                    Need to get in touch with us ?
                    <br /><br />
                    <a href = "https://www.facebook.com/" target = "_blank" className="link">Facebook</a>
                    <br />
                    <a href = "https://www.instagram.com/" target = "_blank" className="link">Instagram</a>
                </div>
                <div className="i2">
                    <input type = "text" id = "name" placeholder = "Name" className="ci"/>
                    <br /><br />
                    <input type = "text" id = "email" placeholder = "Email Address" className="ci" />
                    <br /><br />
                    <textarea id ="comment" rows = "3" placeholder="What can we help you with ?" className="ci"></textarea>
                    <br /><br />
                    <button className="submit">Submit</button>
                </div>
            </div>
        </>
    )
}
else{
    return (
        <>
            <h1 className="sitename"><button className = "button" style = {{cursor : "pointer", padding : "13px"}} onClick = {handleHome} >B.planet</button></h1>
            <h1 className = "contactheading">Contact us</h1>
            <div className="grid-container1">
                <div className="i1">
                    <p className="h1">Stay Updated</p>
                    Need to get in touch with us ?
                    <br /><br />
                    <a href = "https://www.facebook.com/" target = "_blank" className="link">Facebook</a>
                    <br />
                    <a href = "https://www.instagram.com/" target = "_blank" className="link">Instagram</a>
                </div>
                <div className="i2">
                    <input type = "text" id = "name" placeholder = "Name" className="ci"/>
                    <br /><br />
                    <input type = "text" id = "email" placeholder = "Email Address" className="ci" />
                    <br /><br />
                    <textarea id ="comment" rows = "3" placeholder="What can we help you with ?" className="ci"></textarea>
                    <br /><br />
                    <button className="submit">Submit</button>
                </div>
            </div>
        </>
    )
}
}



export default ContactContent;
