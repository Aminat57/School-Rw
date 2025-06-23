import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure this file is correctly imported

export default function Header() {
  return (
    <header className="header">
      {/* Clickable school name linking to Welcome page */}
      <h1 className="school-name">
        <Link to="/" className="school-link">GS AKABUGA Primary School</Link>
      </h1>

      {/* Always Visible Search Bar */}
      <div className="search-bar-container">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>

      <nav className="nav-bar">
        <ul className="nav-links">
          <li><Link to="/student-portal"><span className="student-portal-text">Student Portal</span></Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/academics">Academics</Link></li>
          <li><Link to="/map">Map</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
