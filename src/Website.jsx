import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/ui/Header";
import Welcome from "@/components/ui/Welcome";
import Admissions from "@/components/ui/Admissions";
import Academics from "@/components/ui/Academics";
import Map from "@/components/ui/Map";
import Contact from "@/components/ui/Contact";
import NotFound from "@/components/ui/NotFound"; // Optional: 404 page
import Footer from "@/components/ui/Footer"; // Import the Footer component
import StudentPortal from "@/components/ui/StudentPortal";

export default function Website() {
  return (
    <Router>
      {/* Flex container to ensure footer sticks to the bottom */}
      <div className="flex flex-col min-h-screen">
        {/* Fixed Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 pt-20"> {/* Adjust padding to match header height */}
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/student-portal" element={<StudentPortal />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/map" element={<Map />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* Fallback for invalid routes */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}