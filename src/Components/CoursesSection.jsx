import React from 'react';
import './CoursesSection.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import { useNavigate } from 'react-router-dom';

const CoursesSection = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };
  return (
    <div className="courses-section">
      <div className="courses-header">
        <h2>Courses</h2>
        <p>Check out our courses 👇</p>
      </div>

      <div className="courses-container">
        {/* Course 1 */}
        <div className="course-card">
          <img src={image1} alt="Computer Science" />
          <h3>Computer Science</h3>
          <p>Engineering</p>
          <button>GO TO →</button>
        </div>

        {/* Course 2 */}
        <div className="course-card">
          <img src={image2} alt="Growth Marketing" />
          <h3>Growth Marketing</h3>
          <p>Business School</p>
          <button>GO TO →</button>
        </div>

        {/* Course 3 */}
        <div className="course-card">
          <img src={image3} alt="Contract Law" />
          <h3>Contract Law</h3>
          <p>Law</p>
          <button>GO TO →</button>
        </div>
      </div>
      <div className="back-button-container">
        <button className="course-button back-button" onClick={handleBack}>
            BACK
        </button>
      </div>
    </div>
  );
};

export default CoursesSection;
