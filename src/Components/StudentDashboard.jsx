// StudentDashboard.jsx
import React from 'react';
import { Search, Bell, Settings, BookOpen, Users, CreditCard, Home, LogOut } from 'lucide-react';
import './StudentDashboard.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const courses = [
    { name: 'Graphic Fundamentals - ART101', subtitle: 'Design Studio', colorClass: 'purple' },
    { name: 'Advanced Web Design - FED201', subtitle: 'Tuesday & Thursday', colorClass: 'yellow' },
    { name: 'User Experience Research - UXR301', subtitle: 'Monday & Wednesday', colorClass: 'blue' },
    { name: '3D Animation - ANI401', subtitle: 'Studio', colorClass: 'green' }
  ];

  const teamBoard = [
    { submission: 'Graphic Design Fundamentals', course: 'ART101', dueDate: 'Feb 10, 2024', status: 'completed' },
    { submission: 'UX Research Report', course: 'UXR301', dueDate: 'Feb 12, 2024', status: 'pending' }
  ];

  const homework = [
    'Graphic Fundamentals - Research Paper',
    'Advanced Web Design - Wireframe',
    'User Experience Research - Case Study'
  ];

  const handleSignOut = () => {
    navigate('/');
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-content">
          <h2 className="logo"></h2>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="#" className="nav-link">
                  <Home size={20} />
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <Users size={20} />
                  Team Board
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <BookOpen size={20} />
                  Grades Report
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <BookOpen size={20} />
                  Enrolled Courses
                </a>
              </li>
              <li>
                <a href="#" className="nav-link" onClick={(e) => {
                  e.preventDefault();
                  navigate('/incidents');
                }}>
                  <CreditCard size={20} />
                  Incidents
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <Settings size={20} />
                  Account Settings
                </a>
              </li>
              <li className="sign-out">
                <a href="#" className="nav-link" onClick={(e) => {
                  e.preventDefault();
                  handleSignOut();
                }}>
                  <LogOut size={20} />
                  Sign Out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <div className="user-info">
            <span>Welcome, Merna!</span>
            <div className="avatar"></div>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="welcome-section">
          <h2>Get Involved – Join a Club Today!</h2>
          <p>Explore your interests and meet like-minded students by joining one of our many clubs.</p>
          <button className="learn-more-btn">Learn More</button>
        </section>

        {/* Enrolled Courses */}
        <section className="enrolled-courses-section">
          <h3>Enrolled Courses</h3>
          <div className="course-grid">
            {courses.map((course, index) => (
              <div key={index} className={`course-card ${course.colorClass}`}>
                <h4>{course.name}</h4>
                <p>{course.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Board */}
        <section className="team-board-section">
          <h3>Team Board</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Submission</th>
                  <th>Course</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {teamBoard.map((item, index) => (
                  <tr key={index}>
                    <td>{item.submission}</td>
                    <td>{item.course}</td>
                    <td>{item.dueDate}</td>
                    <td>
                      <span className={`status-badge ${item.status}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <section className="calendar-section">
          <h3>Calendar</h3>
          <p>January 2024</p>
          <div className="calendar-placeholder">
            <Calendar size={24} />
          </div>
        </section>

        <section className="homework-section">
          <h3>Homework</h3>
          <ul className="homework-list">
            {homework.map((item, index) => (
              <li key={index}>
                <div className="homework-dot"></div>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
};

export default StudentDashboard;
