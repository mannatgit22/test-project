import "../css/login.css";
import login from "../assets/login.png";
import Topbar from "./Topbar";
import {useState} from "react";
import {Link} from "react-router-dom";
import userdata from "../store/userdata.json";
import {Navigate} from "react-router-dom";

function LoginContent()
{
    //for password
    const [isPassword,setIsPassword] = useState(false);
    const handleChange = (e) => {
        e.preventDefault();
        setIsPassword(!isPassword);
    };

    //for storing users input
    const [userLogin , setUserLogin] = useState({
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
        setUserLogin({...userLogin , [name]:value});
    };

    //for comparing the user's input with the data stored in data.json
    const [goToUserHome , setGoToUserHome] = useState(false);
    const [goToError , setGoToError] = useState(false);
    if (goToUserHome)
    {
        return <Navigate to = "/home" />;
    }
    if (goToError)
    {
        return <Navigate to = "/errorwhilelogin" />;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        userdata.map(data => {
            if((data.email === userLogin.email)&&(data.password === userLogin.password))
            {
                const user = userdata.find((user) => (user.email === userLogin.email)&&(user.password === userLogin.password));
                if(user) {
                    const loginData = {
                        profilePic : user.profilePic,
                        name : user.name,
                        email : user.email,
                        password : user.password,
                        role : user.role,
                        address : user.address,                        
                        number : user.number,
                        state : user.state,
                        zipcode : user.zipcode
                    };
                    localStorage.setItem ("signin",JSON.stringify(loginData));
                    setUserLogin(loginData);
                }
                return (setGoToUserHome(true));
            }
            else
            {
                return(setGoToError(true));
            }
        })
    };

    return(
        <>
            <Topbar />
            <div className="grid">
                <div className = "item1">
                    <img src = {login}  alt = "login"/>
                </div>
                <div className="item2">
                    <h2>Login</h2>
                    <h6>Welcome back !!</h6>
                    <br/>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email" className="logininput">Email</label>
                        <br/>
                        <input type = "text" id = "email" name = "email" placeholder = "xyz@gmail.com" className="logininput1" value = {userLogin.email} onChange={handleInput} required/>
                        <br /><br />
                        <label htmlFor="password">
                            <span className="logininput">Password</span>
                            <span className="input4">Forgot Password?</span>
                        </label>
                        <input type = {isPassword ? "text":"password"} id = "password" name = "password" placeholder = "**************" className="logininput2" value = {userLogin.password} onChange={handleInput}  required/>
                        <button onClick={handleChange} className="eye">{isPassword?<i className="fa-solid fa-eye"></i>:<i className="fa-solid fa-eye-slash"></i>}</button>
                        <br /><br />
                        <button className="login align" type = "submit" >Login</button>
                        <br />
                        <div> 
                            <span className="input2">Don't have an account yet ?  </span>
                            <span><Link to = "/signin" className = "input3">Sign up for free</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginContent;