import "../css/home.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/Hero image 1.png";
import image2 from "../assets/hero image 2.png";
import imageData from "../store/data.json";
import { useNavigate } from 'react-router-dom';

function HomeContent() {
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
    
    const navigate = useNavigate();
    
    const handleProductClick = (id) => {
        navigate(`/description/${id}`);
    };

    const handleTableData = () =>
    {
        return dataImage.map((item, i) => (
            <div className="td" onClick={() => handleProductClick(item.id)}>
                <img src={item.pic} alt="pic" style={{ cursor: 'pointer', width: '100px', height: 'auto' }} />{item.title}
            </div>
        ));
    }
    const handleAdminDesc = (e) =>
    {
        e.preventDefault();
        navigate("/editdesc");
    }

if(userProfile.role === "Admin User"){
    return (
        <>
            <div className="grid-box">
                <div className="gridbox-item1">
                    <h1 className="homepage">B.planet</h1>
                </div>

                <div className="gridbox-item2">
                    <Link to="/contact" className="contact" style = {{marginTop : "40px"}}>Contact us</Link>
                    <Link to="/profile" ><img src={userProfile.profilePic} className="profile" alt="Profile"  /></Link>
                    <br /><br /><br />
                </div>
                <br />

                <div className="set">
                <div className="gridbox-item3">
                    <span><textarea  rows = "2" placeholder = "'Heading'" style = {{ fontSize : "33px" ,color : "red", backgroundColor : "#cdc3b6",paddingTop: "3.5vh", width : "28vw", height : "100px"}} /></span>
                </div>
                <div className="gridbox-item4">
                    <img src={image1} alt="image1" className="image1" />
                    <img src={image2} alt="image1" className="image1" />
                </div>
                </div>
            </div>
            <div className="div">
                <br /><br />
                <h2>Featured Product</h2>
                <br />
                <div className="table">
                    {handleTableData()}
                    <button style = {{border:"1px solid grey", backgroundColor : "white", padding : "50px 10px", cursor : "pointer"}} onClick={handleAdminDesc}><i className="fa-solid fa-plus" style = {{fontSize : "50px", color : "grey"}}></i></button>
                    <button style = {{ border:"1px solid grey", backgroundColor : "white", padding : "50px 10px", cursor : "pointer"}} onClick={handleAdminDesc}><i className="fa-solid fa-plus" style = {{fontSize : "50px", color : "grey"}}></i></button>
                    <button style = {{ border:"1px solid grey", backgroundColor : "white",  padding : "50px 10px", cursor : "pointer"}} onClick={handleAdminDesc}><i className="fa-solid fa-plus" style = {{fontSize : "50px", color : "grey"}}></i></button>
                    <button style = {{ border:"1px solid grey",backgroundColor : "white",  padding : "50px 10px", cursor : "pointer"}} onClick={handleAdminDesc}><i className="fa-solid fa-plus" style = {{fontSize : "50px", color : "grey"}}></i></button>
                </div>
                {/* <button style = {{border : "1px solid black", borderRadius: "50%", backgroundColor : "white", marginLeft : "84vw", padding : "7px 10px", cursor : "pointer"}} onClick={handleAdminDesc}><i className="fa-solid fa-plus" style = {{fontSize : "50px", color : "grey"}}></i></button> */}
            </div>
            <div className="pagination">
                <button className="button" unabled style={{fontSize: "25px"}}><i className="fa-solid fa-angle-left"></i>  Previous</button>
                <button className="button" unabled style={{fontSize: "25px"}}> 1 </button>
                <button className="button" unabled style={{fontSize: "25px"}}>Next <i className="fa-solid fa-angle-right"></i></button>
            </div>
        </>
    )
}
else
{
    return (
        <>
            <div className="grid-box">
                <div className="gridbox-item1">
                    <h1 className="homepage">B.planet</h1>
                </div>

                <div className="gridbox-item2">
                    <Link to="/contact" className="contact">Contact us</Link>
                    <Link to="/profile" ><img src={userProfile.profilePic} className="profile" alt="Profile" /></Link>
                    <br /><br /><br />
                </div>
                <br />

                <div className="set">
                <div className="gridbox-item3">
                    <p className="heading1">'As interesting <br/>as a plant'</p>
                    
                </div>
                <div className="gridbox-item4">
                    <img src={image1} alt="image1" className="image1" />
                    <img src={image2} alt="image1" className="image1" />
                </div>
                </div>
            </div>
            <div className="div">
                <br /><br />
                <h2>Featured Product</h2>
                <br />
                <div className="table">
                    {handleTableData()}
                </div>
            </div>
            <div className="pagination">
                <button class="button" disabled style={{fontSize: "25px"}}><i className="fa-solid fa-angle-left"></i>  Previous</button>
                <button class="button" disabled style={{fontSize: "25px"}}> 1 </button>
                <button class="button" disabled style={{fontSize: "25px"}}>Next <i className="fa-solid fa-angle-right" ></i></button>
            </div>
        </>
    )
}
}

export default HomeContent;