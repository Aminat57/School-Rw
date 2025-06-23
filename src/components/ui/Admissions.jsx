import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./Admissions.css"; // Import the CSS file

export default function Admissions() {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div className="admissions-container">
      <Card className="admissions-card">
        <CardContent>
          {/* Title and Description */}
          <h2 className="admissions-title">Admissions</h2>
          <p className="admissions-text">
            At GS AKABUGA Primary School, we welcome students from all backgrounds to join our vibrant 
            learning community. Our admission process is designed to be simple, transparent, and inclusive. 
            Below, you'll find all the information you need to enroll your child.
          </p>

          {/* Admission Process Steps */}
          <div className="admissions-grid">
            <div className="admissions-step">
              <h3 className="text-2xl font-semibold text-black mb-3">Step 1: Inquiry</h3>
              <p className="admissions-text">
                Submit an inquiry form to express your interest in our school. Our admissions team will 
                contact you to provide more information and schedule a campus tour.
              </p>
              <Button onClick={() => navigate("/not-found")} className="admissions-btn">
                Learn More
              </Button>
            </div>
            <div className="admissions-step">
              <h3 className="text-2xl font-semibold text-black mb-3">Step 2: Application</h3>
              <p className="admissions-text">
                Complete the online application form and submit the required documents, including your 
                child's academic records and a recommendation letter.
              </p>
              <Button onClick={() => navigate("/not-found")} className="admissions-btn">
                Apply Now
              </Button>
            </div>
            <div className="admissions-step">
              <h3 className="text-2xl font-semibold text-black mb-3">Step 3: Assessment</h3>
              <p className="admissions-text">
                Your child will participate in a brief assessment to evaluate their academic readiness and 
                social skills. This helps us ensure they are placed in the right program.
              </p>
              <Button onClick={() => navigate("/not-found")} className="admissions-btn">
                Schedule Assessment
              </Button>
            </div>
            <div className="admissions-step">
              <h3 className="text-2xl font-semibold text-black mb-3">Step 4: Enrollment</h3>
              <p className="admissions-text">
                Once accepted, complete the enrollment process by submitting the necessary forms and fees. 
                Welcome to the Bright Future family!
              </p>
              <Button onClick={() => navigate("/not-found")} className="admissions-btn">
                Complete Enrollment
              </Button>
            </div>
          </div>

          {/* Key Dates */}
          <div className="admissions-dates">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Key Dates</h3>
            <p><strong>Application Deadline:</strong> March 31, 2025</p>
            <p><strong>Assessment Dates:</strong> April 10-15, 2025</p>
            <p><strong>Admission Results:</strong> April 30, 2025</p>
            <p><strong>Enrollment Deadline:</strong> May 15, 2025</p>
          </div>

          {/* Call-to-Action */}
          <div className="text-center">
            <Button onClick={() => navigate("/not-found")} className="admissions-btn">
              Apply Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
