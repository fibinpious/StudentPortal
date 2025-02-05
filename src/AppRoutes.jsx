// src/routes/Routes.jsx
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import HomePage from './Components/HomePage';  // Adjust the import path as needed
import CoursesSection from './Components/CoursesSection'  // Adjust the import path as needed
import Login from './Components/Login'  // Adjust the import path as needed
import AboutUs from './Components/AboutUs';

const AppRoutes = () => {
  return (
    <Router basename='https://studentdemoportal.netlify.app/'>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Use 'element' prop with JSX */}
        <Route path="/home" element={<HomePage />} />  {/* Use 'element' prop with JSX */}
        <Route path="/about" element={<AboutUs />} />  {/* Use 'element' prop with JSX */}
        <Route path="/courses" element={<CoursesSection />} />  {/* Use 'element' prop with JSX */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
