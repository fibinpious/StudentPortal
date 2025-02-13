// src/routes/Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import HomePage from './Components/HomePage';  
import CoursesSection from './Components/CoursesSection'  
import Login from './Components/Login'  
import AboutUs from './Components/AboutUs'  
import StudentDashboard from './Components/StudentDashboard'  
import IncidentTable from './Components/IncidentTable'  
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/about" element={<AboutUs />} /> 
      <Route path="/courses" element={<CoursesSection />} /> 
      <Route path="/student" element={<StudentDashboard />} /> 
      <Route path="/incidents" element={<IncidentTable />} />
    </Routes>
  );
};

export default AppRoutes;
