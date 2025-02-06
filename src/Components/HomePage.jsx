import React from 'react';
import './HomePage.css';
import HomePageImage from '../assets/HomePageImage.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const handleSignin = () => {
        console.log("Sign In Clicked");
        navigate("/login");
    }
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-highlight">&lt;NoCode&gt;</span> University
        </div>
        <nav className="nav-links">
          <a href="/about">About Us</a>
          <a href="/courses">Courses</a>
          <a href="#professors">Professors</a>
          <button className="btn sign-in" onClick={handleSignin}>Sign In</button>
        </nav>
      </header>

      {/* Main Section */}
      <main className="main-section">
        <div className="content">
          <h1 className="animated-title">Welcome To </h1>
          <h1 className="animated-title"> NoCode University’s Student Portal </h1>
          <h1 className="animated-title"> Student Portal </h1>
          <p className="animated-text">
            A space where current students and teachers can learn more about courses and their peers.
          </p>
          <div className="buttons">
            <button className="btn btn-secondary" onClick={handleSignin}>Sign in</button>
          </div>
        </div>

        {/* Right Side (Illustration) */}
        {/* <div className="illustration">
          <img src={HomePageImage} alt="Illustration" />
        </div> */}
      </main>
    </div>
  );
};

export default HomePage;
