import React from 'react';
import { useState } from 'react';
import './Login.css'; 
import Google from '../assets/Google.jpg'
import Facebook from '../assets/Facebook.jpg'
import LoginImage from '../assets/LoginImage.jpg'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        if(username === 'admin' && password === 'password') {
            navigate('/home');
        }else{
            alert('Invalid credentials');
        }
    }
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left side - Illustration */}
        <div className="illustration-container">
          <img
            src={LoginImage}
            alt="Illustration"
            className="illustration"
          />
        </div>

        {/* Right side - Login Form */}
        <div className="login-form">
          <h2 className="login-title">Student Login</h2>
          <p className="login-subtitle">
            Hey, enter your details to sign in to your account
          </p>

          <div className="form-group">
            {/* Username / Email Input */}
            <input
              type="text"
              placeholder="Enter your username/email"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="primary-btn" onClick={handleLogin}>Login In</button>

            <div className="flex items-center justify-between w-full text-sm text-gray-500">
              <p>Or sign in with</p>
              <div className="social-btns">
                <button className="social-btn">
                  <img
                    src={Google}
                    alt="Google"
                    className="w-5 h-5"
                  />
                </button>
                <button className="social-btn">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            <p className="sign-up-link mt-4">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign Up Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
