import {React,useState} from "react";
import "./Login.css"; // Importing CSS
import newLogin from "../assets/newLogin.jpg";
import bg1 from "../assets/bg1.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();

    const handleLogin=()=>{
        console.log("Username:",username);
        console.log("Password:",password);
        if(username==="admin" && password==="admin"){
            navigate("/student");
        }else{
            alert("Login Failed");
        }
    }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <h2 className="login-title">Login</h2>
          <p className="login-subtitle">
            Hey, enter your details to sign in to your account
          </p>
          <div className="form-group">
            <input
              type="email"
              className="input-field"
              placeholder="Enter your Email"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter your Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="primary-btn" onClick={handleLogin}>Login</button>
          </div>
          <div className="social-btns">
            <button className="social-btn">Google</button>
            <button className="social-btn">Facebook</button>
          </div>
          <p className="sign-up-link">
            Don't have an account? <a href="#">Sign Up Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;