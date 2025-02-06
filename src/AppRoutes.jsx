// src/routes/Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import HomePage from './Components/HomePage';  // Adjust the import path as needed
import CoursesSection from './Components/CoursesSection'  // Adjust the import path as needed
import Login from './Components/Login'  // Adjust the import path as needed
import AboutUs from './Components/AboutUs'  // Adjust the import path as needed
import StudentDashboard from './Components/StudentDashboard'  // Adjust the import path as needed

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />  {/* Use 'element' prop with JSX */}
      <Route path="/login" element={<Login />} />  {/* Use 'element' prop with JSX */}
      <Route path="/about" element={<AboutUs />} />  {/* Use 'element' prop with JSX */}
      <Route path="/courses" element={<CoursesSection />} />  {/* Use 'element' prop with JSX */}
      <Route path="/student" element={<StudentDashboard />} />  {/* Use 'element' prop with JSX */}
    </Routes>
  );
};

export default AppRoutes;
