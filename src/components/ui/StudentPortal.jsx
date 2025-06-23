import React, { useState } from "react";
import studentImg from "@/assets/student.png"; // Ensure the image path is correct
import NotFound from "./NotFound"; // Import NotFound component
import "./StudentPortal.css"; // Import CSS

export default function StudentPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [hovered, setHovered] = useState(false); // Track hover state
  const [selectedPage, setSelectedPage] = useState("dashboard"); // Default page

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError(""); // Reset error on input change
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === "student" && credentials.password === "password") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCredentials({ username: "", password: "" });
    setSelectedPage("dashboard");
  };

  return (
    <div className="student-portal-container">
      {/* Login Section */}
      {!isLoggedIn ? (
        <div className="login-section">
          <div
            className={`login-image ${hovered ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img src={studentImg} alt="Student Portal" />
          </div>
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Student Login</h2>
            {error && <p className="error-message">{error}</p>}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      ) : (
        /* Student Dashboard */
        <>
          {selectedPage === "dashboard" ? (
            <div className="dashboard">
              <h1>Welcome, {credentials.username}!</h1>
              <p>Here’s your dashboard. Stay updated with your assignments, grades, and announcements.</p>

              {/* Dashboard Cards */}
              <div className="dashboard-cards">
                {[
                  { title: "Assignments", description: "View and submit your assignments here." },
                  { title: "Grades", description: "Check your latest grades and progress." },
                  { title: "Announcements", description: "Stay updated with school announcements." },
                ].map((card, index) => (
                  <div className="card" key={index} onClick={() => setSelectedPage(card.title.toLowerCase())}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <button className="card-button">View {card.title}</button>
                  </div>
                ))}
              </div>

              {/* Logout Button */}
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <NotFound />
          )}
        </>
      )}
    </div>
  );
}
